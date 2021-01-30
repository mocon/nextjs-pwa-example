import { Box } from 'component-library-tsdx-example'
import { LoadingStyled } from './styled'

export const Loading = () => (
  <LoadingStyled>
    <Box
      className='GridLoader'
      color='primary'
      style={{ transform: 'scale(0.5)' }}
    >
      <Box />
      <Box />
      <Box />
      <Box />
      <Box />
      <Box />
      <Box />
      <Box />
      <Box />
    </Box>
  </LoadingStyled>
)
