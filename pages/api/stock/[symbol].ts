import type { NextApiRequest, NextApiResponse } from 'next'
import wretch from 'wretch'

// See https://rapidapi.com/twelvedata/api/twelve-data1?endpoint=apiendpoint_2d125704-6e3e-4be1-a561-70705e199ef7 for details
const stockApiKey = process.env.TWELVEDATA_API_KEY
const stockApiUrl = process.env.TWELVEDATA_API_URL

type StockResponseData = {
  symbol: string
  price: string
}

export default async (
  req: NextApiRequest,
  res: NextApiResponse<StockResponseData>,
) => {
  const {
    query: { symbol },
  } = req

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

  res.statusCode = 200
  // @ts-ignore
  res.json({ symbol, price })
}
