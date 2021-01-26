import { Box, Text } from 'component-library-tsdx-example'

export const Empty = ({ message }) => (
  <Box display='flex' justifyContent='center' alignItems='center' p={4}>
    <Text fontSize={3} color='rgba(0,0,0,0.3)'>
      {message}
    </Text>
  </Box>
)
