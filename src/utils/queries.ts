import wretch from 'wretch'

const LOCAL_API = `${process.env.NEXT_PUBLIC_LOCAL_API_URL}/api`

/*
  These functions call the local Next.js API, and are passed to:

  - `getServerSideProps` on the server
  - `react-query` on the client

  Give each query a key using `useQuery`:

  const { data } = useQuery('allCryptoData', fetchAllCryptoData)
  
  Later, invalidate it to re-fetch the query:

  queryClient.invalidateQueries('allCryptoData')
*/

export const fetchAllCryptoData = () =>
  wretch(`${LOCAL_API}/crypto`).get().json()

export const fetchAllCryptoSymbols = () =>
  wretch(`${LOCAL_API}/crypto/all-symbols`).get().json()

export const fetchAllStockSymbols = () =>
  wretch(`${LOCAL_API}/stock/all-symbols`).get().json()

export const fetchStockPriceBySymbol = (symbol) =>
  wretch(`${LOCAL_API}/stock/${symbol}`).get().json()

export const fetchPortfolioPrices = (cryptos, stocks) =>
  wretch(`${LOCAL_API}/portfolio`)
    .post(JSON.stringify({ cryptos, stocks }))
    .json()
