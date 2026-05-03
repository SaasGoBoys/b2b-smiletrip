import { Typography } from 'antd'

const { Title } = Typography

interface Destination {
  rank: number
  name: string
}

const DESTINATIONS: Destination[] = [
  { rank: 1, name: 'Vịnh Hạ Long' },
  { rank: 2, name: 'Sun World Bà Nà Hill' },
  { rank: 3, name: 'Địa đạo Củ Chi' },
  { rank: 4, name: 'Phố đường Tàu Hà Nội' },
  { rank: 5, name: 'Hòn Gầm Ghì' },
  { rank: 6, name: 'Di Sản Tràng An - Ninh Binh' },
  { rank: 7, name: 'Ngũ Hành Sơn' },
  { rank: 8, name: 'Phố cổ Hội An' },
  { rank: 9, name: 'Đồng Bằng Sông Cửu Long' },
  { rank: 10, name: 'Sông Sài Gòn' },
  { rank: 11, name: 'Cầu Rồng' },
  { rank: 12, name: 'Vịnh Lan Hạ' },
  { rank: 13, name: 'Khu phố cổ Hà Nội' },
  { rank: 14, name: 'Bản Cát Cát' },
  { rank: 15, name: 'Bãi Sao' },
  { rank: 16, name: 'Phan xi păng' },
  { rank: 17, name: 'Grand Phú Quốc' },
  { rank: 18, name: 'Tam Côc Bích Động' },
  { rank: 19, name: 'Bãi biển Mỹ Khê' },
  { rank: 20, name: 'Cầu Vàng' },
]

export function TopDestinations() {
  return (
    <div className="py-[60px] bg-white">
      <div className="mx-auto px-4 container">
        <Title
          level={2}
          className="!mb-10 !text-[40px] !font-normal !text-text-main"
        >
          Các điểm tham quan hàng đầu Việt Nam
        </Title>

        <div className="flex flex-wrap gap-x-2 gap-y-2">
          {DESTINATIONS.map((dest) => (
            <div
              key={dest.rank}
              className="flex overflow-hidden border border-primary-soft-border rounded-[10px] cursor-pointer transition-all duration-150 hover:shadow-sm"
            >
              <div className="bg-primary-soft-bg w-8 flex items-center justify-center border-r border-primary-soft-border text-primary font-normal text-[14px]">
                {dest.rank}
              </div>
              <div className="bg-white flex items-center px-2 py-[5px] text-text-main text-[14px] font-normal whitespace-nowrap">
                {dest.name}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

