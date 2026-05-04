import type { HomepageContent } from '../../domain/entities/HomepageContent.entity'
import type { IHomepageRepository } from '../../domain/repositories/IHomepageRepository'

export function getHomepageContent(repository: IHomepageRepository): HomepageContent {
  return repository.getContent()
}
