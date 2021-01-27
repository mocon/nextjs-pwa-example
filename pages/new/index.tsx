import Head from 'next/head'
import { useRouter } from 'next/router'
import { useState } from 'react'
import wretch from 'wretch'
import { Box, ReactSelect, Text } from 'component-library-tsdx-example'
import { Button, Container, Header } from '../../src/components'

export async function getServerSideProps() {
  const localApi = `${process.env.NEXT_PUBLIC_LOCAL_API_URL}/api`
  const cryptoPrices = await wretch(`${localApi}/crypto`).get().json()
  const stockPrice = await wretch(`${localApi}/stock/TSLA`).get().json()

  return { props: { cryptoPrices, stockPrice } }
}

export default function NewSymbol({ cryptoPrices, stockPrice }) {
  const { push } = useRouter()
  const [value, setValue] = useState()

  const options = [
    { value: 'chocolate', label: 'Chocolate' },
    { value: 'strawberry', label: 'Strawberry' },
    { value: 'vanilla', label: 'Vanilla' },
  ]

  return (
    <>
      <Head>
        <title>New Symbol</title>
      </Head>
      <Header>
        <Text as='h1'>New symbol</Text>
        <Button onClick={() => push('/')}>Back</Button>
      </Header>
      <Container>
        <Box mt={3}>
          <ReactSelect
            placeholder='Select symbol...'
            options={options}
            onChange={(e) => setValue(e.value)}
          />
        </Box>
        <Text>Value: {value || 'No value yet'}</Text>
      </Container>
    </>
  )
}
