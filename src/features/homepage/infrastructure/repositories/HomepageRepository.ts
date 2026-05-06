import type { HomepageContent } from '../../domain/entities/HomepageContent.entity'
import type { IHomepageRepository } from '../../domain/repositories/IHomepageRepository'

const IMG = {
  flightHnSgn:
    'https://images.unsplash.com/photo-1583417319070-4a69db38a482?w=640&q=80&auto=format&fit=crop',
  flightSgnDad:
    'https://images.unsplash.com/photo-1559592413-7cec4d0cae2b?w=640&q=80&auto=format&fit=crop',
  flightHnCxr:
    'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=640&q=80&auto=format&fit=crop',
  flightHnPqc: '/images/homepage/hanoi_phuquoc.png',
  flightHnCdo:
    'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=640&q=80&auto=format&fit=crop',
  destHanoi: '/images/homepage/img1.png',
  destHalong:
    'https://images.unsplash.com/photo-1528127269322-539801943592?w=640&q=80&auto=format&fit=crop',
  destSapa:
    'https://images.unsplash.com/photo-1519681393784-d120267933ba?w=640&q=80&auto=format&fit=crop',
  destFansipan:
    'https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?w=640&q=80&auto=format&fit=crop',
  destHoian:
    'https://images.unsplash.com/photo-1559592413-7cec4d0cae2b?w=640&q=80&auto=format&fit=crop',
  actHalong:
    'https://images.unsplash.com/photo-1528127269322-539801943592?w=640&q=80&auto=format&fit=crop',
  actHoian:
    'https://images.unsplash.com/photo-1528181304800-259b08848526?w=640&q=80&auto=format&fit=crop',
  actNhatrang:
    'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=640&q=80&auto=format&fit=crop',
  actDanang:
    'https://images.unsplash.com/photo-1583417319070-4a69db38a482?w=640&q=80&auto=format&fit=crop',
} as const

const STATIC_CONTENT: HomepageContent = {
  promos: [
    { id: 'new-user-1', variant: 'sky' },
    { id: 'new-user-2', variant: 'mint' },
    { id: 'new-user-3', variant: 'lavender' },
  ],
  flightDeals: [
    { id: 'hn-sgn', imageUrl: IMG.flightHnSgn, priceVnd: 1_230_426 },
    { id: 'sgn-dad', imageUrl: IMG.flightSgnDad, priceVnd: 890_000 },
    { id: 'hn-cxr', imageUrl: IMG.flightHnCxr, priceVnd: 1_050_000 },
    { id: 'hn-pqc', imageUrl: IMG.flightHnPqc, priceVnd: 1_420_000 },
    { id: 'hn-cdo', imageUrl: IMG.flightHnCdo, priceVnd: 2_100_000 },
  ],
  destinations: [
    { id: 'hanoi', imageUrl: IMG.destHanoi, activityCount: 80 },
    { id: 'halong', imageUrl: IMG.destHalong, activityCount: 45 },
    { id: 'sapa', imageUrl: IMG.destSapa, activityCount: 62 },
    { id: 'fansipan', imageUrl: IMG.destFansipan, activityCount: 28 },
    { id: 'hoian', imageUrl: IMG.destHoian, activityCount: 34 },
  ],
  activities: [
    {
      id: 'act-halong',
      imageUrl: IMG.actHalong,
      rating: 4.8,
      priceFromVnd: 1_250_420,
      tag: 'travel',
    },
    { id: 'act-hoian', imageUrl: IMG.actHoian, rating: 4.7, priceFromVnd: 890_000, tag: 'hot' },
    {
      id: 'act-nhatrang',
      imageUrl: IMG.actNhatrang,
      rating: 4.6,
      priceFromVnd: 750_000,
      tag: 'sale',
    },
    {
      id: 'act-danang',
      imageUrl: IMG.actDanang,
      rating: 4.9,
      priceFromVnd: 990_000,
      tag: 'travel',
    },
  ],
  why: [
    { id: 'choice', icon: '🎫' },
    { id: 'price', icon: '💎' },
    { id: 'support', icon: '🎧' },
    { id: 'variety', icon: '🧩' },
  ],
  attractions: [
    { rank: 1, id: 'halong-bay' },
    { rank: 2, id: 'ba-na' },
    { rank: 3, id: 'cu-chi' },
    { rank: 4, id: 'train-street' },
    { rank: 5, id: 'hon-gam-ghi' },
    { rank: 6, id: 'trang-an' },
    { rank: 7, id: 'marble-mountains' },
    { rank: 8, id: 'hoi-an-old' },
    { rank: 9, id: 'mekong' },
    { rank: 10, id: 'saigon-river' },
    { rank: 11, id: 'dragon-bridge' },
    { rank: 12, id: 'lan-ha' },
    { rank: 13, id: 'hanoi-old-quarter' },
    { rank: 14, id: 'cat-cat' },
    { rank: 15, id: 'bai-sao' },
    { rank: 16, id: 'fansipan-peak' },
    { rank: 17, id: 'grand-phu-quoc' },
    { rank: 18, id: 'tam-coc' },
    { rank: 19, id: 'my-khe' },
    { rank: 20, id: 'golden-bridge' },
  ],
}

export class HomepageRepository implements IHomepageRepository {
  getContent(): HomepageContent {
    return STATIC_CONTENT
  }
}

export const homepageRepository = new HomepageRepository()
