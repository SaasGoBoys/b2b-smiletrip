import type { ServicePane } from '../../domain/entities/VfjlinkDashboard.entity'

export const VFJLINK_SERVICE_PANES: ServicePane[] = [
  {
    id: 'flight',
    tab: '✈ Vé máy bay',
    count: '1,420',
    kpis: [
      { label: 'Vé đã xuất', value: '1,420', valueColor: '#1D4ED8', sub: '▲ 14% so tháng trước', subTone: 'up' },
      { label: 'Đặt chỗ đang giữ', value: '218', valueColor: '#D97706', sub: '48 chờ thanh toán', subTone: 'mute' },
      { label: 'Doanh thu', value: '2.18 tỷ', valueColor: '#059669', sub: '▲ 9.2%', subTone: 'up' },
      { label: 'Void / hoàn vé', value: '12', valueColor: '#DC2626', sub: '▲ 2 so tháng trước', subTone: 'down' },
    ],
    left: {
      title: 'Top tuyến bay',
      headers: ['#', 'Tuyến', 'Vé bán', 'Doanh thu', '+/-'],
      rows: [
        ['1', 'HAN – SGN', '320', '480tr', '▲ 12%'],
        ['2', 'HAN – DAD', '180', '210tr', '▲ 8%'],
        ['3', 'SGN – PQC', '160', '190tr', '▼ 3%'],
        ['4', 'HAN – CXR', '140', '165tr', '▲ 5%'],
        ['5', 'SGN – HAN', '130', '155tr', '▲ 7%'],
      ],
    },
    right: {
      title: 'Theo hãng bay',
      headers: ['Hãng', 'Vé', 'Tỷ lệ', 'Doanh thu'],
      rows: [
        ['Vietnam Airlines', '520', '36.6%', '820tr'],
        ['Vietjet Air', '440', '31%', '580tr'],
        ['Bamboo Airways', '280', '19.7%', '420tr'],
        ['Pacific Airlines', '180', '12.7%', '220tr'],
      ],
    },
  },
  {
    id: 'tour',
    tab: '🏔 Tour',
    count: '284',
    kpis: [
      { label: 'Tour đã bán', value: '284', valueColor: '#059669', sub: '▲ 18%', subTone: 'up' },
      { label: 'Đang đặt', value: '42', valueColor: '#D97706', sub: '12 chờ nhà cung cấp', subTone: 'mute' },
      { label: 'Doanh thu', value: '756tr', valueColor: '#059669', sub: '▲ 20%', subTone: 'up' },
      { label: 'Hủy tour', value: '8', valueColor: '#DC2626', sub: '▲ 3 so tháng trước', subTone: 'down' },
    ],
    left: {
      title: 'Top tour bán chạy',
      headers: ['#', 'Tên tour', 'Loại', 'Bán', 'DT'],
      rows: [
        ['1', 'Đà Nẵng – Hội An 4N3Đ', 'SIC', '48', '96tr'],
        ['2', 'Phú Quốc Nghỉ Dưỡng 3N2Đ', 'SIC', '36', '108tr'],
        ['3', 'Hạ Long – Ninh Bình 2N1Đ', 'Daily', '32', '51tr'],
        ['4', 'Sapa Trekking 3N2Đ', 'Private', '18', '90tr'],
        ['5', 'Bangkok Free & Easy 4N', 'SIC', '14', '70tr'],
      ],
    },
    right: {
      title: 'Phân loại tour',
      headers: ['Loại', 'Đặt', 'Doanh thu', 'Tăng trưởng'],
      rows: [
        ['Tour Ghép (SIC)', '168', '420tr', '▲ 22%'],
        ['Tour Riêng (Private)', '62', '248tr', '▲ 15%'],
        ['Tour Daily', '54', '88tr', '▲ 10%'],
      ],
    },
  },
  {
    id: 'hotel',
    tab: '🏨 Khách sạn',
    count: '376',
    kpis: [
      { label: 'Phòng đã đặt', value: '376', valueColor: '#D97706', sub: '▲ 11%', subTone: 'up' },
      { label: 'Check-in hôm nay', value: '24', valueColor: '#1D4ED8', sub: '8 check-out', subTone: 'mute' },
      { label: 'Doanh thu', value: '630tr', valueColor: '#059669', sub: '▲ 13%', subTone: 'up' },
      { label: 'Hủy phòng', value: '15', valueColor: '#DC2626', sub: 'Tỷ lệ 3.8%', subTone: 'mute' },
    ],
    left: {
      title: 'Top điểm đến',
      headers: ['#', 'Điểm đến', 'Phòng', 'DT', '+/-'],
      rows: [
        ['1', 'Đà Nẵng', '98', '175tr', '▲ 18%'],
        ['2', 'Phú Quốc', '82', '164tr', '▲ 12%'],
        ['3', 'Hà Nội', '60', '96tr', '▲ 6%'],
        ['4', 'TP. Hồ Chí Minh', '54', '89tr', '▼ 2%'],
        ['5', 'Nha Trang', '48', '78tr', '▲ 9%'],
      ],
    },
    right: {
      title: 'Theo hạng sao',
      headers: ['Hạng', 'Đặt', 'DT', 'Tỷ lệ'],
      rows: [
        ['5 sao', '62', '248tr', '16.5%'],
        ['4 sao', '128', '230tr', '34%'],
        ['3 sao', '142', '128tr', '37.8%'],
        ['Boutique / Villa', '44', '79tr', '11.7%'],
      ],
    },
  },
  {
    id: 'train',
    tab: '🚂 Vé tàu',
    count: '198',
    kpis: [
      { label: 'Vé tàu đã bán', value: '198', valueColor: '#0891B2', sub: '▲ 6%', subTone: 'up' },
      { label: 'Đang giữ chỗ', value: '28', valueColor: '#D97706', sub: '6 hết hạn trong 1h', subTone: 'mute' },
      { label: 'Doanh thu', value: '148tr', valueColor: '#059669', sub: '▲ 8%', subTone: 'up' },
      { label: 'Hủy vé', value: '5', valueColor: '#DC2626', sub: 'Tỷ lệ 2.5%', subTone: 'mute' },
    ],
    left: {
      title: 'Tuyến tàu phổ biến',
      headers: ['#', 'Tuyến', 'Vé', 'DT'],
      rows: [
        ['1', 'Hà Nội – Đà Nẵng', '68', '47.6tr'],
        ['2', 'Hà Nội – Sài Gòn', '52', '45.5tr'],
        ['3', 'Sài Gòn – Nha Trang', '42', '29.4tr'],
        ['4', 'Đà Nẵng – Sài Gòn', '36', '25.2tr'],
      ],
    },
    right: {
      title: 'Theo hạng ghế',
      headers: ['Hạng', 'Vé', 'DT'],
      rows: [
        ['Nằm mềm', '76', '68.4tr'],
        ['Nằm cứng', '62', '43.4tr'],
        ['Ngồi điều hòa', '42', '25.2tr'],
        ['Ngồi thường', '18', '7.2tr'],
      ],
    },
  },
  {
    id: 'transfer',
    tab: '🚗 Đưa đón',
    count: '142',
    kpis: [
      { label: 'Chuyến đã xác nhận', value: '142', valueColor: '#1D4ED8', sub: '▲ 5%', subTone: 'up' },
      { label: 'Chuyến hôm nay', value: '18', valueColor: '#D97706', sub: '6 chuyến chiều', subTone: 'mute' },
      { label: 'Doanh thu', value: '42.6tr', valueColor: '#059669', sub: '▲ 7%', subTone: 'up' },
      { label: 'Đối tác nhà xe', value: '8', valueColor: '#7C3AED', sub: '2 đang hoạt động', subTone: 'mute' },
    ],
    left: {
      title: 'Tuyến phổ biến',
      headers: ['#', 'Tuyến', 'Chuyến', 'DT'],
      rows: [
        ['1', 'Nội Bài → Hoàn Kiếm', '48', '14.4tr'],
        ['2', 'Tân Sơn Nhất → Quận 1', '36', '10.8tr'],
        ['3', 'Đà Nẵng Airport → TP', '28', '8.4tr'],
        ['4', 'Nội Bài → Hạ Long', '20', '10tr'],
      ],
    },
    right: {
      title: 'Theo loại xe',
      headers: ['Loại xe', 'Chuyến', 'DT'],
      rows: [
        ['Xe 4 chỗ', '62', '15.5tr'],
        ['Xe 7 chỗ', '48', '14.4tr'],
        ['Xe 16 chỗ', '22', '8.8tr'],
        ['Xe 29 chỗ', '10', '8.0tr'],
      ],
    },
  },
  {
    id: 'sim',
    tab: '📱 Sim/eSim',
    count: '230',
    kpis: [
      { label: 'Sim/eSim đã bán', value: '230', valueColor: '#0891B2', sub: '▲ 35%', subTone: 'up' },
      { label: 'Tỷ lệ eSim', value: '68%', valueColor: '#1D4ED8', sub: 'Tăng nhanh', subTone: 'up' },
      { label: 'Doanh thu', value: '34.5tr', valueColor: '#059669', sub: '▲ 28%', subTone: 'up' },
      { label: 'Đích đến hot', value: 'Thái Lan', valueColor: '#7C3AED', sub: '48 sim bán ra', subTone: 'mute' },
    ],
    left: {
      title: 'Top quốc gia',
      headers: ['#', 'Quốc gia', 'Sim', 'eSim', 'DT'],
      rows: [
        ['1', 'Thái Lan', '18', '30', '7.2tr'],
        ['2', 'Nhật Bản', '12', '28', '8tr'],
        ['3', 'Hàn Quốc', '10', '24', '6.8tr'],
        ['4', 'Singapore', '8', '20', '5.6tr'],
      ],
    },
    right: {
      title: 'Theo gói data',
      headers: ['Gói', 'Bán', 'DT'],
      rows: [
        ['3GB / 7 ngày', '68', '8.2tr'],
        ['6GB / 15 ngày', '82', '14.8tr'],
        ['10GB / 30 ngày', '56', '11.2tr'],
        ['Unlimited', '24', '7.2tr'],
      ],
    },
  },
  {
    id: 'insurance',
    tab: '🛡 Bảo hiểm',
    count: '165',
    kpis: [
      { label: 'Hợp đồng bảo hiểm', value: '165', valueColor: '#7C3AED', sub: '▲ 22%', subTone: 'up' },
      { label: 'Đang hiệu lực', value: '148', valueColor: '#059669', sub: '17 sắp hết hạn', subTone: 'mute' },
      { label: 'Doanh thu', value: '49.5tr', valueColor: '#059669', sub: '▲ 18%', subTone: 'up' },
      { label: 'Yêu cầu bồi thường', value: '3', valueColor: '#DC2626', sub: 'Tổng 12tr', subTone: 'mute' },
    ],
    left: {
      title: 'Theo loại bảo hiểm',
      headers: ['#', 'Loại', 'HĐ', 'DT', '+/-'],
      rows: [
        ['1', 'Du lịch nước ngoài', '82', '24.6tr', '▲ 25%'],
        ['2', 'Du lịch trong nước', '58', '17.4tr', '▲ 15%'],
        ['3', 'Bảo hiểm hành lý', '25', '7.5tr', '▲ 30%'],
      ],
    },
    right: {
      title: 'Đối tác bảo hiểm',
      headers: ['Công ty', 'HĐ', 'DT'],
      rows: [
        ['Bảo Việt Insurance', '68', '20.4tr'],
        ['PVI Insurance', '52', '15.6tr'],
        ['Bảo Minh', '45', '13.5tr'],
      ],
    },
  },
  {
    id: 'combo',
    tab: '🎁 Combo',
    count: '88',
    kpis: [
      { label: 'Combo đã bán', value: '88', valueColor: '#D97706', sub: '▲ 42%', subTone: 'up' },
      { label: 'Đang đặt', value: '14', valueColor: '#1D4ED8', sub: '5 chờ xác nhận', subTone: 'mute' },
      { label: 'Doanh thu', value: '294tr', valueColor: '#059669', sub: '▲ 38%', subTone: 'up' },
      { label: 'Tiết kiệm TB/KH', value: '12%', valueColor: '#059669', sub: 'so mua lẻ', subTone: 'mute' },
    ],
    left: {
      title: 'Top combo',
      headers: ['#', 'Combo', 'Bán', 'DT'],
      rows: [
        ['1', 'Bay + KS Đà Nẵng 3N2Đ', '22', '66tr'],
        ['2', 'Bay + KS Phú Quốc 4N3Đ', '18', '72tr'],
        ['3', 'Bay + KS Bangkok 4N3Đ', '14', '70tr'],
        ['4', 'Bay + KS Hội An 3N2Đ', '12', '42tr'],
      ],
    },
    right: {
      title: 'Thành phần combo',
      headers: ['Gói', 'Bán', 'DT', 'Tỷ lệ'],
      rows: [
        ['Bay + Khách sạn', '58', '203tr', '65.9%'],
        ['Bay + Tour', '18', '54tr', '20.5%'],
        ['Bay + KS + Tour', '12', '72tr', '13.6%'],
      ],
    },
  },
  {
    id: 'deal',
    tab: '🔍 Săn vé rẻ',
    count: '320',
    kpis: [
      { label: 'Yêu cầu săn vé', value: '320', valueColor: '#1D4ED8', sub: '▲ 55%', subTone: 'up' },
      { label: 'Đã khớp giá', value: '248', valueColor: '#059669', sub: 'Tỷ lệ 77.5%', subTone: 'mute' },
      { label: 'Tiết kiệm trung bình', value: '18%', valueColor: '#059669', sub: 'so giá thị trường', subTone: 'mute' },
      { label: 'Chờ xử lý', value: '72', valueColor: '#D97706', sub: '12 ưu tiên cao', subTone: 'mute' },
    ],
    left: {
      title: 'Tuyến săn vé nhiều nhất',
      headers: ['#', 'Tuyến', 'YC', 'Khớp', 'Tỷ lệ'],
      rows: [
        ['1', 'HAN – SGN', '68', '54', '79%'],
        ['2', 'SGN – BKK', '48', '40', '83%'],
        ['3', 'HAN – NRT', '42', '30', '71%'],
        ['4', 'SGN – ICN', '38', '28', '74%'],
      ],
    },
    right: {
      title: 'Vé rẻ đang có',
      headers: ['Tuyến', 'Hãng', 'Giá', 'Tiết kiệm'],
      rows: [
        ['HAN – SGN', 'VJ', '590k', '▼ 32%'],
        ['SGN – DAD', 'QH', '499k', '▼ 28%'],
        ['HAN – CXR', 'VN', '720k', '▼ 19%'],
        ['SGN – BKK', 'VJ', '1.2tr', '▼ 22%'],
      ],
    },
  },
]
