import { Text } from 'component-library-tsdx-example'

export const A = ({ children, href }) => (
  <Text as='a' href={href} color='primary' display='inline-block'>
    {children}
  </Text>
)
