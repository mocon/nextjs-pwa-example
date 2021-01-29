import type { NextApiRequest, NextApiResponse } from 'next'
import wretch from 'wretch'

const cryptoApiKey = process.env.COINMARKETCAP_API_KEY
const cryptoApiUrl = process.env.COINMARKETCAP_API_URL

type CryptoResponseData = {
  data: object[]
  status: object
}

export default async (
  req: NextApiRequest,
  res: NextApiResponse<CryptoResponseData>,
) => {
  const { data, status } = await wretch()
    .url(`${cryptoApiUrl}/cryptocurrency/listings/latest`)
    .headers({
      'X-CMC_PRO_API_KEY': cryptoApiKey,
    })
    .get()
    .json()

  res.statusCode = 200
  res.json({ data, status })
}
