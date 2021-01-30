import Head from 'next/head'
import { useRouter } from 'next/router'
import { useQuery } from 'react-query'
import { useSelector } from 'react-redux'
import * as R from 'ramda'
import { Box } from 'component-library-tsdx-example'
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
import { fetchPortfolioPrices, sendSms, sendEmail } from 'src/utils/queries'

export default function PortfolioScreen() {
  const { push } = useRouter()
  const cryptos = useSelector((state) => state.symbols.cryptos)
  const stocks = useSelector((state) => state.symbols.stocks)
  const { data: portfolio, isLoading } = useQuery('portfolioPrices', () =>
    fetchPortfolioPrices(cryptos, stocks),
  )

  function sendTestSms() {
    sendSms('Hello and welcome from Next PWA app.', '+13104308876')
  }

  function sendTestEmail() {
    sendEmail(
      'myles.oconnor@gmail.com',
      'myles.oconnor@gmail.com',
      'Sending with SendGrid is Fun',
      'and easy to do anywhere, even with Node.js',
      '<strong>and easy to do anywhere, even with Node.js</strong>',
    )
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
        {/* Example buttons */}
        <Box display='flex' justifyContent='space-between' my={3}>
          <Box mr={2}>
            <Button onClick={sendTestSms} appearance='outline'>
              Send Text
            </Button>
          </Box>
          <Box ml={2}>
            <Button onClick={sendTestEmail} appearance='outline'>
              Send Email
            </Button>
          </Box>
        </Box>

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
