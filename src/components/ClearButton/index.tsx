import { useRouter } from 'next/router'
import { useDispatch } from 'react-redux'
import { useQueryClient } from 'react-query'
import { Box } from 'component-library-tsdx-example'
import { Button } from '../../components'
import { resetAllSymbols } from '../../store/symbols'

export const ClearButton = () => {
  const { push } = useRouter()
  const dispatch = useDispatch()
  const queryClient = useQueryClient()

  const clearSymbols = () => {
    if (window.confirm('Are you sure?')) {
      dispatch(resetAllSymbols())
      queryClient.invalidateQueries('portfolioPrices')
      push('/portfolio')
    }
  }

  return (
    <Box className='Clear' position='fixed' bottom={0} right={0} p={3}>
      <Button appearance='danger' onClick={clearSymbols}>
        Reset
      </Button>
    </Box>
  )
}
