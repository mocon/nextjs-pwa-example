import { Box } from 'component-library-tsdx-example'

export const Container = ({ children, ...other }) => (
  <Box
    className='Container'
    display='flex'
    flexDirection='column'
    flex={1}
    overflowY='auto'
    px={3}
    backgroundColor='background'
    {...other}
  >
    {children}
  </Box>
)
