import { FC, ReactNode } from 'react'
import { Box, Text } from 'component-library-tsdx-example'

type ButtonProps = {
  children?: ReactNode
  onClick?: Function
  disabled?: boolean
}

export const Button: FC<ButtonProps> = ({
  children,
  onClick,
  disabled,
  ...other
}) => (
  <Box
    as='button'
    display='flex'
    justifyContent='center'
    alignItems='center'
    onClick={onClick}
    backgroundColor='secondary'
    py='0.25rem'
    px='1rem'
    borderRadius={7}
    border='none'
    disabled={disabled}
    m={0}
    style={{ cursor: 'pointer' }}
    {...other}
  >
    <Text fontSize={2} fontWeight='bold' color='white' m={0}>
      {children}
    </Text>
  </Box>
)
