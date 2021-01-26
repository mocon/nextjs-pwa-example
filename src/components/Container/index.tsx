import { Box } from 'component-library-tsdx-example'

export const Container = ({ children }) => (
  <Box
    className='Container'
    mx='auto'
    maxWidth={['100%', 800]}
    px={3}
    backgroundColor='background'
  >
    {children}
  </Box>
)
