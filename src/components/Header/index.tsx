import { Box } from 'component-library-tsdx-example'

export const Header = ({ children }) => (
  <Box
    as='header'
    display='flex'
    justifyContent='space-between'
    alignItems='center'
    mt={4}
  >
    {children}
  </Box>
)