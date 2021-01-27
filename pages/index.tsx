import { useState, useEffect } from 'react'
import Head from 'next/head'
import { useRouter } from 'next/router'
import wretch from 'wretch'
import { Box } from 'component-library-tsdx-example'
import {
  Button,
  Container,
  Empty,
  Header,
  List,
  ListItem,
} from '../src/components'

export async function getServerSideProps() {
  const localApi = `${process.env.NEXT_PUBLIC_LOCAL_API_URL}/api`
  const { data: cryptoData } = await wretch(`${localApi}/crypto`).get().json()
  return { props: { cryptoData } }
}

export default function HomeScreen({ cryptoData }) {
  const { push } = useRouter()
  const [symbols, setSymbols] = useState([])

  async function getSymbolsFromLocalStorage() {
    const localSymbols = await JSON.parse(localStorage.getItem('symbols'))
    if (localSymbols) setSymbols(localSymbols)
  }

  const shareUrl = async () => {
    try {
      await navigator.share({
        url: window.location.href,
      })
    } catch (err) {
      console.log(err)
    }
  }

  useEffect(() => {
    getSymbolsFromLocalStorage()
  }, [])

  return (
    <>
      <Head>
        <title>Holdings</title>
      </Head>

      <Header title='Holdings'>
        <Button onClick={() => push('/new')}>Add</Button>
      </Header>

      <Container>
        <List>
          {symbols.length > 0 &&
            symbols.map(({ symbol, quantity }) => (
              <ListItem
                key={symbol}
                symbol={symbol}
                quantity={quantity}
                cryptoData={cryptoData}
              />
            ))}
        </List>

        {symbols.length === 0 && <Empty message='No symbols tracked' />}

        {/* Share button */}
        <Box
          className='Share'
          position='fixed'
          left={0}
          bottom={0}
          right={0}
          p={3}
        >
          <Button onClick={shareUrl}>Share</Button>
        </Box>
      </Container>
    </>
  )
}
