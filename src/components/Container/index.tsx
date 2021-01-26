import { Box } from 'component-library-tsdx-example'
import { Button } from '../Button'

export const Container = ({ children }) => {
  const shareUrl = async () => {
    try {
      await navigator.share({
        url: window.location.href,
      })
    } catch (err) {
      alert(err)
    }
  }

  return (
    <>
      <Box
        className='Container'
        display='flex'
        flexDirection='column'
        flex={1}
        overflowY='auto'
        px={3}
        backgroundColor='background'
      >
        {children}
      </Box>
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
    </>
  )
}
