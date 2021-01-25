import { useState, useRef } from 'react'
import Head from 'next/head'
import { Box, Text } from 'component-library-tsdx-example'
import { Container } from '../src/components'

// This gets called on every request
export async function getServerSideProps() {
  const localApiUrl = `${process.env.NEXT_PUBLIC_LOCAL_API_URL}/api`

  // Fetch data from external API
  const res = await fetch(`${localApiUrl}/getCryptoPrices`)
  const cryptoPrices = await res.json()

  // Pass data to the page via props
  return { props: { cryptoPrices } }
}

export default function Home({ cryptoPrices }) {
  const [value, setValue] = useState('Next.js!')
  const inputRef = useRef()

  const handleChange = (e) => {
    e.preventDefault()
    setValue(e.target.value)
  }

  console.log('🏀 cryptoPrices =>', cryptoPrices)

  return (
    <>
      <Head>
        <title>Create Next App</title>
        <link rel='icon' href='/favicon.ico' />
      </Head>

      <Container>
        <Box as='main'>
          <Text as='h1'>
            Welcome to{' '}
            <Text
              as='a'
              color='primary'
              href='https://nextjs.org'
              display='inline-block'
            >
              {value}
            </Text>
          </Text>

          <Text mb={5}>
            Get started by editing <code>pages/index.js</code>
          </Text>

          <Box mb={5}>
            <Box
              as='input'
              type='text'
              ref={inputRef}
              defaultValue={value}
              onChange={handleChange}
            />
          </Box>

          <Box>
            <Text as='a' color='primary' href='https://nextjs.org/docs' mb={5}>
              <Text as='h3'>Documentation &rarr;</Text>
              <Text>
                Find in-depth information about Next.js features and API.
              </Text>
            </Text>

            <Text as='a' color='primary' href='https://nextjs.org/learn' mb={5}>
              <Text as='h3'>Learn &rarr;</Text>
              <Text>
                Learn about Next.js in an interactive course with quizzes!
              </Text>
            </Text>

            <Text
              as='a'
              color='primary'
              href='https://github.com/vercel/next.js/tree/master/examples'
              mb={5}
            >
              <Text as='h3'>Examples &rarr;</Text>
              <Text>
                Discover and deploy boilerplate example Next.js projects.
              </Text>
            </Text>

            <Text
              as='a'
              color='primary'
              href='https://vercel.com/import?filter=next.js&utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app'
              mb={5}
            >
              <Text as='h3'>Deploy &rarr;</Text>
              <Text>
                Instantly deploy your Next.js site to a public URL with Vercel.
              </Text>
            </Text>
          </Box>
        </Box>

        <Box as='footer'>
          <Text
            as='a'
            color='primary'
            href='https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app'
            target='_blank'
            rel='noopener noreferrer'
          >
            Powered by <img src='/vercel.svg' alt='Vercel Logo' />
          </Text>
        </Box>
      </Container>
    </>
  )
}
