import Head from 'next/head'
import { useRouter } from 'next/router'
import { useState } from 'react'
import { useDispatch } from 'react-redux'
import { Box, ReactSelect } from 'component-library-tsdx-example'
import { Button, Container, Header, Input } from '../../src/components'
import { fetchAllStockSymbols } from '../../src/utils/queries'
import { addStockSymbol } from '../../src/store/symbols'

export async function getServerSideProps() {
  const { reactSelectOptions } = await fetchAllStockSymbols()
  return { props: { reactSelectOptions } }
}

export default function NewStockSymbolScreen({ reactSelectOptions }) {
  const { push } = useRouter()
  const dispatch = useDispatch()
  const [symbol, setSymbol] = useState('')
  const [name, setName] = useState('')
  const [quantity, setQuantity] = useState(0)

  async function trackSymbol() {
    dispatch(addStockSymbol({ symbol, name, quantity }))
    push('/')
  }

  return (
    <>
      <Head>
        <title>Add Stock</title>
      </Head>

      <Header title='Add Stock'>
        <Button onClick={() => push('/')}>Back</Button>
      </Header>

      <Container>
        <Box my={3}>
          <ReactSelect
            placeholder='Select stock...'
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
