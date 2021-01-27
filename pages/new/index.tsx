import Head from 'next/head'
import { useRouter } from 'next/router'
import { useState } from 'react'
import wretch from 'wretch'
import { Box, ReactSelect } from 'component-library-tsdx-example'
import { Button, Container, Header, Input } from '../../src/components'

export async function getServerSideProps() {
  const localApi = `${process.env.NEXT_PUBLIC_LOCAL_API_URL}/api`
  const { data: cryptoData, reactSelectOptions: cryptoSymbols } = await wretch(
    `${localApi}/crypto/all-symbols`,
  )
    .get()
    .json()

  return { props: { cryptoData, cryptoSymbols } }
}

export default function NewSymbolScreen({ cryptoData, cryptoSymbols }) {
  const { push } = useRouter()
  const [symbol, setSymbol] = useState()
  const [quantity, setQuantity] = useState()

  async function addSymbolToLocalStorage() {
    const currentSymbols = await JSON.parse(localStorage.getItem('symbols'))
    const updatedSymbols = !currentSymbols
      ? [{ symbol, quantity }]
      : [...currentSymbols, { symbol, quantity }]

    await localStorage.setItem('symbols', JSON.stringify(updatedSymbols))
    push('/')
  }

  return (
    <>
      <Head>
        <title>Add Holding</title>
      </Head>

      <Header title='Add Holding'>
        <Button onClick={() => push('/')}>Back</Button>
      </Header>

      <Container>
        <Box my={3}>
          <ReactSelect
            placeholder='Select crypto...'
            options={cryptoSymbols}
            onChange={(e) => setSymbol(e.value)}
          />
        </Box>
        <Box display='flex' mb={3}>
          <Input
            type='number'
            placeholder='Quantity'
            onChange={(e) => setQuantity(e.target.value)}
          />
        </Box>

        <Button
          onClick={addSymbolToLocalStorage}
          disabled={!symbol || !quantity}
        >
          Add to List
        </Button>
      </Container>
    </>
  )
}
