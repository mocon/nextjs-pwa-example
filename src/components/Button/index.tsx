import { Box, Text } from 'component-library-tsdx-example'

export const Button = ({ children, onClick }) => (
  <Box
    as='button'
    display='flex'
    justifyContent='center'
    alignItems='center'
    onClick={onClick}
    backgroundColor='primary'
    py={2}
    px={3}
    borderRadius={6}
  >
    <Text fontSize={2} fontWeight='bold' color='white' m={0}>
      {children}
    </Text>
  </Box>
)