import type { NextApiRequest, NextApiResponse } from 'next'
import wretch from 'wretch'

const cryptoApiKey = process.env.COINMARKETCAP_API_KEY
const cryptoApiUrl = process.env.COINMARKETCAP_API_URL
const stockApiKey = process.env.TWELVEDATA_API_KEY
const stockApiUrl = process.env.TWELVEDATA_API_URL

import type { Asset } from '../../../src/components/List'

type PortfolioResponseData = {
  assets: Asset[]
}

export default async (
  req: NextApiRequest,
  res: NextApiResponse<PortfolioResponseData>,
) => {
  const { cryptos, stocks } = JSON.parse(req.body)

  const { data: cryptoPrices } = await wretch()
    .url(`${cryptoApiUrl}/cryptocurrency/listings/latest`)
    .headers({
      'X-CMC_PRO_API_KEY': cryptoApiKey,
    })
    .get()
    .json()

  const cryptoPortfolio = cryptos.map(({ name, symbol, quantity }) => {
    const cryptoPrice = cryptoPrices.find((c) => c.symbol === symbol)

    return {
      name,
      symbol,
      quantity,
      price: cryptoPrice.quote.USD.price,
      total: quantity * cryptoPrice.quote.USD.price,
    }
  })

  const stockPortfolio = await Promise.all(
    stocks.map(async ({ name, symbol, quantity }) => {
      const { price } = await wretch()
        .url(`${stockApiUrl}/price`)
        .headers({
          'x-rapidapi-key': stockApiKey,
          'x-rapidapi-host': 'twelve-data1.p.rapidapi.com',
        })
        .query({
          symbol,
          outputsize: '30',
          format: 'json',
        })
        .get()
        .json()

      return { name, symbol, quantity, price, total: quantity * price }
    }),
  )

  res.statusCode = 200
  // @ts-ignore
  res.json([...cryptoPortfolio, ...stockPortfolio])
}
