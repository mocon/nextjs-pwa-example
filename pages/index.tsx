import { useState, useEffect } from 'react'
import Head from 'next/head'
import { useRouter } from 'next/router'
import wretch from 'wretch'
import {
  Button,
  Container,
  Empty,
  Header,
  List,
  ListItem,
  ShareButton,
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

  useEffect(() => {
    getSymbolsFromLocalStorage()
  }, [])

  return (
    <>
      <Head>
        <title>Portfolio</title>
      </Head>

      <Header title='Portfolio'>
        <Button onClick={() => push('/symbol-type')}>Add</Button>
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

        <ShareButton />
      </Container>
    </>
  )
}
