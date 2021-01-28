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

export const ListItem = ({ cryptoData, symbol, quantity }) => {
  const currentCrypto = cryptoData.filter((c) => c.symbol === symbol)[0]

  return (
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
          {currentCrypto.name}
        </Text>
        <Text fontSize={4} mt={3} mb={0}>
          {format(quantity * currentCrypto.quote.USD.price)}
        </Text>
      </Box>
      <Box display='flex' justifyContent='space-between' alignItems='center'>
        <Text color='light' mt={2} mb={3}>
          {symbol}
        </Text>
        <Text color='light' mt={2} mb={3}>
          {quantity} * {format(currentCrypto.quote.USD.price)}
        </Text>
      </Box>
    </Box>
  )
}
