import Head from 'next/head'
import wretch from 'wretch'
import { Box, Text } from 'component-library-tsdx-example'
import { Container } from '../src/components'

export async function getServerSideProps() {
  const localApi = `${process.env.NEXT_PUBLIC_LOCAL_API_URL}/api`
  const cryptoPrices = await wretch(`${localApi}/crypto`).get().json()
  const stockPrice = await wretch(`${localApi}/stock/TSLA`).get().json()

  return { props: { cryptoPrices, stockPrice } }
}

export default function Home({ cryptoPrices, stockPrice }) {
  // TODO: Call these APIs from within components instead of here
  console.log('🏀 cryptoPrices =>', cryptoPrices)
  console.log('🏀 stockPrice =>', stockPrice)

  const A = ({ children, href }) => (
    <Text as='a' href={href} color='primary' display='inline-block'>
      {children}
    </Text>
  )

  return (
    <>
      <Head>
        <title>Next.js PWA</title>
        <link rel='icon' href='/favicon.ico' />
      </Head>

      <Container>
        <Box as='main'>
          <Text as='h1' mb={3}>
            Welcome to <A href='https://nextjs.org'>Next.js</A>
          </Text>

          <Text>
            Get started by editing <code>pages/index.js</code>
          </Text>

          <Box>
            <A href='https://nextjs.org/docs'>
              <Text as='h3'>Documentation &rarr;</Text>
              <Text>
                Find in-depth information about Next.js features and API.
              </Text>
            </A>

            <A href='https://nextjs.org/learn'>
              <Text as='h3'>Learn &rarr;</Text>
              <Text>
                Learn about Next.js in an interactive course with quizzes!
              </Text>
            </A>

            <A href='https://github.com/vercel/next.js/tree/master/examples'>
              <Text as='h3'>Examples &rarr;</Text>
              <Text>
                Discover and deploy boilerplate example Next.js projects.
              </Text>
            </A>

            <A href='https://vercel.com/import?filter=next.js&utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app'>
              <Text as='h3'>Deploy &rarr;</Text>
              <Text>
                Instantly deploy your Next.js site to a public URL with Vercel.
              </Text>
            </A>
          </Box>
        </Box>
      </Container>
    </>
  )
}
