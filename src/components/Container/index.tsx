import { ReactNode, FC } from 'react'
import { Box } from 'component-library-tsdx-example'

type ContainerProps = {
  children?: ReactNode
}

export const Container: FC<ContainerProps> = ({ children }) => (
  <Box className='Container' mx='auto' maxWidth={['100%', 800]} px={3}>
    {children}
  </Box>
)
