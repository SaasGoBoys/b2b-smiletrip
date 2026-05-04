import type { HomepageContent } from '../entities/HomepageContent.entity'

export interface IHomepageRepository {
  getContent(): HomepageContent
}
