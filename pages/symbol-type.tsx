import Head from 'next/head'
import { useRouter } from 'next/router'
import { Box } from 'component-library-tsdx-example'
import { Button, Container, Header } from '../src/components'

export default function SymbolTypeScreen() {
  const { push } = useRouter()

  return (
    <>
      <Head>
        <title>Symbol Type</title>
      </Head>

      <Header title='Symbol Type'>
        <Button onClick={() => push('/')}>Back</Button>
      </Header>

      <Container justifyContent='center' alignItems='center'>
        <Box mb={3}>
          <Button onClick={() => push('/new/crypto')}>Crypto</Button>
        </Box>
        <Box>
          <Button onClick={() => push('/new/stock')}>Stock</Button>
        </Box>
      </Container>
    </>
  )
}
