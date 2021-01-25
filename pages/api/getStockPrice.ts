import type { NextApiRequest, NextApiResponse } from 'next'

const apiKey = process.env.TWELVEDATA_API_KEY

type StockResponseData = {
  service: string
  key: string
}

export default (
  req: NextApiRequest,
  res: NextApiResponse<StockResponseData>,
) => {
  console.log('🏀 Stock request =>', req)

  res.statusCode = 200
  res.json({ service: 'getStockPrice', key: apiKey })
}
