import { Box, Text } from 'component-library-tsdx-example'

export const Header = ({ title, children }) => (
  <Box
    as='header'
    display='flex'
    justifyContent='space-between'
    alignItems='center'
    px={3}
    mt={4}
    mb={3}
  >
    <Text as='h1' fontSize={4} fontWeight='normal' color='white'>
      {title}
    </Text>
    <Box>{children}</Box>
  </Box>
)
