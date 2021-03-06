import { Box } from 'component-library-tsdx-example'

export const Input = ({ placeholder, onChange, type = 'text' }) => (
  <Box
    as='input'
    display='flex'
    flex={1}
    flexGrow={1}
    fontSize={2}
    pt={8}
    px={10}
    pb={9}
    borderRadius={4}
    border='1px solid'
    borderColor='light'
    m={0}
    placeholder={placeholder}
    onChange={onChange}
    width='100%'
    height={19}
    type={type}
    style={{ outline: 'none', WebkitAppearance: 'none' }}
  />
)
