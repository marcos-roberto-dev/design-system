import { ComponentProps } from 'react'
import { styled } from './styles'

export const Button = styled('button', {
  fontFamily: '$default',
  background: '$ignite300',
  borderRadius: '$sm',

  fontWeight: '$bold',
  color: '$white',
  border: 0,

  variants: {
    size: {
      sm: {
        padding: '$2 $4',
        fontSize: 14,
      },
      big: {
        padding: '$3 $6',
        fontSize: 16,
      },
    },
  },
  defaultVariants: {
    size: 'sm',
  },
})

export type ButtonProps = ComponentProps<typeof Button>
