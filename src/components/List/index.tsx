import { Box, Text } from 'component-library-tsdx-example'
import { format } from 'src/utils/format'

export const List = ({ children }) => (
  <Box
    as='ul'
    display='flex'
    flexDirection='column'
    justifyContent='space-between'
    alignItems='center'
    m={0}
    p={0}
  >
    {children}
  </Box>
)

export const ListItem = ({ symbol, name, quantity, price }) => (
  <Box
    as='li'
    display='flex'
    flexDirection='column'
    width='100%'
    borderBottom='1px solid'
    borderColor='rgba(0,0,0,0.05)'
  >
    <Box display='flex' justifyContent='space-between' alignItems='center'>
      <Text fontSize={4} mt={3} mb={0}>
        {name}
      </Text>
      <Text fontSize={4} mt={3} mb={0}>
        {format(quantity * price)}
      </Text>
    </Box>
    <Box display='flex' justifyContent='space-between' alignItems='center'>
      <Text color='light' mt={1}>
        {symbol}
      </Text>
      <Text color='light' mt={1}>
        {quantity} @ {format(price)}
      </Text>
    </Box>
  </Box>
)
