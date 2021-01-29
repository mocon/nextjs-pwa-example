import { Box, Text } from 'component-library-tsdx-example'

export const Loading = ({ message = 'Loading...' }) => (
  <Box
    display='flex'
    flexDirection='column'
    flex={1}
    justifyContent='center'
    alignItems='center'
  >
    <Text fontSize={3} color='light'>
      {message}
    </Text>
  </Box>
)
