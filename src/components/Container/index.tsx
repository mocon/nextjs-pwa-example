import { Box } from 'component-library-tsdx-example'

export const Container = ({ children }) => (
  <Box
    className='Container'
    mx='auto'
    height='100vh'
    overflowY='auto'
    px={3}
    backgroundColor='background'
  >
    {children}
  </Box>
)
