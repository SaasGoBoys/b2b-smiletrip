import { useTranslation } from 'react-i18next';

import DropdownItem from '../common/DropdownItem';

export const useHeaderConfig = () => {
  const { t } = useTranslation('common');

  const menuItems = [
    {
      key: 'products',
      label: <DropdownItem label={t('nav.products')} hasArrow />,
      children: [
        {
          key: '1',
          label: 'Vé máy bay nội địa',
        },
        {
          key: '2',
          label: 'Vé máy bay quốc tế',
        },
      ],
    },
    {
      key: 'agentPolicy',
      label: <DropdownItem label={t('nav.agentPolicy')} />,
    },
    {
      key: 'contactInfo',
      label: <DropdownItem label={t('nav.contactInfo')} />,
    },
  ];

  return { menuItems };
};
