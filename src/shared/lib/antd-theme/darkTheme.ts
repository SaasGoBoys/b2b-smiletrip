import type { ThemeConfig } from 'antd'
import { theme } from 'antd'
import { brandColors, typography, spacing } from './tokens'

export const darkTheme: ThemeConfig = {
  algorithm: theme.darkAlgorithm,
  token: {
    colorPrimary: brandColors.primary,
    fontFamily: typography.fontFamily,
    fontSize: typography.fontSizeBase,
    borderRadius: spacing.borderRadius,
    colorBgContainer: '#1d1d1d',
    colorBgLayout: '#141414',
  },
}
