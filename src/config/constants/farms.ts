import contracts from './contracts'
import { FarmConfig, QuoteToken } from './types'
// To do : Change CNTACH farms, Remove others
const farms: FarmConfig[] = [
  {
    pid: 0,
    risk: 5,
    lpSymbol: 'CNTACH-LBOFU LP',
    lpAddresses: {
      97: '',
      56: '0xf622b711db3b377eced2dc641d664964e53011ef',
    },
    tokenSymbol: 'CNTACH',
    tokenAddresses: {
      97: '',
      56: '0x2b43dc1ddfa8faaba12d0388e4e60f484e7947f6', // LBOFU address
    },
    quoteTokenSymbol: QuoteToken.BUSD,
    quoteTokenAdresses: contracts.busd,
  },
  {
    pid: 1,
    risk: 5,
    lpSymbol: 'CNTACH-BUSD LP',
    lpAddresses: {
      97: '',
      56: '0x780974b3114622f1e930dd52e9bdba3c6d3618fd', // CNTACH BUSD pair
    },
    tokenSymbol: 'CNTACH',
    tokenAddresses: {
      97: '',
      56: '0x2b43dC1dDFA8FaAbA12d0388e4e60F484E7947f6', // CNTACH address
    },
    quoteTokenSymbol: QuoteToken.BUSD,
    quoteTokenAdresses: contracts.busd,
  },
  {
    pid: 2,
    risk: 5,
    lpSymbol: 'CNTACH-BNB LP',
    lpAddresses: {
      97: '',
      56: '0xa2e8bae385394ec923e433aa37526e3f73a878d5', // CNTACH BNB Pair
    },
    tokenSymbol: 'CNTACH',
    tokenAddresses: {
      97: '',
      56: '0x2b43dC1dDFA8FaAbA12d0388e4e60F484E7947f6', // CNTACH address
    },
    quoteTokenSymbol: QuoteToken.BNB,
    quoteTokenAdresses: contracts.wbnb,
  },
  {
    pid: 3,
    risk: 3,
    lpSymbol: 'BNB-BUSD LP',
    lpAddresses: {
      97: '',
      56: '0x1b96b92314c44b159149f7e0303511fb2fc4774f',
    },
    tokenSymbol: 'BNB',
    tokenAddresses: {
      97: '',
      56: '0xbb4cdb9cbd36b01bd1cbaebf2de08d9173bc095c',
    },
    quoteTokenSymbol: QuoteToken.BUSD,
    quoteTokenAdresses: contracts.busd,
  },
  {
    pid: 4,
    risk: 1,
    lpSymbol: 'USDT-BUSD LP',
    lpAddresses: {
      97: '',
      56: '0xc15fa3e22c912a276550f3e5fe3b0deb87b55acd',
    },
    tokenSymbol: 'USDT',
    tokenAddresses: {
      97: '',
      56: '0x55d398326f99059ff775485246999027b3197955',
    },
    quoteTokenSymbol: QuoteToken.BUSD,
    quoteTokenAdresses: contracts.busd,
  },
  {
    pid: 5,
    risk: 2,
    lpSymbol: 'BTCB-BNB LP',
    lpAddresses: {
      97: '',
      56: '0x7561eee90e24f3b348e1087a005f78b4c8453524',
    },
    tokenSymbol: 'BTCB',
    tokenAddresses: {
      97: '',
      56: '0x7130d2a12b9bcbfae4f2634d864a1ee1ce3ead9c',
    },
    quoteTokenSymbol: QuoteToken.BNB,
    quoteTokenAdresses: contracts.wbnb,
  },
  {
    pid: 6,
    risk: 2,
    lpSymbol: 'ETH-BNB LP',
    lpAddresses: {
      97: '',
      56: '0x70d8929d04b60af4fb9b58713ebcf18765ade422',
    },
    tokenSymbol: 'ETH',
    tokenAddresses: {
      97: '',
      56: '0x2170ed0880ac9a755fd29b2688956bd959f933f8',
    },
    quoteTokenSymbol: QuoteToken.BNB,
    quoteTokenAdresses: contracts.wbnb,
  },
  {
    pid: 7,
    risk: 5,
    isTokenOnly: true,
    lpSymbol: 'LBOFU',
    lpAddresses: {
      97: '',
      56: '0xae7fca3b31420af831c09abedfcd57f879e50d93', // EGG-BUSD LP replace 7788 - This is LBOFU  BNB
    },
    tokenSymbol: 'LBOFU',
    tokenAddresses: {
      97: '',
      56: '0x2b43dC1dDFA8FaAbA12d0388e4e60F484E7947f6',
    },
    quoteTokenSymbol: QuoteToken.BUSD,
    quoteTokenAdresses: contracts.busd,
  },
  {
    pid: 8,
    risk: 5,
    isTokenOnly: true,
    lpSymbol: 'CNTACH',
    lpAddresses: {
      97: '',
      56: '0x780974b3114622f1e930dd52e9bdba3c6d3618fd', // EGG-BUSD LP replace 7788
    },
    tokenSymbol: 'CNTACH',
    tokenAddresses: {
      97: '',
      56: '0x2b43dC1dDFA8FaAbA12d0388e4e60F484E7947f6',
    },
    quoteTokenSymbol: QuoteToken.BUSD,
    quoteTokenAdresses: contracts.busd,
  },
  {
    pid: 9,
    risk: 1,
    isTokenOnly: true,
    lpSymbol: 'BUSD',
    lpAddresses: {
      97: '',
      56: '0x19e7cbecdd23a16dfa5573df54d98f7caae03019', // EGG-BUSD LP (BUSD-BUSD will ignore)
    },
    tokenSymbol: 'BUSD',
    tokenAddresses: {
      97: '',
      56: '0xe9e7cea3dedca5984780bafc599bd69add087d56',
    },
    quoteTokenSymbol: QuoteToken.BUSD,
    quoteTokenAdresses: contracts.busd,
  },
  {
    pid: 10,
    risk: 3,
    isTokenOnly: true,
    lpSymbol: 'WBNB',
    lpAddresses: {
      97: '',
      56: '0x1b96b92314c44b159149f7e0303511fb2fc4774f', // BNB-BUSD LP
    },
    tokenSymbol: 'WBNB',
    tokenAddresses: {
      97: '',
      56: '0xbb4cdb9cbd36b01bd1cbaebf2de08d9173bc095c',
    },
    quoteTokenSymbol: QuoteToken.BUSD,
    quoteTokenAdresses: contracts.busd,
  },
]

export default farms
