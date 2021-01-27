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
    py={10}
    px={20}
    borderRadius={4}
    border='none'
    disabled={disabled}
    m={0}
    {...other}
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
