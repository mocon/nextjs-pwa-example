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
} from 'src/components'
import { fetchPortfolioPrices, sendSms } from 'src/utils/queries'

export default function HomeScreen() {
  const { push } = useRouter()
  const cryptos = useSelector((state) => state.symbols.cryptos)
  const stocks = useSelector((state) => state.symbols.stocks)
  const { data: portfolio, isLoading } = useQuery('portfolioPrices', () =>
    fetchPortfolioPrices(cryptos, stocks),
  )

  const sendText = () => {
    sendSms('Hello and welcome from Next PWA app.', '+13104308876')
  }

  return (
    <>
      <Head>
        <title>Portfolio</title>
      </Head>
      <Header title='Portfolio'>
        <Button onClick={() => push('/symbol-type')}>Add</Button>
      </Header>
      <Container>
        <Button onClick={sendText}>Send Text</Button>
        {isLoading && <Loading />}
        {R.path(['length'], portfolio) > 0 && (
          <>
            {/* @ts-ignore */}
            <List portfolio={portfolio} />
            <ClearButton />
          </>
        )}
        {R.path(['length'], portfolio) === 0 && (
          <Empty message='Portfolio is empty' />
        )}
        <ShareButton />
      </Container>
    </>
  )
}
