import { useTranslation } from 'react-i18next'

import {
  FacebookOutlined,
  InstagramOutlined,
  TwitterOutlined,
  YoutubeOutlined,
} from '@ant-design/icons'

export function HomepageFooterSection() {
  const { t } = useTranslation('homepage')

  const columns: { title: string; links: string[] }[] = [
    { title: t('footer.col1.title'), links: t('footer.col1.links', { returnObjects: true }) as string[] },
    { title: t('footer.col2.title'), links: t('footer.col2.links', { returnObjects: true }) as string[] },
    { title: t('footer.col3.title'), links: t('footer.col3.links', { returnObjects: true }) as string[] },
  ]

  return (
    <footer className="bg-white border-t border-gray-200">
      <div className="max-w-[1200px] mx-auto px-4 pt-10 pb-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
          {columns.map((col) => (
            <div key={col.title}>
              <p className="font-bold text-gray-900 mb-4">{col.title}</p>
              <ul className="space-y-2">
                {col.links.map((link) => (
                  <li key={link}>
                    <a href="#" className="text-sm text-gray-600 hover:text-[#4558B6]">
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
          <div>
            <p className="font-bold text-gray-900 mb-4">{t('footer.payments.title')}</p>
            <div className="flex flex-wrap gap-2">
              {['Visa', 'Mastercard', 'JCB'].map((p) => (
                <div
                  key={p}
                  className="h-9 px-3 rounded-md border border-gray-200 bg-gray-50 text-xs font-bold text-gray-600 flex items-center"
                >
                  {p}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      <div className="border-t border-gray-200">
        <div className="max-w-[1200px] mx-auto px-4 py-5 flex flex-wrap items-center justify-between gap-4">
          <p className="text-xs text-gray-500">{t('footer.copyright')}</p>
          <div className="flex gap-4 text-gray-400 text-lg">
            <a href="#" aria-label="Facebook">
              <FacebookOutlined />
            </a>
            <a href="#" aria-label="Instagram">
              <InstagramOutlined />
            </a>
            <a href="#" aria-label="Twitter">
              <TwitterOutlined />
            </a>
            <a href="#" aria-label="YouTube">
              <YoutubeOutlined />
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}
