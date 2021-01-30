import Head from 'next/head'
import { useRouter } from 'next/router'
import { useState } from 'react'
import { useDispatch } from 'react-redux'
import { useQueryClient } from 'react-query'
import { Box, ReactSelect } from 'component-library-tsdx-example'
import { Button, Container, Header, Input } from 'src/components'
import { fetchAllCryptoSymbols } from 'src/utils/queries'
import { addCryptoSymbol } from 'src/store/symbols'

export async function getServerSideProps() {
  const { reactSelectOptions } = await fetchAllCryptoSymbols()
  return { props: { reactSelectOptions } }
}

export default function NewCryptoSymbolScreen({ reactSelectOptions }) {
  const { push } = useRouter()
  const dispatch = useDispatch()
  const queryClient = useQueryClient()
  const [symbol, setSymbol] = useState('')
  const [name, setName] = useState('')
  const [quantity, setQuantity] = useState(0)

  async function trackSymbol() {
    dispatch(addCryptoSymbol({ symbol, name, quantity }))
    queryClient.invalidateQueries('portfolioPrices')
    push('/portfolio')
  }

  return (
    <>
      <Head>
        <title>Add Crypto</title>
      </Head>
      <Header title='Add Crypto'>
        <Button onClick={() => push('/portfolio')}>Back</Button>
      </Header>
      <Container>
        <Box my={3}>
          <ReactSelect
            placeholder='Select crypto...'
            options={reactSelectOptions}
            onChange={(e) => {
              setSymbol(e.value)
              setName(e.name)
            }}
          />
        </Box>
        <Box display='flex' mb={3}>
          <Input
            type='number'
            placeholder='Quantity'
            onChange={(e) => setQuantity(e.target.value)}
          />
        </Box>
        <Button onClick={trackSymbol} disabled={!symbol || !quantity}>
          Add to List
        </Button>
      </Container>
    </>
  )
}
