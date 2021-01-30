import Head from 'next/head'
import { useRouter } from 'next/router'
import { useState, useEffect } from 'react'
import { Magic } from 'magic-sdk'
import { Box, Text } from 'component-library-tsdx-example'
import { Button, Container, Header, Input } from 'src/components'

export default function NewStockSymbolScreen() {
  const { push } = useRouter()
  const [email, setEmail] = useState('')
  const [magic, setMagic] = useState(null)

  useEffect(() => {
    !magic &&
      setMagic(new Magic(process.env.NEXT_PUBLIC_MAGICLINK_PUBLISHABLE_KEY))
    magic?.preload()
  }, [magic])

  async function handleLoginWithEmail(email) {
    try {
      let didToken = await magic.auth.loginWithMagicLink({
        email,
      })
      await authenticateWithServer(didToken)
    } catch (error) {
      // handle error
    }
  }

  async function authenticateWithServer(didToken) {
    const res = await fetch('/api/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: 'Bearer ' + didToken,
      },
    })
    res.status === 200 && push('/portfolio')
  }

  return (
    <>
      <Head>
        <title>Log In</title>
      </Head>
      <Header title='Log In'>
        {/* <Button onClick={() => push('/')}>Back</Button> */}
      </Header>
      <Container justifyContent='center' alignItems='center'>
        <Box my={3}>
          <Text fontSize={4} textAlign='center' mb={4}>
            Enter your email to receive a magic link to log in. We do not
            collect or share any user data.
          </Text>
          <Box display='flex'>
            <Input
              type='email'
              placeholder='user@email.com'
              onChange={(e) => setEmail(e.target.value)}
            />
          </Box>
        </Box>
        <Button onClick={() => handleLoginWithEmail(email)}>Send Link</Button>
      </Container>
    </>
  )
}
