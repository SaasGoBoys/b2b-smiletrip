export const brandColors = {
  /* --- Màu thương hiệu (Brand Colors) --- */
  primary: '#4558B6',
  primaryHover: '#5469c7',
  primaryActive: '#3447a0',
  secondary: '#722ed1',

  /* --- Màu trạng thái (Status Colors) --- */
  success: '#52c41a',
  warning: '#FFBC44', // Đã cập nhật theo chuẩn dự án
  error: '#DA251D',   // Đã cập nhật theo chuẩn dự án
  info: '#1677ff',

  /* --- Màu Chữ (Text Colors) --- */
  textMain: '#3A3A3A',
  textSecondary: '#909090',
  textMuted: '#DBDBDB',

  /* --- Màu Nền (Background Colors) --- */
  bgContainer: '#ffffff', // Nền các component dạng Box/Card
  bgLayout: '#f5f5f5',    // Nền tổng của cả website
  surfaceHover: '#F4F4F4',// Nền khi hover hoặc nền các block phụ
  primarySoftBg: '#CDE7FF',

  /* --- Màu Viền (Border Colors) --- */
  borderMain: '#DBDBDB',
  borderLight: '#F4F4F4',
  primarySoftBorder: '#78ABCD',

} as const

export const typography = {
  fontFamily: "'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif",
  fontSizeBase: 14,
  fontSizeLG: 16,
  fontSizeSM: 12,
  fontSizeHeading1: 38,
  fontSizeHeading2: 30,
  fontSizeHeading3: 24,
  lineHeight: 1.5714,
} as const

export const spacing = {
  borderRadius: 8,
  borderRadiusLG: 12,
  borderRadiusSM: 4,
} as const
