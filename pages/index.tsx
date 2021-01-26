import Head from 'next/head'
import { useRouter } from 'next/router'
import wretch from 'wretch'
import { Box, Text } from 'component-library-tsdx-example'
import { A, Button, Container, Header } from '../src/components'

// export async function getServerSideProps() {
//   const localApi = `${process.env.NEXT_PUBLIC_LOCAL_API_URL}/api`
//   const cryptoPrices = await wretch(`${localApi}/crypto`).get().json()
//   const stockPrice = await wretch(`${localApi}/stock/TSLA`).get().json()

//   return { props: { cryptoPrices, stockPrice } }
// }

export default function Home() {
  const { push } = useRouter()

  return (
    <>
      <Head>
        <title>Watchlist</title>
      </Head>
      <Container>
        <Header>
          <Text as='h1'>Watchlist</Text>
          <Button onClick={() => push('/new')}>Add</Button>
        </Header>
      </Container>
    </>
  )
}
