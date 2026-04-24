# Script khởi tạo feature (`create:feature`)

## Chạy

```bash
npm run create:feature
# hoặc không tương tác:
npm run create:feature -- --domain invoices --mode 2
npm run create:feature -- --domain approval --subs "van-ban-den,van-ban-di" --mode 1
```

## Tham số

| Tham số | Ý nghĩa |
|---------|---------|
| `--domain <kebab>` | Tên thư mục feature hoặc **bounded context** (ví dụ `invoices`, `approval`). |
| `--subs a,b,c` | Danh sách **sub-feature** (kebab). Nếu **có** → tạo `features/<domain>/_shared/` + một folder con mỗi sub; nếu **không** → một feature phẳng `features/<domain>/`. |
| `--mode 1 \| 2` | `1` = chỉ query danh sách + trang list + route. `2` = thêm detail, create, update (queries/commands + trang + route lồng nhau). |

## Sinh ra gì?

- **Flat** (`--subs` rỗng): `src/features/<domain>/` với domain, application (queries/commands), infrastructure (repository stub), presentation (hooks, pages, routes), `bus.module.ts`, `SCAFFOLD.md`.
- **Nhiều sub** (`--subs` có giá trị):  
  - `features/<domain>/_shared/index.ts` (placeholder)  
  - Mỗi sub: `features/<domain>/<sub>/` như trên  
  - `features/<domain>/presentation/routes/index.ts` export `\<domain\>DomainChildRoutes` để gom route một lần.

Entity dùng chung khi multi-sub: `features/<domain>/_shared/domain/entities/<Domain><Sub>.entity.ts` (ví dụ `ApprovalVanBanDen`).

## Việc bạn phải làm sau (bắt buộc)

Script **không** tự sửa `types.ts`, `AppModule.ts` hay `routes.tsx` (tránh ghi đè chỉnh tay của team). Làm theo `SCAFFOLD.md`:

1. Thêm repository vào `AppCompositionDeps` + khởi tạo trong `AppModule.ts`.
2. Import child routes vào `src/app/router/routes.tsx`.

Các feature có sẵn như **auth** (`auth/bus.module.ts`) được viết tay trong repo — không phải do script scaffold; chỉ cần đảm bảo `deps.authRepository` đã có trong `AppModule` (đã có sẵn).
4. Chỉnh API path trong `*Repository.ts` cho khớp backend.

Đến khi bước 2 xong, project có thể **không build** vì `bus.module.ts` đã được `import.meta.glob` load nhưng `deps` chưa có key repository — đây là điều mong đợi; hoàn tất DI trong cùng thay đổi.

## Gợi ý scale

- Một sub-feature có quá nhiều handler: tách `application/commands/*.ts` và import trong `bus.module.ts`.
- Sub-feature mới: thêm folder + `bus.module.ts` — glob tự nhận; cập nhật `presentation/routes/index.ts` của domain (hoặc import trực tiếp route file mới trong `routes.tsx`).
