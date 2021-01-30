import { Box, Text } from 'component-library-tsdx-example'

export const Empty = ({ emoji = '🏖️', message = 'Nothing to see here' }) => (
  <Box
    display='flex'
    flexDirection='column'
    flex={1}
    justifyContent='center'
    alignItems='center'
  >
    <Text fontSize={60} m={0}>
      {emoji}
    </Text>
    <Text fontSize={2} color='light' mt={3}>
      {message}
    </Text>
  </Box>
)
