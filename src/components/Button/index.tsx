import { Box, Text } from 'component-library-tsdx-example'

export const Button = ({ children, onClick }) => (
  <Box
    as='button'
    display='flex'
    justifyContent='center'
    alignItems='center'
    onClick={onClick}
    backgroundColor='text'
    pt={8}
    px={3}
    pb={9}
    borderRadius={6}
    border='none'
    m={0}
  >
    <Text fontSize={2} color='white' m={0}>
      {children}
    </Text>
  </Box>
)
