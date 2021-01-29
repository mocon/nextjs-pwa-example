import Head from 'next/head'
import { useRouter } from 'next/router'
import { useQuery } from 'react-query'
import { useSelector } from 'react-redux'
import * as R from 'ramda'
import {
  Button,
  ClearButton,
  Container,
  Empty,
  Header,
  List,
  Loading,
  ShareButton,
} from '../src/components'
import { fetchPortfolioPrices } from '../src/utils/queries'

export default function HomeScreen() {
  const { push } = useRouter()
  const cryptos = useSelector((state) => state.symbols.cryptos)
  const stocks = useSelector((state) => state.symbols.stocks)
  const { data: portfolio, isLoading } = useQuery('portfolioPrices', () =>
    fetchPortfolioPrices(cryptos, stocks),
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
        {isLoading && <Loading />}

        {R.path(['length'], portfolio) > 0 && (
          // @ts-ignore
          <List portfolio={portfolio} />
        )}

        {R.path(['length'], portfolio) === 0 && (
          <Empty message='Portfolio is empty' />
        )}

        <ShareButton />

        <ClearButton />
      </Container>
    </>
  )
}
