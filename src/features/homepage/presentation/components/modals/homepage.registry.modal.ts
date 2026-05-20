import { lazy } from 'react'

const PromoTermsModal = lazy(() => import('./PromoTermsModal'))

export const HomepageRegistryModalKeys = {
  PromoTerms: 'HomepagePromoTerms',
} as const

const homepageRegistryModals = {
  [HomepageRegistryModalKeys.PromoTerms]: PromoTermsModal,
}

export default homepageRegistryModals
