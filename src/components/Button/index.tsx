import { FC, ReactNode } from 'react'
import { Box, Text } from 'component-library-tsdx-example'

type ButtonProps = {
  appearance?: 'default' | 'outline' | 'danger'
  children?: ReactNode
  onClick?: Function
  disabled?: boolean
}

export const Button: FC<ButtonProps> = ({
  appearance = 'default',
  children,
  onClick,
  disabled,
  ...other
}) => {
  const styles = {
    color: {
      default: 'background',
      outline: 'secondary',
      danger: 'background',
    },
    background: {
      default: 'secondary',
      outline: 'background',
      danger:
        'linear-gradient(90deg, rgb(237, 98, 146) 25%, rgb(237, 87, 96) 87.5%)',
    },
  }

  const isDanger = appearance === 'danger'

  return (
    <Box
      as='button'
      display='flex'
      justifyContent='center'
      alignItems='center'
      onClick={onClick}
      backgroundColor={styles.background[appearance]}
      background={isDanger ? styles.background[appearance] : null}
      border={isDanger ? 'none' : '1px solid'}
      borderColor='secondary'
      borderRadius={7}
      m={0}
      py='0.25rem'
      px='1rem'
      disabled={disabled}
      style={{ cursor: 'pointer' }}
      {...other}
    >
      <Text fontSize={2} color={styles.color[appearance]} m={0}>
        {children}
      </Text>
    </Box>
  )
}
