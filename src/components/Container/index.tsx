import { ReactNode, FC } from 'react'
import { Box } from 'component-library-tsdx-example'

type ContainerProps = {
  children?: ReactNode
}

// TODO: Update to <Box className='Container' mx='auto' maxWidth={['100%', 800]} px={3}>
// after fixing component library styled-system exports, see https://codesandbox.io/s/04w296kk6p

export const Container: FC<ContainerProps> = ({ children }) => (
  <div
    className='Container'
    style={{ margin: '0 auto', padding: '0 16px', maxWidth: 800 }}
  >
    {children}
  </div>
)
