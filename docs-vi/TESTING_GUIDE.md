# Testing Guide — Unit Test & Integration Test trong Clean Architecture Frontend

> **Dành cho ai:** Toàn bộ team Frontend.
> **Mục tiêu:** Hiểu tại sao viết test, viết test gì, viết như thế nào, và không viết gì.
> **Stack:** Vitest + React Testing Library + MSW

---

## Phần 1: Tại Sao Phải Viết Test?

Trước khi nói đến kỹ thuật, hãy trả lời câu hỏi mà hầu hết developer hay hỏi ngầm:

> *"Dự án tôi đang chạy tốt, sao cần test?"*

### 1.1 Test không phải để tìm bug — mà để ngăn bug quay lại

Khi bạn fix một bug rồi viết test cho nó, bug đó **không bao giờ quay lại** mà bạn không hay biết. Không có test, bug có thể reappear sau 3 tháng khi ai đó refactor code liên quan.

```
Timeline không có test:

Tháng 1:  Fix bug "Văn bản trễ hạn không hiển thị màu đỏ"
Tháng 3:  Dev mới refactor ViewModel Mapper
Tháng 3:  Bug quay lại — không ai biết đến khi user báo cáo
Tháng 3:  Tốn 2 ngày debug lại bug đã fix rồi

Timeline có test:

Tháng 1:  Fix bug + viết test "isOverdue = true khi hanXuLy < hôm nay"
Tháng 3:  Dev mới refactor → CI fail ngay lập tức
Tháng 3:  Dev sửa refactor cho đúng, không có bug
```

### 1.2 Test là documentation sống — không bao giờ lỗi thời

Comment và README có thể lỗi thời. Test không thể — nếu behavior thay đổi mà test không cập nhật, CI sẽ fail ngay.

```typescript
// Đây là documentation sống — đọc test là hiểu behavior
describe('IncomingDocument', () => {
  it('isOverdue = true khi quá hạn và chưa hoàn thành', () => { ... });
  it('isOverdue = false khi đã hoàn thành dù quá hạn', () => { ... });
  it('daysLeft trả về số âm khi trễ hạn', () => { ... });
  it('canBeProcessed = false khi đã hoàn thành', () => { ... });
});

// Đọc test này → hiểu ngay business rules của IncomingDocument
// Không cần hỏi PM, không cần đọc spec cũ
```

### 1.3 Test cho phép refactor tự tin

Không có test, refactor = cầu nguyện. Có test, refactor = biết ngay cái gì bị vỡ.

```
Không có test:
  "Tôi muốn refactor ViewModel Mapper để dùng strategy pattern"
  → "Nhưng nếu tôi vỡ gì thì sao?"
  → Không refactor → code ngày càng tệ

Có test:
  "Tôi refactor ViewModel Mapper"
  → Run test → 2 test fail → đọc fail message → biết chính xác vỡ gì
  → Fix → all pass → refactor xong, tự tin
```

### 1.4 Chi phí thực tế

Đây là con số thực từ nhiều dự án lớn:

```
Không có test:
  Bug production nhỏ:   2–4 giờ (reproduce + debug + fix + manual verify)
  Bug production lớn:   2–5 ngày
  Refactor lớn:         Không dám làm

Có test tốt:
  Viết test cho 1 feature: 20–40% thời gian development
  Fix bug có test:          30 phút (test chỉ chính xác chỗ vỡ)
  Refactor lớn:             Làm được, CI báo ngay nếu vỡ
  ROI: Dương từ tháng 3–4 trở đi
```

---

## Phần 2: Testing Pyramid — Viết Cái Gì, Bao Nhiêu

```
                    /\
                   /  \
                  / E2E \        ← Ít nhất (5–10%)
                 /      \         Chậm, đắt, brittle
                /────────\
               / Integrat. \     ← Vừa phải (20–30%)
              /             \     Test nhiều layer phối hợp
             /───────────────\
            /   Unit Tests    \   ← Nhiều nhất (60–70%)
           /                   \   Nhanh, rẻ, cô lập
          /─────────────────────\
```

### Áp dụng vào kiến trúc của chúng ta

| Layer | Test type | Công cụ | Test gì |
|---|---|---|---|
| Domain (Entity, VO) | **Unit** | Vitest | Business rules, validation |
| Application (Commands, Queries) | **Unit** | Vitest + Mock repo | Điều phối logic |
| Infrastructure (Repository) | **Integration** | Vitest + MSW | API call + mapping |
| Presentation (Hook) | **Integration** | Vitest + MSW + RTL | Hook behavior |
| Presentation (Component) | **Unit** | RTL | Render đúng với props |
| Full flow | **E2E** | Playwright | Critical user journeys |

---

## Phần 3: Unit Test

### 3.1 Domain Layer — Thuần túy nhất, dễ nhất

Domain không có dependency ngoài TypeScript. Test cực kỳ nhanh và đơn giản.

```typescript
// src/features/approval/van-ban-den/domain/entities/__tests__/IncomingDocument.test.ts

import { describe, it, expect, beforeEach } from 'vitest';
import {
  IncomingDocument,
  DocumentStatus,
  UrgencyLevel,
} from '../IncomingDocument.entity';

// ─── Helpers — tái sử dụng để tạo test data ────────────────────────────

function makeDocument(overrides: Partial<Parameters<typeof IncomingDocument.create>[0]> = {}) {
  return IncomingDocument.create({
    soDen:    '001/2024/VB-HCNS',
    ngayDen:  new Date('2024-01-10'),
    hanXuLy:  new Date('2024-01-20'),
    doKhan:   UrgencyLevel.THUONG,
    noiDung:  'Nội dung test',
    assignee: { id: 'u1', fullName: 'Nguyễn A', donVi: 'P.HCNS' },
    ...overrides,
  });
}

// ─── Test Suite ────────────────────────────────────────────────────────

describe('IncomingDocument Entity', () => {

  // ── isOverdue() ──────────────────────────────────────────────────────

  describe('isOverdue()', () => {
    it('trả về TRUE khi quá hạn và chưa hoàn thành', () => {
      const pastDeadline = new Date('2020-01-01'); // Hạn đã qua
      const doc = makeDocument({ hanXuLy: pastDeadline });

      expect(doc.isOverdue()).toBe(true);
    });

    it('trả về FALSE khi chưa đến hạn', () => {
      const futureDeadline = new Date('2099-01-01'); // Hạn trong tương lai
      const doc = makeDocument({ hanXuLy: futureDeadline });

      expect(doc.isOverdue()).toBe(false);
    });

    it('trả về FALSE khi đã hoàn thành dù quá hạn', () => {
      // Business rule quan trọng: Hoàn thành rồi thì không còn "trễ" nữa
      const pastDeadline = new Date('2020-01-01');
      const doc = makeDocument({ hanXuLy: pastDeadline })
        .withStatus(DocumentStatus.HOAN_THANH);

      expect(doc.isOverdue()).toBe(false);
    });
  });

  // ── daysUntilDeadline() ──────────────────────────────────────────────

  describe('daysUntilDeadline()', () => {
    it('trả về số âm khi trễ hạn', () => {
      // 10 ngày trước
      const pastDate = new Date(Date.now() - 10 * 24 * 60 * 60 * 1000);
      const doc = makeDocument({ hanXuLy: pastDate });

      expect(doc.daysUntilDeadline()).toBeLessThan(0);
    });

    it('trả về số dương khi còn hạn', () => {
      // 10 ngày sau
      const futureDate = new Date(Date.now() + 10 * 24 * 60 * 60 * 1000);
      const doc = makeDocument({ hanXuLy: futureDate });

      expect(doc.daysUntilDeadline()).toBeGreaterThan(0);
    });
  });

  // ── canBeProcessed() ─────────────────────────────────────────────────

  describe('canBeProcessed()', () => {
    it.each([
      [DocumentStatus.CHO_XU_LY,  true,  'Chờ xử lý → có thể xử lý'],
      [DocumentStatus.DANG_XU_LY, true,  'Đang xử lý → có thể tiếp tục'],
      [DocumentStatus.HOAN_THANH, false, 'Hoàn thành → không thể xử lý nữa'],
      [DocumentStatus.DA_TRA_LAI, false, 'Đã trả lại → không thể xử lý'],
    ])('status %s → canBeProcessed = %s (%s)', (status, expected) => {
      const doc = makeDocument().withStatus(status);
      expect(doc.canBeProcessed()).toBe(expected);
    });
  });

  // ── withStatus() — immutability ──────────────────────────────────────

  describe('withStatus()', () => {
    it('trả về document MỚI không mutate document gốc', () => {
      const original = makeDocument();
      const updated = original.withStatus(DocumentStatus.HOAN_THANH);

      // Document gốc không thay đổi
      expect(original.status).toBe(DocumentStatus.CHO_XU_LY);
      // Document mới có status mới
      expect(updated.status).toBe(DocumentStatus.HOAN_THANH);
      // Là 2 object khác nhau
      expect(original).not.toBe(updated);
    });
  });

  // ── create() — validation ────────────────────────────────────────────

  describe('create() validation', () => {
    it('throw DomainError khi số đến rỗng', () => {
      expect(() => makeDocument({ soDen: '' }))
        .toThrow('Số đến không được để trống');
    });

    it('throw DomainError khi hạn xử lý trước ngày đến', () => {
      expect(() => makeDocument({
        ngayDen: new Date('2024-01-20'),
        hanXuLy: new Date('2024-01-10'), // Hạn trước ngày đến
      })).toThrow('Hạn xử lý phải sau ngày đến');
    });
  });
});
```

```typescript
// src/features/auth/domain/value-objects/__tests__/Email.test.ts

import { describe, it, expect } from 'vitest';
import { Email } from '../Email.vo';
import { DomainError } from '@/shared/domain/DomainError';

describe('Email Value Object', () => {
  describe('create() — valid emails', () => {
    it.each([
      'user@example.com',
      'USER@EXAMPLE.COM',          // Case insensitive
      '  user@example.com  ',      // Trimmed
      'user.name+tag@example.co.uk',
    ])('tạo được Email từ "%s"', (raw) => {
      expect(() => Email.create(raw)).not.toThrow();
    });
  });

  describe('create() — invalid emails', () => {
    it.each([
      ['', 'chuỗi rỗng'],
      ['notanemail', 'không có @'],
      ['@nodomain.com', 'không có local part'],
      ['user@', 'không có domain'],
      ['user @example.com', 'có khoảng trắng giữa'],
    ])('throw DomainError với "%s" (%s)', (raw) => {
      expect(() => Email.create(raw))
        .toThrow(DomainError);
    });
  });

  describe('behavior', () => {
    it('normalize về lowercase', () => {
      const email = Email.create('USER@EXAMPLE.COM');
      expect(email.value).toBe('user@example.com');
    });

    it('trim khoảng trắng', () => {
      const email = Email.create('  user@example.com  ');
      expect(email.value).toBe('user@example.com');
    });

    it('equals() so sánh theo giá trị không phải reference', () => {
      const a = Email.create('user@example.com');
      const b = Email.create('USER@EXAMPLE.COM');
      expect(a.equals(b)).toBe(true);
    });

    it('getDomain() trả về phần sau @', () => {
      const email = Email.create('user@company.vn');
      expect(email.getDomain()).toBe('company.vn');
    });
  });
});
```

### 3.2 Application Layer — Test Use Case, Mock Repository

```typescript
// src/features/approval/van-ban-di/application/commands/__tests__/ApproveDocumentCommand.test.ts

import { describe, it, expect, vi, beforeEach } from 'vitest';
import {
  ApproveDocumentCommand,
  ApproveDocumentCommandHandler,
} from '../ApproveDocumentCommand';
import { OutgoingDocument, DocumentStatus } from '../../../domain/entities/OutgoingDocument.entity';
import type { IOutgoingDocumentRepository } from '../../../domain/repositories/IOutgoingDocumentRepository';
import { DocumentNotFoundError } from '@/shared/domain/DomainError';

// ─── Mock Repository ───────────────────────────────────────────────────
// Tạo mock bằng vi.fn() — kiểm soát hoàn toàn behavior trong từng test

function makeOutgoingDoc(overrides = {}) {
  return new OutgoingDocument({
    id:        'doc-001',
    soHieu:    'VB-001/2024',
    status:    DocumentStatus.CHO_DUYET,
    createdBy: 'user-001',
    ...overrides,
  });
}

function makeMockRepo(): IOutgoingDocumentRepository {
  return {
    findById: vi.fn(),
    save:     vi.fn(),
    findAll:  vi.fn(),
    delete:   vi.fn(),
  };
}

describe('ApproveDocumentCommandHandler', () => {
  let mockRepo: IOutgoingDocumentRepository;
  let handler: ApproveDocumentCommandHandler;

  beforeEach(() => {
    mockRepo = makeMockRepo();
    handler  = new ApproveDocumentCommandHandler(mockRepo);
  });

  // ── Happy Path ────────────────────────────────────────────────────────

  it('phê duyệt thành công và lưu document với status mới', async () => {
    const doc = makeOutgoingDoc();
    vi.mocked(mockRepo.findById).mockResolvedValue(doc);
    vi.mocked(mockRepo.save).mockImplementation(async (d) => d);

    const cmd = new ApproveDocumentCommand('doc-001', 'approver-001', 'LGTM');
    const result = await handler.handle(cmd);

    // Kiểm tra kết quả trả về
    expect(result.documentId).toBe('doc-001');
    expect(result.newStatus).toBe(DocumentStatus.DA_DUYET);

    // Kiểm tra save được gọi với document đã approve
    expect(mockRepo.save).toHaveBeenCalledOnce();
    const savedDoc = vi.mocked(mockRepo.save).mock.calls[0][0];
    expect(savedDoc.status).toBe(DocumentStatus.DA_DUYET);
    expect(savedDoc.approvedBy).toBe('approver-001');
  });

  // ── Error Cases ───────────────────────────────────────────────────────

  it('throw DocumentNotFoundError khi document không tồn tại', async () => {
    vi.mocked(mockRepo.findById).mockResolvedValue(null);

    const cmd = new ApproveDocumentCommand('nonexistent', 'approver-001');

    await expect(handler.handle(cmd))
      .rejects
      .toThrow(DocumentNotFoundError);

    // Quan trọng: save KHÔNG được gọi khi document không tồn tại
    expect(mockRepo.save).not.toHaveBeenCalled();
  });

  it('throw lỗi khi document không ở trạng thái có thể duyệt', async () => {
    // Document đã được duyệt rồi — không thể duyệt lại
    const alreadyApproved = makeOutgoingDoc({ status: DocumentStatus.DA_DUYET });
    vi.mocked(mockRepo.findById).mockResolvedValue(alreadyApproved);

    const cmd = new ApproveDocumentCommand('doc-001', 'approver-001');

    await expect(handler.handle(cmd))
      .rejects
      .toThrow('Không thể phê duyệt văn bản đang ở trạng thái "da_duyet"');

    expect(mockRepo.save).not.toHaveBeenCalled();
  });

  // ── Interaction Testing ───────────────────────────────────────────────

  it('gọi findById với đúng documentId', async () => {
    const doc = makeOutgoingDoc();
    vi.mocked(mockRepo.findById).mockResolvedValue(doc);
    vi.mocked(mockRepo.save).mockImplementation(async (d) => d);

    await handler.handle(new ApproveDocumentCommand('doc-001', 'approver-001'));

    expect(mockRepo.findById).toHaveBeenCalledWith('doc-001');
  });
});
```

### 3.3 Presentation — Component Unit Test

```typescript
// src/features/approval/van-ban-den/presentation/components/__tests__/DocumentStatusBadge.test.tsx

import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import { DocumentStatusBadge } from '../DocumentStatusBadge';
import { DocumentStatus } from '../../../domain/entities/IncomingDocument.entity';

// Component test: chỉ test "render đúng với props"
// KHÔNG test business logic — đó là việc của domain test

describe('DocumentStatusBadge', () => {
  it.each([
    [DocumentStatus.CHO_XU_LY,  'Chờ xử lý',  'orange'],
    [DocumentStatus.DANG_XU_LY, 'Đang xử lý', 'blue'],
    [DocumentStatus.HOAN_THANH, 'Hoàn thành',  'green'],
    [DocumentStatus.DA_TRA_LAI, 'Đã trả lại',  'red'],
  ])('hiển thị đúng với status %s', (status, expectedLabel, expectedColor) => {
    render(<DocumentStatusBadge status={status} />);

    const badge = screen.getByRole('status');
    expect(badge).toHaveTextContent(expectedLabel);
    expect(badge).toHaveAttribute('data-color', expectedColor);
  });

  it('hiển thị tooltip khi hover', async () => {
    const { user } = renderWithUser(<DocumentStatusBadge status={DocumentStatus.CHO_XU_LY} showTooltip />);

    await user.hover(screen.getByRole('status'));

    expect(await screen.findByRole('tooltip')).toBeInTheDocument();
  });
});
```

### 3.4 ViewModel Mapper — Pure Function Test

```typescript
// src/features/approval/van-ban-den/presentation/mappers/__tests__/IncomingDocumentMapper.test.ts

import { describe, it, expect, vi, afterEach } from 'vitest';
import { toIncomingDocumentVM } from '../IncomingDocumentMapper';
import { IncomingDocument, DocumentStatus, UrgencyLevel }
  from '../../../domain/entities/IncomingDocument.entity';

describe('toIncomingDocumentVM', () => {
  // Mock Date.now() để test isOverdue deterministic
  afterEach(() => { vi.restoreAllMocks(); });

  function makeEntity(overrides = {}) {
    return new IncomingDocument({
      id:       'doc-1',
      soDen:    '001/2024/VB-HCNS',
      ngayDen:  new Date('2024-01-10'),
      hanXuLy:  new Date('2024-01-20'),
      status:   DocumentStatus.CHO_XU_LY,
      doKhan:   UrgencyLevel.KHAN,
      noiDung:  'Test',
      assignee: { id: 'u1', fullName: 'Nguyễn Văn A', donVi: 'P.HCNS' },
      ...overrides,
    });
  }

  describe('date formatting', () => {
    it('format ngayDen thành DD/MM/YYYY', () => {
      const vm = toIncomingDocumentVM(makeEntity(), 'admin');
      expect(vm.ngayDenText).toBe('10/01/2024');
    });

    it('hanXuLyRelative hiển thị "Trễ X ngày" khi quá hạn', () => {
      // Fix "today" = 2024-01-25
      vi.setSystemTime(new Date('2024-01-25'));

      const entity = makeEntity({ hanXuLy: new Date('2024-01-20') });
      const vm = toIncomingDocumentVM(entity, 'admin');

      expect(vm.isOverdue).toBe(true);
      expect(vm.hanXuLyRelative).toBe('Trễ 5 ngày');
    });

    it('hanXuLyRelative hiển thị "Đến hạn hôm nay" khi hết ngày', () => {
      vi.setSystemTime(new Date('2024-01-20T10:00:00'));

      const entity = makeEntity({ hanXuLy: new Date('2024-01-20') });
      const vm = toIncomingDocumentVM(entity, 'admin');

      expect(vm.hanXuLyRelative).toBe('Đến hạn hôm nay');
    });
  });

  describe('status mapping', () => {
    it.each([
      [DocumentStatus.CHO_XU_LY,  'Chờ xử lý',  'warning'],
      [DocumentStatus.DANG_XU_LY, 'Đang xử lý', 'processing'],
      [DocumentStatus.HOAN_THANH, 'Hoàn thành',  'success'],
      [DocumentStatus.DA_TRA_LAI, 'Đã trả lại',  'error'],
    ])('map status %s → label "%s", color "%s"', (status, label, color) => {
      const vm = toIncomingDocumentVM(makeEntity({ status }), 'admin');
      expect(vm.statusLabel).toBe(label);
      expect(vm.statusColor).toBe(color);
    });
  });

  describe('permission-aware fields', () => {
    it('canBeAssigned = true khi admin và status CHO_XU_LY', () => {
      const vm = toIncomingDocumentVM(
        makeEntity({ status: DocumentStatus.CHO_XU_LY }),
        'admin'
      );
      expect(vm.canBeAssigned).toBe(true);
    });

    it('canBeAssigned = false khi user thường', () => {
      const vm = toIncomingDocumentVM(
        makeEntity({ status: DocumentStatus.CHO_XU_LY }),
        'user'  // Không đủ quyền
      );
      expect(vm.canBeAssigned).toBe(false);
    });

    it('canBeAssigned = false khi đã hoàn thành dù là admin', () => {
      const vm = toIncomingDocumentVM(
        makeEntity({ status: DocumentStatus.HOAN_THANH }),
        'admin'
      );
      expect(vm.canBeAssigned).toBe(false);
    });
  });
});
```

---

## Phần 4: Integration Test

Integration test kiểm tra **nhiều layer phối hợp** với nhau. Khác với unit test (mock tất cả), integration test chỉ mock boundary ngoài cùng (HTTP API).

### 4.1 Setup MSW — Mock Service Worker

MSW intercept HTTP request ở network level — test gần với production nhất.

```typescript
// src/test/mocks/handlers/approval.handlers.ts

import { http, HttpResponse } from 'msw';

export const approvalHandlers = [
  // GET /van-ban-den — trả về list
  http.get('/api/van-ban-den', ({ request }) => {
    const url = new URL(request.url);
    const page = Number(url.searchParams.get('page') ?? '1');
    const status = url.searchParams.get('trang_thai');

    let items = fakeDocuments;
    if (status) {
      items = items.filter(d => d.trang_thai === status);
    }

    const pageSize = 10;
    const start = (page - 1) * pageSize;

    return HttpResponse.json({
      data: items.slice(start, start + pageSize),
      total: items.length,
    });
  }),

  // GET /van-ban-den/:id
  http.get('/api/van-ban-den/:id', ({ params }) => {
    const doc = fakeDocuments.find(d => d.id === params.id);
    if (!doc) return new HttpResponse(null, { status: 404 });
    return HttpResponse.json(doc);
  }),

  // PUT /api/van-ban-di/:id/approve
  http.put('/api/van-ban-di/:id/approve', async ({ params, request }) => {
    const body = await request.json() as any;
    const updated = {
      ...fakeOutgoingDocuments.find(d => d.id === params.id),
      trang_thai: 'da_duyet',
      nguoi_duyet: body.approved_by,
    };
    return HttpResponse.json(updated);
  }),
];

// Fake data — gần với API response thật
const fakeDocuments = [
  {
    id: 'doc-001',
    so_den: '001/2024/VB-HCNS',
    ngay_den: '2024-01-10T00:00:00Z',
    han_xu_ly: '2024-01-20T00:00:00Z',
    trang_thai: 'cho_xu_ly',
    do_khan: 'khan',
    noi_dung: 'Văn bản test 1',
    assignee_id: 'u1',
    assignee_name: 'Nguyễn Văn A',
    don_vi: 'P.HCNS',
  },
  // ... thêm data
];
```

```typescript
// src/test/setup.ts — Setup toàn cục cho test

import { beforeAll, afterAll, afterEach } from 'vitest';
import { setupServer } from 'msw/node';
import { cleanup } from '@testing-library/react';
import { approvalHandlers } from './mocks/handlers/approval.handlers';
import { authHandlers } from './mocks/handlers/auth.handlers';

// MSW server với tất cả handlers
export const server = setupServer(
  ...approvalHandlers,
  ...authHandlers,
);

beforeAll(() => server.listen({ onUnhandledRequest: 'error' }));
afterEach(() => {
  server.resetHandlers(); // Reset về default sau mỗi test
  cleanup();             // Unmount React components
});
afterAll(() => server.close());
```

### 4.2 Hook Integration Test

```typescript
// src/features/approval/van-ban-den/presentation/hooks/__tests__/useVanBanDen.integration.test.ts

import { renderHook, waitFor, act } from '@testing-library/react';
import { describe, it, expect, beforeEach } from 'vitest';
import { http, HttpResponse } from 'msw';
import { server } from '@/test/setup';
import { useVanBanDen } from '../useVanBanDen';
import { createTestWrapper } from '@/test/utils/createTestWrapper';
import { DocumentStatus } from '../../../domain/entities/IncomingDocument.entity';

// createTestWrapper: wrap với QueryClientProvider, Router, StoreProvider
const wrapper = createTestWrapper();

describe('useVanBanDen Hook (Integration)', () => {
  // ── Fetch flow ────────────────────────────────────────────────────────

  it('fetch danh sách và trả về ViewModel đã mapped', async () => {
    const { result } = renderHook(() => useVanBanDen(), { wrapper });

    // Ban đầu đang loading
    expect(result.current.isLoading).toBe(true);

    // Chờ fetch xong
    await waitFor(() => expect(result.current.isLoading).toBe(false));

    // Kiểm tra ViewModel — không phải raw data
    expect(result.current.documents).toHaveLength(2);

    const firstDoc = result.current.documents[0];
    expect(firstDoc.soDen).toBe('001/2024/VB-HCNS');
    expect(firstDoc.ngayDenText).toBe('10/01/2024');  // Formatted
    expect(firstDoc.statusLabel).toBe('Chờ xử lý');   // Mapped
    expect(firstDoc.urgencyLabel).toBe('Khẩn');        // Mapped
    expect(typeof firstDoc.isOverdue).toBe('boolean'); // Computed
  });

  // ── Error handling ────────────────────────────────────────────────────

  it('set isError = true khi API trả về 500', async () => {
    // Override handler cho test này — trả về lỗi
    server.use(
      http.get('/api/van-ban-den', () =>
        new HttpResponse(null, { status: 500 })
      )
    );

    const { result } = renderHook(() => useVanBanDen(), { wrapper });
    await waitFor(() => expect(result.current.isLoading).toBe(false));

    expect(result.current.isError).toBe(true);
    expect(result.current.documents).toHaveLength(0);
  });

  // ── Filter flow ────────────────────────────────────────────────────────

  it('re-fetch khi filter thay đổi', async () => {
    const { result } = renderHook(() => useVanBanDen(), { wrapper });
    await waitFor(() => expect(result.current.isLoading).toBe(false));

    const initialCount = result.current.total;

    // Override để trả về filtered data
    server.use(
      http.get('/api/van-ban-den', ({ request }) => {
        const url = new URL(request.url);
        if (url.searchParams.get('trang_thai') === 'cho_xu_ly') {
          return HttpResponse.json({ data: [fakeDocuments[0]], total: 1 });
        }
        return HttpResponse.json({ data: fakeDocuments, total: 2 });
      })
    );

    // Thay đổi filter
    act(() => {
      result.current.setFilter('status', DocumentStatus.CHO_XU_LY);
    });

    await waitFor(() => expect(result.current.total).toBe(1));
    expect(result.current.total).toBeLessThan(initialCount);
  });
});
```

### 4.3 Full Slice Integration Test — Quan Trọng Nhất

Test toàn bộ "lát cắt" từ Command → Handler → Repository → API:

```typescript
// src/features/approval/van-ban-di/application/__tests__/ApprovalSlice.integration.test.ts
// Test một "use case slice" hoàn chỉnh với real CommandBus + real pipeline

import { describe, it, expect, beforeEach } from 'vitest';
import { CommandBus } from '@/app/bus/CommandBus';
import { ValidationBehavior } from '@/app/bus/pipelines/ValidationBehavior';
import { ErrorBehavior } from '@/app/bus/pipelines/ErrorBehavior';
import { ApproveDocumentCommand, ApproveDocumentCommandHandler }
  from '../commands/ApproveDocumentCommand';
import { MockOutgoingDocumentRepository }
  from '../../infrastructure/repositories/OutgoingDocumentRepository.mock';
import { DocumentStatus } from '../../domain/entities/OutgoingDocument.entity';
import { AppError } from '@/app/bus/pipelines/ErrorBehavior';

describe('Approval Slice Integration', () => {
  let bus: CommandBus;
  let mockRepo: MockOutgoingDocumentRepository;

  beforeEach(() => {
    // Setup real bus với real pipeline
    bus     = new CommandBus();
    mockRepo = new MockOutgoingDocumentRepository();

    // Pipeline thật — không mock behaviors
    bus.use(new ErrorBehavior());
    bus.use(new ValidationBehavior());

    // Register handler với mock repository
    bus.register(
      ApproveDocumentCommand,
      new ApproveDocumentCommandHandler(mockRepo)
    );
  });

  it('full flow: validate → check domain → save → return result', async () => {
    // Seed data trong mock repo
    await mockRepo.seed([
      { id: 'doc-1', status: DocumentStatus.CHO_DUYET, createdBy: 'user-1' }
    ]);

    const result = await bus.send(
      new ApproveDocumentCommand('doc-1', 'approver-1', 'Đồng ý')
    );

    // Kiểm tra kết quả
    expect(result.newStatus).toBe(DocumentStatus.DA_DUYET);

    // Kiểm tra state trong repo
    const saved = await mockRepo.findById('doc-1');
    expect(saved?.status).toBe(DocumentStatus.DA_DUYET);
    expect(saved?.approvedBy).toBe('approver-1');
    expect(saved?.approvalComment).toBe('Đồng ý');
  });

  it('ValidationBehavior chặn command invalid trước khi đến handler', async () => {
    // documentId không phải UUID hợp lệ → ValidationBehavior chặn
    await expect(
      bus.send(new ApproveDocumentCommand('not-a-uuid', 'approver-1'))
    ).rejects.toThrow(AppError);

    // Repo không được gọi vì validation fail trước
    expect(await mockRepo.findById('not-a-uuid')).toBeNull();
  });

  it('ErrorBehavior normalize lỗi từ handler về AppError', async () => {
    // Repo rỗng → handler throw DocumentNotFoundError
    // ErrorBehavior bắt và wrap về AppError

    const error = await bus.send(
      new ApproveDocumentCommand('nonexistent', 'approver-1')
    ).catch(e => e);

    expect(error).toBeInstanceOf(AppError);
    expect(error.code).toBe('NOT_FOUND');
    expect(error.statusCode).toBe(404);
  });
});
```

---

## Phần 5: Best Practices

### 5.1 Nguyên Tắc AAA — Arrange, Act, Assert

Mọi test đều có 3 phần rõ ràng:

```typescript
it('phê duyệt document thành công', async () => {
  // ── ARRANGE: Chuẩn bị dữ liệu và environment ──────────────────────
  const doc = makeOutgoingDoc({ status: DocumentStatus.CHO_DUYET });
  vi.mocked(mockRepo.findById).mockResolvedValue(doc);
  vi.mocked(mockRepo.save).mockImplementation(async (d) => d);

  const cmd = new ApproveDocumentCommand('doc-1', 'approver-1', 'OK');

  // ── ACT: Thực hiện hành động cần test ─────────────────────────────
  const result = await handler.handle(cmd);

  // ── ASSERT: Kiểm tra kết quả ───────────────────────────────────────
  expect(result.newStatus).toBe(DocumentStatus.DA_DUYET);
  expect(mockRepo.save).toHaveBeenCalledOnce();
});

// Mỗi phần cách nhau 1 dòng trống — dễ đọc, dễ review
```

### 5.2 Test Naming — Tên Test là Documentation

```typescript
// ❌ Tên test mơ hồ — không hiểu gì khi đọc
it('test 1', () => { ... });
it('works correctly', () => { ... });
it('handles error', () => { ... });

// ✅ Tên test mô tả behavior — đọc như specification
it('isOverdue trả về TRUE khi quá hạn và chưa hoàn thành', () => { ... });
it('throw DocumentNotFoundError khi document không tồn tại trong DB', () => { ... });
it('KHÔNG gọi repo.save() khi validation thất bại', () => { ... });

// Pattern tốt: "[subject] [action/condition] [expected result]"
// "[Entity/Hook/Handler] [khi/khi nào/với] [điều kiện] → [kết quả]"
```

### 5.3 Test Data Builder — Không Lặp Lại Setup

```typescript
// ❌ Lặp lại setup trong mỗi test — brittle, khó maintain
it('test A', () => {
  const doc = new IncomingDocument({
    id: '1', soDen: '001', ngayDen: new Date('2024-01-10'),
    hanXuLy: new Date('2024-01-20'), status: DocumentStatus.CHO_XU_LY,
    doKhan: UrgencyLevel.THUONG, noiDung: 'Test',
    assignee: { id: 'u1', fullName: 'A', donVi: 'B' },
  });
  // Chỉ quan tâm đến status nhưng phải điền hết các field
});

// ✅ Builder Pattern cho test data — chỉ override cái cần test
function makeDoc(overrides: Partial<IncomingDocumentProps> = {}): IncomingDocument {
  return new IncomingDocument({
    id:       overrides.id       ?? 'doc-default',
    soDen:    overrides.soDen    ?? '001/2024/VB-TEST',
    ngayDen:  overrides.ngayDen  ?? new Date('2024-01-10'),
    hanXuLy:  overrides.hanXuLy  ?? new Date('2099-01-20'), // Default: chưa trễ
    status:   overrides.status   ?? DocumentStatus.CHO_XU_LY,
    doKhan:   overrides.doKhan   ?? UrgencyLevel.THUONG,
    noiDung:  overrides.noiDung  ?? 'Nội dung mặc định',
    assignee: overrides.assignee ?? { id: 'u1', fullName: 'Test User', donVi: 'Test' },
  });
}

// Trong test: chỉ khai báo điều quan tâm
it('isOverdue khi quá hạn', () => {
  const doc = makeDoc({ hanXuLy: new Date('2020-01-01') }); // Chỉ override deadline
  expect(doc.isOverdue()).toBe(true);
});
```

### 5.4 One Assert Per Concept — Không Nhồi Nhét

```typescript
// ❌ Nhiều concept trong 1 test — khi fail không biết cái nào sai
it('approve document', async () => {
  const result = await handler.handle(cmd);
  expect(result.newStatus).toBe(DocumentStatus.DA_DUYET);
  expect(result.approvedBy).toBe('user-1');
  expect(result.approvedAt).toBeInstanceOf(Date);
  expect(mockRepo.save).toHaveBeenCalledOnce();
  expect(mockRepo.save).toHaveBeenCalledWith(expect.objectContaining({
    status: DocumentStatus.DA_DUYET,
    approvedBy: 'user-1',
  }));
  expect(mockNotification.send).toHaveBeenCalledWith(
    expect.objectContaining({ type: 'DOCUMENT_APPROVED' })
  );
  // 6 assertions — khi fail, phải đọc toàn bộ mới hiểu
});

// ✅ Tách theo concept — mỗi test có 1 focus rõ ràng
describe('approve document', () => {
  it('trả về status mới trong result', async () => {
    const result = await handler.handle(cmd);
    expect(result.newStatus).toBe(DocumentStatus.DA_DUYET);
  });

  it('lưu document với status đã cập nhật', async () => {
    await handler.handle(cmd);
    const saved = vi.mocked(mockRepo.save).mock.calls[0][0];
    expect(saved.status).toBe(DocumentStatus.DA_DUYET);
  });

  it('gửi notification sau khi approve', async () => {
    await handler.handle(cmd);
    expect(mockNotification.send).toHaveBeenCalledWith(
      expect.objectContaining({ type: 'DOCUMENT_APPROVED' })
    );
  });
});
```

### 5.5 Test Boundary — Chỉ Test Public Interface

```typescript
// ❌ Test implementation detail — brittle, refactor là vỡ
it('gọi axios.get với đúng URL', async () => {
  const spy = vi.spyOn(axios, 'get');
  await repo.findAll({ page: 1 });
  // Test biết cách implement — đổi sang fetch là test vỡ
  expect(spy).toHaveBeenCalledWith('/api/van-ban-den', expect.any(Object));
});

// ✅ Test behavior qua public interface — refactor thoải mái
it('trả về danh sách document đã mapped khi gọi findAll', async () => {
  // MSW intercept HTTP request — không quan tâm dùng axios hay fetch
  const result = await repo.findAll({ page: 1, pageSize: 10 });

  expect(result.items).toHaveLength(2);
  expect(result.items[0]).toBeInstanceOf(IncomingDocument);
  expect(result.items[0].soDen).toBe('001/2024/VB-HCNS');
});
```

### 5.6 Không Test Cái Framework Đã Test

```typescript
// ❌ Test library behavior — vô nghĩa, antd đã test rồi
it('Button render đúng text', () => {
  render(<Button>Click me</Button>);
  expect(screen.getByText('Click me')).toBeInTheDocument();
  // Đang test AntD, không test code của mình
});

// ❌ Test React behavior — vô nghĩa
it('useState update khi setState', () => {
  const { result } = renderHook(() => useState(0));
  act(() => result.current[1](1));
  expect(result.current[0]).toBe(1);
  // Đang test React, không test code của mình
});

// ✅ Test behavior của CODE MÌNH viết
it('hiển thị badge màu đỏ khi document trễ hạn', () => {
  // Đây là behavior TÔI định nghĩa, không phải AntD hay React
  const overdueDoc = makeDocVM({ isOverdue: true, statusColor: 'error' });
  render(<DocumentRow document={overdueDoc} />);

  const badge = screen.getByTestId('status-badge');
  expect(badge).toHaveClass('ant-tag-error'); // Kiểm tra class AntD map đúng
});
```

### 5.7 Test Isolation — Mỗi Test Độc Lập

```typescript
// ❌ Tests phụ thuộc vào nhau — thứ tự chạy ảnh hưởng kết quả
let sharedUser: User;

it('tạo user', () => {
  sharedUser = User.create({ email: 'test@test.com', ... });
  expect(sharedUser.id).toBeDefined();
});

it('kiểm tra email user', () => {
  // Test này fail nếu test trên fail hoặc chạy trước
  expect(sharedUser.email.value).toBe('test@test.com');
});

// ✅ Mỗi test tự setup — chạy theo bất kỳ thứ tự nào cũng pass
describe('User', () => {
  // Mỗi test tự tạo data của mình
  it('tạo user với email hợp lệ', () => {
    const user = User.create({ email: 'test@test.com', ... });
    expect(user.id).toBeDefined();
  });

  it('email được normalize về lowercase', () => {
    const user = User.create({ email: 'TEST@TEST.COM', ... });
    expect(user.email.value).toBe('test@test.com');
  });
});
```

---

## Phần 6: Những Gì KHÔNG Nên Test

### 6.1 Không test third-party library

```typescript
// ❌ Test dayjs — dayjs đã có test của họ
it('dayjs format ngày', () => {
  expect(dayjs('2024-01-15').format('DD/MM/YYYY')).toBe('15/01/2024');
});

// ❌ Test AntD component
it('AntD Table render rows', () => { ... });

// ✅ Test code của mình dùng dayjs/AntD
it('ngayDenText trong ViewModel đúng format Vietnamese', () => {
  const vm = toIncomingDocumentVM(makeEntity({ ngayDen: new Date('2024-01-15') }), 'admin');
  expect(vm.ngayDenText).toBe('15/01/2024');
});
```

### 6.2 Không test type/interface

```typescript
// ❌ Test TypeScript types — compiler đã làm việc này
it('IncomingDocumentVM có field isOverdue kiểu boolean', () => {
  const vm: IncomingDocumentVM = { ... };
  expect(typeof vm.isOverdue).toBe('boolean');
  // TypeScript compile-time check rồi, test runtime là thừa
});
```

### 6.3 Không test getter đơn giản

```typescript
// ❌ Test getter trivial
it('user.id trả về id', () => {
  const user = new User({ id: '1', ... });
  expect(user.id).toBe('1'); // Thừa — không có logic
});

// ✅ Chỉ test khi có logic
it('user.isAdmin() trả về true khi role = admin', () => {
  const user = new User({ role: UserRole.ADMIN, ... });
  expect(user.isAdmin()).toBe(true); // Có logic đáng test
});
```

---

## Phần 7: CI/CD Integration

### 7.1 Vitest Config

```typescript
// vitest.config.ts
import { defineConfig } from 'vitest/config';
import tsconfigPaths from 'vite-tsconfig-paths';

export default defineConfig({
  plugins: [tsconfigPaths()],
  test: {
    environment: 'jsdom',
    globals:     true,
    setupFiles:  ['./src/test/setup.ts'],

    // Coverage thresholds — CI fail nếu dưới ngưỡng
    coverage: {
      provider:    'v8',
      reporter:    ['text', 'lcov', 'html'],
      thresholds: {
        // Domain + Application phải cao nhất
        'src/features/*/domain/**':       { lines: 90, functions: 90 },
        'src/features/*/application/**':  { lines: 85, functions: 85 },
        // Infrastructure và Presentation thấp hơn — có integration test bù
        'src/features/*/infrastructure/**': { lines: 70 },
        'src/features/*/presentation/**':   { lines: 60 },
      },
    },

    // Phân nhóm để chạy parallel
    pool: 'forks',

    // Test report
    reporters: ['verbose', 'html'],
  },
});
```

### 7.2 Scripts trong package.json

```json
{
  "scripts": {
    "test":            "vitest",
    "test:run":        "vitest run",
    "test:coverage":   "vitest run --coverage",
    "test:unit":       "vitest run --testPathPattern='unit'",
    "test:integration":"vitest run --testPathPattern='integration'",
    "test:watch":      "vitest --watch",
    "test:ui":         "vitest --ui"
  }
}
```

### 7.3 GitHub Actions CI Pipeline

```yaml
# .github/workflows/ci.yml
name: CI

on: [push, pull_request]

jobs:
  test:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4
      - uses: actions/setup-node@v4
        with: { node-version: '20' }

      - run: npm ci

      # Unit tests — nhanh, chạy trước
      - name: Unit Tests
        run: npm run test:unit

      # Integration tests — chậm hơn, chạy sau
      - name: Integration Tests
        run: npm run test:integration

      # Coverage report
      - name: Coverage Check
        run: npm run test:coverage

      # Upload coverage để review
      - uses: codecov/codecov-action@v4
        with: { token: ${{ secrets.CODECOV_TOKEN }} }
```

---

## Phần 8: Quick Reference

### Test nào cho layer nào?

```
Domain (Entity, VO)
  → Unit Test: vitest thuần, không cần mock
  → Target: 90%+ coverage

Application (Command/Query Handler)
  → Unit Test: mock repository với vi.fn()
  → Target: 85%+ coverage

Application (Pipeline Behavior)
  → Integration Test: real bus + real behavior + mock repo
  → Target: 80%+ coverage

Infrastructure (Repository)
  → Integration Test: MSW mock HTTP, test toDomain + toPayload
  → Target: 75%+ coverage

Presentation (ViewModel Mapper)
  → Unit Test: pure function, mock Date nếu cần
  → Target: 85%+ coverage

Presentation (Custom Hook)
  → Integration Test: MSW + renderHook
  → Target: 70%+ coverage

Presentation (Component)
  → Unit Test: RTL render + user interactions
  → Target: test critical behavior, không test mọi thứ
```

### Checklist trước khi merge PR

```
□ Viết test cho mọi business rule mới trong Domain
□ Viết test cho happy path và error path của Command/Query Handler
□ Viết test cho ViewModel Mapper khi có logic phức tạp
□ Test pass toàn bộ trên CI
□ Coverage không giảm so với main branch
□ Không có test nào bị skip (it.skip) mà không có lý do
□ Test name mô tả behavior, không mô tả implementation
```

---

*Tài liệu nội bộ — cập nhật khi team adopt thêm pattern hoặc tool mới.*
