import type {
  AgentRow,
  AlertItem,
  DashboardKpi,
  DonutChartData,
  ImportantItem,
  NewsItem,
  RevenueChartPack,
} from '../../domain/entities/VfjlinkDashboard.entity'

export const VFJLINK_KPIS: DashboardKpi[] = [
  {
    id: 'orders',
    variant: 'blue',
    icon: '📋',
    label: 'Đơn hàng tháng 5',
    value: 2841,
    foot: { upBadge: '▲ 12%', text: 'so tháng 4' },
  },
  {
    id: 'revenue',
    variant: 'green',
    icon: '💰',
    label: 'Doanh thu tháng 5',
    value: 4.2,
    valueSuffix: ' tỷ',
    foot: { upBadge: '▲ 8.4%', text: 'so tháng 4' },
  },
  {
    id: 'tickets',
    variant: 'amber',
    icon: '🎫',
    label: 'Vé đã xuất thành công T5',
    value: 1420,
    foot: { upBadge: '▲ 14%', text: 'so tháng 4' },
  },
  {
    id: 'f2',
    variant: 'purple',
    icon: '🏢',
    label: 'Đại lý F2 hoạt động',
    value: 19,
    foot: { text: '/ 24 F2 tổng', upBadge: '+2 mới' },
  },
  {
    id: 'customers',
    variant: 'red',
    icon: '👥',
    label: 'Khách hàng mới tháng 5',
    value: 318,
    foot: { upBadge: '▲ 18%', text: 'so tháng 4' },
  },
]

function buildLabels30(): string[] {
  const out: string[] = []
  for (let i = 0; i < 30; i++) {
    const d = new Date(2026, 3, 2)
    d.setDate(d.getDate() + i)
    out.push(`${d.getDate()}/${d.getMonth() + 1}`)
  }
  return out
}

const LABELS_30 = buildLabels30()
const VALUES_30 = [
  110, 120, 130, 145, 160, 155, 170, 165, 180, 190, 200, 185, 175, 195, 210, 200, 185, 200, 220, 210, 185, 220,
  198, 260, 310, 280, 240, 260, 280, 142,
]

export const VFJLINK_REVENUE: RevenueChartPack = {
  labels7: ['25/4', '26/4', '27/4', '28/4', '29/4', '30/4', '01/5'],
  values7: [185, 220, 198, 260, 310, 280, 142],
  labels14: [
    '18/4',
    '19/4',
    '20/4',
    '21/4',
    '22/4',
    '23/4',
    '24/4',
    '25/4',
    '26/4',
    '27/4',
    '28/4',
    '29/4',
    '30/4',
    '01/5',
  ],
  values14: [140, 160, 155, 190, 210, 185, 200, 185, 220, 198, 260, 310, 280, 142],
  labels30: LABELS_30,
  values30: VALUES_30,
}

export const VFJLINK_DONUT: DonutChartData = {
  centerValue: '4.2 tỷ',
  centerSub: 'Tổng DT',
  segments: [
    { label: 'Vé máy bay', pct: 52, color: '#3B82F6' },
    { label: 'Tour', pct: 18, color: '#10B981' },
    { label: 'Khách sạn', pct: 15, color: '#F59E0B' },
    { label: 'Combo', pct: 7, color: '#8B5CF6' },
    { label: 'Tàu + Khác', pct: 8, color: '#06B6D4' },
  ],
}

export const VFJLINK_ALERTS: AlertItem[] = [
  {
    tone: 'red',
    source: 'Vietnam Airlines',
    sourceColor: '#EF4444',
    title:
      'Thay đổi lịch bay chuyến VN201 ngày 22/05/2026 — lùi giờ khởi hành 2 tiếng, cần thông báo khách hàng',
    time: '3 phút trước',
  },
  {
    tone: 'amber',
    source: 'Hệ thống đặt chỗ',
    sourceColor: '#D97706',
    title: '5 booking đang giữ chỗ sắp hết thời gian thanh toán (còn dưới 30 phút), cần xử lý ngay',
    time: '8 phút trước',
  },
  {
    tone: 'amber',
    source: 'Tài chính đại lý',
    sourceColor: '#D97706',
    title: 'F2 Sunrise Air VT — số dư quỹ còn 12 triệu, dưới mức tối thiểu, không thể xuất vé mới',
    time: '25 phút trước',
  },
  {
    tone: 'green',
    source: 'Xác nhận giao dịch',
    sourceColor: '#059669',
    title: 'Đại lý VJ Travel HN nạp quỹ thành công 200 triệu đồng — số dư hiện tại đạt 500 triệu',
    time: '2 giờ trước',
  },
  {
    tone: 'blue',
    source: 'Vietjet Air',
    sourceColor: '#1D4ED8',
    title: 'Cập nhật chính sách hoàn/đổi vé nội địa mới — áp dụng từ ngày 01/06/2026, cần cập nhật điều kiện vé',
    time: '3 giờ trước',
  },
  {
    tone: 'blue',
    source: 'Bamboo Airways',
    sourceColor: '#1D4ED8',
    title: 'Mở đường bay mới HAN–BKK (Bangkok) khai thác từ 15/06/2026 — cần cập nhật bảng giá và itinerary',
    time: '3 giờ trước',
  },
  {
    tone: 'red',
    source: 'Sunworld Tour',
    sourceColor: '#EF4444',
    title: 'Điều chỉnh giá tour Hạ Long tăng 8% — hiệu lực từ ngày 01/06/2026, cần cập nhật bảng giá tour',
    time: '4 giờ trước',
  },
]

export const VFJLINK_IMPORTANT: ImportantItem[] = [
  {
    borderColor: '#EF4444',
    source: '⚠ Chính sách bắt buộc — Cục Hàng không VN',
    title:
      'Từ ngày 01/07/2026, tất cả đại lý bán vé quốc tế phải xác thực hộ chiếu tại thời điểm đặt chỗ theo quy định mới của Cục HKVN. Cần cập nhật quy trình nội bộ.',
    time: 'Hôm nay · Áp dụng từ 01/07/2026',
  },
  {
    borderColor: '#D97706',
    source: '⚠ Thay đổi phí — Vietnam Airlines',
    title:
      'Vietnam Airlines điều chỉnh phí dịch vụ đại lý (BSP) tăng 0.5% áp dụng từ 15/06/2026 trên tất cả các hành trình quốc tế. Cần cập nhật bảng phí service fee.',
    time: 'Hôm qua · Áp dụng từ 15/06/2026',
  },
  {
    borderColor: '#3B82F6',
    source: '📋 Nhắc nhở nội bộ — Ban quản lý',
    title:
      'Deadline nộp báo cáo doanh thu tháng 5 cho F1 là ngày 05/06/2026. Tất cả đại lý F2 cần hoàn tất chứng từ và gửi xác nhận thanh toán trước hạn.',
    time: '2 ngày trước · Deadline: 05/06/2026',
  },
]

export const VFJLINK_NEWS: NewsItem[] = [
  {
    badge: 'HÀNG KHÔNG',
    badgeBg: '#DBEAFE',
    badgeFg: '#1D4ED8',
    date: '01/05/2026',
    title: 'Vietnam Airlines tăng chuyến bay Hà Nội – TP.HCM lên 12 chuyến/ngày hè 2026',
    desc: 'Hãng bổ sung thêm 4 chuyến bay đêm nhằm đáp ứng nhu cầu di chuyển cao điểm mùa hè, dự kiến tăng tổng sức chứa 18%.',
  },
  {
    badge: 'DU LỊCH',
    badgeBg: '#D1FAE5',
    badgeFg: '#059669',
    date: '30/04/2026',
    title: 'Khách quốc tế đến Việt Nam tháng 4/2026 đạt 1.8 triệu lượt, tăng 22% so cùng kỳ',
    desc: 'Thị trường Hàn Quốc, Nhật Bản và Trung Quốc dẫn đầu lượng khách, tạo cơ hội lớn cho phân khúc tour inbound và dịch vụ đón sân bay.',
  },
  {
    badge: 'THỊ TRƯỜNG',
    badgeBg: '#FEF3C7',
    badgeFg: '#D97706',
    date: '29/04/2026',
    title: 'Giá vé máy bay nội địa dự kiến tăng 10–15% dịp hè do chi phí nhiên liệu leo thang',
    desc: 'Các hãng hàng không đã thông báo điều chỉnh bảng giá từ tháng 6. Đại lý nên tư vấn khách đặt sớm để được giá tốt hơn.',
  },
  {
    badge: 'CÔNG NGHỆ',
    badgeBg: '#F5F3FF',
    badgeFg: '#7C3AED',
    date: '28/04/2026',
    title: 'Bộ Công an ra mắt hệ thống khai báo nhập cảnh điện tử toàn diện từ tháng 6/2026',
    desc: 'Hành khách quốc tế nhập cảnh Việt Nam sẽ hoàn thành khai báo online trước chuyến bay, rút ngắn thời gian làm thủ tục đến 70%.',
  },
  {
    badge: 'HÀNG KHÔNG',
    badgeBg: '#DBEAFE',
    badgeFg: '#1D4ED8',
    date: '27/04/2026',
    title: 'Vietravel Airlines xin cấp phép 8 đường bay quốc tế mới đến Nhật, Hàn, Đài Loan',
    desc: 'Nếu được phê duyệt, các đường bay mới sẽ khai thác từ quý III/2026, mở rộng đáng kể lựa chọn bay thẳng cho thị trường Đông Bắc Á.',
  },
]

export const VFJLINK_AGENTS: AgentRow[] = [
  {
    name: 'VJ Travel HN',
    code: 'F2-001',
    city: 'Hà Nội',
    status: 'ok',
    revenue: 820,
    tickets: 680,
    bookings: 820,
    bal: 500,
    trend: 12,
    color: '#3B82F6',
    svc: [
      { name: 'Vé bay', pct: 60, color: '#3B82F6' },
      { name: 'Tour', pct: 20, color: '#10B981' },
      { name: 'KS', pct: 12, color: '#F59E0B' },
      { name: 'Combo', pct: 8, color: '#F97316' },
    ],
  },
  {
    name: 'Sun Wings SG',
    code: 'F2-002',
    city: 'TP.HCM',
    status: 'ok',
    revenue: 610,
    tickets: 520,
    bookings: 610,
    bal: 200,
    trend: 8,
    color: '#10B981',
    svc: [
      { name: 'Vé bay', pct: 55, color: '#3B82F6' },
      { name: 'KS', pct: 25, color: '#F59E0B' },
      { name: 'Combo', pct: 12, color: '#F97316' },
      { name: 'Sim', pct: 8, color: '#EC4899' },
    ],
  },
  {
    name: 'Sky Gate DN',
    code: 'F2-003',
    city: 'Đà Nẵng',
    status: 'ok',
    revenue: 490,
    tickets: 420,
    bookings: 490,
    bal: 350,
    trend: 5,
    color: '#F59E0B',
    svc: [
      { name: 'Vé bay', pct: 45, color: '#3B82F6' },
      { name: 'Tour', pct: 30, color: '#10B981' },
      { name: 'KS', pct: 20, color: '#F59E0B' },
      { name: 'BH', pct: 5, color: '#6366F1' },
    ],
  },
  {
    name: 'Golden Air HP',
    code: 'F2-004',
    city: 'Hải Phòng',
    status: 'warn',
    revenue: 320,
    tickets: 280,
    bookings: 320,
    bal: 50,
    trend: -2,
    color: '#F59E0B',
    svc: [
      { name: 'Vé bay', pct: 80, color: '#3B82F6' },
      { name: 'Tour', pct: 12, color: '#10B981' },
      { name: 'Tàu', pct: 8, color: '#06B6D4' },
    ],
  },
  {
    name: 'Mekong Travel CT',
    code: 'F2-005',
    city: 'Cần Thơ',
    status: 'ok',
    revenue: 280,
    tickets: 240,
    bookings: 280,
    bal: 400,
    trend: 3,
    color: '#8B5CF6',
    svc: [
      { name: 'Tour', pct: 50, color: '#10B981' },
      { name: 'KS', pct: 30, color: '#F59E0B' },
      { name: 'Vé bay', pct: 15, color: '#3B82F6' },
      { name: 'Xe', pct: 5, color: '#8B5CF6' },
    ],
  },
  {
    name: 'Indochina HUE',
    code: 'F2-007',
    city: 'Huế',
    status: 'ok',
    revenue: 240,
    tickets: 210,
    bookings: 240,
    bal: 280,
    trend: 18,
    color: '#06B6D4',
    svc: [
      { name: 'Tour', pct: 55, color: '#10B981' },
      { name: 'Vé bay', pct: 30, color: '#3B82F6' },
      { name: 'KS', pct: 15, color: '#F59E0B' },
    ],
  },
  {
    name: 'Bay Express QN',
    code: 'F2-008',
    city: 'Quảng Ninh',
    status: 'ok',
    revenue: 180,
    tickets: 155,
    bookings: 180,
    bal: 180,
    trend: 6,
    color: '#10B981',
    svc: [
      { name: 'Vé bay', pct: 50, color: '#3B82F6' },
      { name: 'Combo', pct: 30, color: '#F97316' },
      { name: 'Xe', pct: 20, color: '#8B5CF6' },
    ],
  },
  {
    name: 'Sunrise Air VT',
    code: 'F2-006',
    city: 'Vũng Tàu',
    status: 'bad',
    revenue: 90,
    tickets: 80,
    bookings: 90,
    bal: 12,
    trend: -15,
    color: '#EF4444',
    svc: [
      { name: 'Vé bay', pct: 90, color: '#3B82F6' },
      { name: 'BH', pct: 10, color: '#6366F1' },
    ],
  },
]
