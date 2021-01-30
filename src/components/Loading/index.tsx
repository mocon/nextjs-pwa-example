import { Box } from 'component-library-tsdx-example'
import { LoadingStyled } from './styled'

export const Loading = () => (
  <LoadingStyled>
    <Box
      display='flex'
      flexDirection='column'
      flex={1}
      justifyContent='center'
      alignItems='center'
    >
      <Box
        className='GridLoader'
        color='primary'
        style={{ transform: 'scale(0.75)' }}
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
    </Box>
  </LoadingStyled>
)
