import { Box } from 'component-library-tsdx-example'

export const Container = ({ children }) => (
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
)
