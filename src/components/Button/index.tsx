import { FC, ReactNode } from 'react'
import { Box, Text } from 'component-library-tsdx-example'

type ButtonProps = {
  children?: ReactNode
  onClick?: Function
  disabled?: boolean
}

export const Button: FC<ButtonProps> = ({ children, onClick, disabled }) => (
  <Box
    as='button'
    display='flex'
    justifyContent='center'
    alignItems='center'
    onClick={onClick}
    backgroundColor='secondary'
    pt={8}
    px={20}
    pb={10}
    borderRadius={18}
    border='none'
    m={0}
    disabled={disabled}
  >
    <Text
      fontSize={1}
      fontWeight='bold'
      color='white'
      m={0}
      style={{ textTransform: 'uppercase' }}
    >
      {children}
    </Text>
  </Box>
)
