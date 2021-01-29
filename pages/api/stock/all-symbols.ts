import type { NextApiRequest, NextApiResponse } from 'next'
import wretch from 'wretch'

const stockApiKey = process.env.TWELVEDATA_API_KEY
const stockApiUrl = process.env.TWELVEDATA_API_URL

type ReactSelectOptionsType = {
  value: string
  label: string
}

type StockResponseData = {
  data: object[]
  reactSelectOptions: ReactSelectOptionsType[]
}

export default async (
  req: NextApiRequest,
  res: NextApiResponse<StockResponseData>,
) => {
  const { data } = await wretch()
    .url(`${stockApiUrl}/stocks`)
    .headers({
      'x-rapidapi-key': stockApiKey,
      'x-rapidapi-host': 'twelve-data1.p.rapidapi.com',
    })
    .query({
      exchange: 'NASDAQ',
      format: 'json',
    })
    .get()
    .json()

  const reactSelectOptions = data.map((stock) => {
    return {
      value: stock.symbol,
      label: `${stock.symbol} - ${stock.name}`,
      name: stock.name,
    }
  })

  res.statusCode = 200
  res.json({ data, reactSelectOptions })
}
