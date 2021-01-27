import { Box, Text } from 'component-library-tsdx-example'

export const Empty = ({ emoji = '🏖️', message = 'Nothing to see here' }) => (
  <Box
    display='flex'
    flexDirection='column'
    justifyContent='center'
    alignItems='center'
    p={4}
  >
    <Text fontSize={60} m={0}>
      {emoji}
    </Text>
    <Text fontSize={3} color='light' mt={1}>
      {message}
    </Text>
  </Box>
)
