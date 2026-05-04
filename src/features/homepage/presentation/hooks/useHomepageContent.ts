import { useMemo } from 'react'

import { getHomepageContent } from '@/features/homepage/application/services/getHomepageContent'

import { homepageRepository } from '@/features/homepage/infrastructure/repositories/HomepageRepository'

export function useHomepageContent() {
  return useMemo(() => getHomepageContent(homepageRepository), [])
}
