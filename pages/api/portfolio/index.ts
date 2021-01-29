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

  let cryptoPortfolio = []
  cryptos.forEach(({ name, symbol, quantity }) => {
    const cryptoPrice = cryptoPrices.filter((c) => c.symbol === symbol)[0]
    return cryptoPortfolio.push({
      name,
      symbol,
      quantity,
      price: cryptoPrice.quote.USD.price,
    })
  })

  console.log('🏀 cryptoPortfolio =>', cryptoPortfolio)

  // TODO: Fetch prices for each stock
  let something = []
  // stocks.forEach(async ({ symbol }) => {
  //   const { price } = await wretch()
  //     .url(`${stockApiUrl}/price`)
  //     .headers({
  //       'x-rapidapi-key': stockApiKey,
  //       'x-rapidapi-host': 'twelve-data1.p.rapidapi.com',
  //     })
  //     .query({
  //       symbol,
  //       outputsize: '30',
  //       format: 'json',
  //     })
  //     .get()
  //     .json()
  // })

  // Promise.all([promise1, promise2, promise3]).then((values) => {
  //   console.log(values);
  // })

  res.statusCode = 200
  // @ts-ignore
  res.json([...cryptoPortfolio])
}
