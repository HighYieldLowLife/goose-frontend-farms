import { MenuEntry } from '@pancakeswap-libs/uikit'

const config: MenuEntry[] = [
  {
    label: 'Garage',
    icon: 'HomeIcon',
    href: '/',
  },
  {
    label: 'Pit Stop',
    icon: 'TradeIcon',
    items: [
      {
        label: 'Exchange',
        href: 'https://exchange.countachswap.com/',
      },
      {
        label: 'Liquidity',
        href: 'https://exchange.countachswap.com/#/pool',
      },
    ],
  },
  {
    label: 'Racing',
    icon: 'FarmIcon',
    href: '/farms',
  },
  {
    label: 'Time Attack',
    icon: 'PoolIcon',
    href: '/nests',
  },
  // {
  //   label: 'Pools',
  //   icon: 'PoolIcon',
  //   href: '/pools',
  // },
  // {
  //   label: 'Lottery',
  //   icon: 'TicketIcon',
  //   href: '/lottery',
  // },
  // {
  //   label: 'NFT',
  //   icon: 'NftIcon',
  //   href: '/nft',
  // },
  {
    label: 'Info',
    icon: 'InfoIcon',
    items: [
      {
        label: 'PancakeSwap',
        href: 'https://pancakeswap.info/token/0x2b43dC1dDFA8FaAbA12d0388e4e60F484E7947f6',
      },
    ],
  },
  {
    label: 'More',
    icon: 'MoreIcon',
    items: [
      {
        label: 'Github',
        href: 'https://github.com/countachswap/',
      },
      {
        label: 'Docs',
        href: 'https://countachswap.gitbook.io/countachswap/',
      },
      {
        label: 'Blog',
        href: 'https://countachswap.medium.com/',
      },
    ],
  },
]

export default config
