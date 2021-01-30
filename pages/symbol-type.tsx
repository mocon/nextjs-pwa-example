import Head from 'next/head'
import { useRouter } from 'next/router'
import { Box, Text } from 'component-library-tsdx-example'
import { Button, Container, Header } from 'src/components'

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
        <Text fontSize={4} mb={4}>
          What type of symbol?
        </Text>
        <Box display='flex'>
          <Box mr={3}>
            <Button onClick={() => push('/new/crypto')}>Crypto</Button>
          </Box>
          <Box>
            <Button onClick={() => push('/new/stock')}>Stock</Button>
          </Box>
        </Box>
      </Container>
    </>
  )
}
