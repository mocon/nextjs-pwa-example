import { Box } from 'component-library-tsdx-example'
import { Button } from '../../components'

export const ShareButton = () => {
  const shareUrl = async () => {
    try {
      await navigator.share({
        url: 'https://nextjs-pwa-example.mylesoconnor.vercel.app',
      })
    } catch (err) {
      console.log(err)
    }
  }

  return (
    <Box className='Share' position='fixed' left={0} bottom={0} right={0} p={3}>
      <Button onClick={shareUrl}>Share</Button>
    </Box>
  )
}
