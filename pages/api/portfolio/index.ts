import type { NextApiRequest, NextApiResponse } from 'next'

import {
  fetchAllCryptoData,
  fetchStockPriceBySymbol,
} from '../../../src/utils/queries'

import type { Asset } from '../../../src/components/List'

type PortfolioResponseData = {
  assets: Asset[]
}

export default async (
  req: NextApiRequest,
  res: NextApiResponse<PortfolioResponseData>,
) => {
  const { cryptos, stocks } = JSON.parse(req.body)
  const { data: cryptoPrices } = await fetchAllCryptoData()

  const cryptoPortfolio = cryptos.map(({ name, symbol, quantity }) => {
    const cryptoPrice = cryptoPrices.filter((c) => c.symbol === symbol)[0]
    return {
      name,
      symbol,
      quantity,
      price: cryptoPrice.quote.USD.price,
    }
  })

  const stockPortfolio = await Promise.all(
    stocks.map(async ({ name, symbol, quantity }) => {
      const { price } = await fetchStockPriceBySymbol(symbol)
      return { name, symbol, quantity, price }
    }),
  )

  res.statusCode = 200
  // @ts-ignore
  res.json([...cryptoPortfolio, ...stockPortfolio])
}
