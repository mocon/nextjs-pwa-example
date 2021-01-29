import Head from 'next/head'
import { useRouter } from 'next/router'
import { useQuery } from 'react-query'
import { useSelector } from 'react-redux'
import {
  Button,
  Container,
  Empty,
  Header,
  List,
  ShareButton,
} from '../src/components'
import { fetchAllCryptoData, fetchAllStockSymbols } from '../src/utils/queries'

export async function getServerSideProps() {
  const { data: cryptoData } = await fetchAllCryptoData()
  const { data: stockData } = await fetchAllStockSymbols()
  return { props: { cryptoData, stockData } }
}

export default function HomeScreen({ cryptoData, stockData }) {
  const { push } = useRouter()
  const trackedCryptos = useSelector((state) => state.symbols.cryptos)
  const trackedStocks = useSelector((state) => state.symbols.stocks)
  const symbols = [...trackedCryptos, ...trackedStocks]

  const { data: allCryptoData } = useQuery(
    'allCryptoData',
    fetchAllCryptoData,
    { initialData: cryptoData },
  )

  const { data: allStockData } = useQuery(
    'allStockData',
    fetchAllStockSymbols,
    {
      initialData: stockData,
    },
  )

  return (
    <>
      <Head>
        <title>Portfolio</title>
      </Head>

      <Header title='Portfolio'>
        <Button onClick={() => push('/symbol-type')}>Add</Button>
      </Header>

      <Container>
        {/* {symbols.length > 0 && <List portfolio={null} />} */}

        {symbols.length === 0 && <Empty message='No symbols tracked' />}

        <ShareButton />
      </Container>
    </>
  )
}
