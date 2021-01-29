import { FC } from 'react'
import { Box, Text } from 'component-library-tsdx-example'
import { format } from 'src/utils/format'

export type Asset = {
  name: string
  symbol: string
  quantity: number
  price: number
}

type ListProps = {
  portfolio?: [Asset]
}

export const List: FC<ListProps> = ({ portfolio }) => {
  if (!portfolio) return null

  return (
    <Box
      as='ul'
      display='flex'
      flexDirection='column'
      justifyContent='space-between'
      alignItems='center'
      m={0}
      p={0}
    >
      {portfolio.map(({ name, symbol, quantity, price }) => (
        <ListItem
          key={symbol}
          name={name}
          symbol={symbol}
          quantity={quantity}
          price={price}
        />
      ))}
    </Box>
  )
}

export const ListItem = ({ name, symbol, quantity, price }) => (
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
      <Text color='light' mt={2} mb={3}>
        {symbol}
      </Text>
      <Text color='light' mt={2} mb={3}>
        {quantity} * {format(price)}
      </Text>
    </Box>
  </Box>
)
