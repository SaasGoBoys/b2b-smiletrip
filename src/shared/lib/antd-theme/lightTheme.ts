import type { ThemeConfig } from 'antd'
import { brandColors, typography, spacing } from './tokens'

export const lightTheme: ThemeConfig = {
  token: {
    colorPrimary: brandColors.primary,
    colorSuccess: brandColors.success,
    colorWarning: brandColors.warning,
    colorError: brandColors.error,
    colorInfo: brandColors.info,
    fontFamily: typography.fontFamily,
    fontSize: typography.fontSizeBase,
    borderRadius: spacing.borderRadius,
    borderRadiusLG: spacing.borderRadiusLG,
    colorBgContainer: '#ffffff',
    colorBgLayout: '#f5f5f5',
  },
  components: {
    Button: {
      borderRadius: spacing.borderRadius,
      controlHeight: 36,
    },
    Table: {
      borderRadius: spacing.borderRadius,
    },
    Card: {
      borderRadius: spacing.borderRadiusLG,
    },
    Input: {
      controlHeight: 36,
    },
  },
}
