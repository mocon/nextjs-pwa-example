import type { NextApiRequest, NextApiResponse } from 'next'
import wretch from 'wretch'

const cryptoApiKey = process.env.COINMARKETCAP_API_KEY
const cryptoApiUrl = process.env.COINMARKETCAP_API_URL

type ReactSelectOptionsType = {
  value: string
  label: string
}

type CryptoResponseData = {
  data: object[]
  reactSelectOptions: ReactSelectOptionsType[]
}

export default async (
  req: NextApiRequest,
  res: NextApiResponse<CryptoResponseData>,
) => {
  const { data } = await wretch()
    .url(`${cryptoApiUrl}/cryptocurrency/listings/latest`)
    .headers({
      'X-CMC_PRO_API_KEY': cryptoApiKey,
    })
    .get()
    .json()

  const reactSelectOptions = data.map((crypto) => {
    return {
      value: crypto.symbol,
      label: `${crypto.symbol} - ${crypto.name}`,
      name: crypto.name,
    }
  })

  res.statusCode = 200
  res.json({ data, reactSelectOptions })
}
