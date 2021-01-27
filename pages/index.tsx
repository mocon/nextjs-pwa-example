import Head from 'next/head'
import { useRouter } from 'next/router'
import { Text } from 'component-library-tsdx-example'
import {
  Button,
  Container,
  Empty,
  Header,
  List,
  ListItem,
} from '../src/components'

export default function Home() {
  const { push } = useRouter()

  return (
    <>
      <Head>
        <title>Holdings</title>
      </Head>
      <Header>
        <Text as='h1'>Holdings</Text>
        <Button onClick={() => push('/new')}>Add</Button>
      </Header>
      <Container>
        <List>
          <ListItem
            symbol='TSLA'
            name='Tesla, Inc'
            quantity={1.765}
            price={860.125}
          />
          <ListItem
            symbol='AAPL'
            name='Tesla, Inc'
            quantity={25}
            price={143.786}
          />
        </List>
        <Empty message='No symbols tracked' />
      </Container>
    </>
  )
}
