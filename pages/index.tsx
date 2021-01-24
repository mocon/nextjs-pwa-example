import Head from 'next/head'
import { Box, Text } from 'component-library-tsdx-example'

export default function Home() {
  return (
    <>
      <Head>
        <title>Create Next App</title>
        <link rel='icon' href='/favicon.ico' />
      </Head>

      <Box as='main'>
        <Text as='h1'>
          Welcome to{' '}
          <Text as='a' color='primary' href='https://nextjs.org' display='inline-block'>
            Next.js!
          </Text>
        </Text>

        <Text mb={5}>
          Get started by editing <code>pages/index.js</code>
        </Text>

        <Box>
          <Text as='a' color='primary' href='https://nextjs.org/docs' mb={5}>
            <Text as='h3'>Documentation &rarr;</Text>
            <Text>Find in-depth information about Next.js features and API.</Text>
          </Text>

          <Text as='a' color='primary' href='https://nextjs.org/learn' mb={5}>
            <Text as='h3'>Learn &rarr;</Text>
            <Text>Learn about Next.js in an interactive course with quizzes!</Text>
          </Text>

          <Text
            as='a'
            color='primary'
            href='https://github.com/vercel/next.js/tree/master/examples'
            mb={5}
          >
            <Text as='h3'>Examples &rarr;</Text>
            <Text>Discover and deploy boilerplate example Next.js projects.</Text>
          </Text>

          <Text
            as='a'
            color='primary'
            href='https://vercel.com/import?filter=next.js&utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app'
            mb={5}
          >
            <Text as='h3'>Deploy &rarr;</Text>
            <Text>Instantly deploy your Next.js site to a public URL with Vercel.</Text>
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
    </>
  )
}
