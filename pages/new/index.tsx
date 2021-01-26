import Head from 'next/head'
import { useRouter } from 'next/router'
import { useState } from 'react'
import { Box, ReactSelect, Text } from 'component-library-tsdx-example'
import { Button, Container, Header } from '../../src/components'

export default function NewSymbol() {
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
