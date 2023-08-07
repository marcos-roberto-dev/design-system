import type { StoryObj, Meta } from '@storybook/react'
import { Box, BoxProps } from '@marcos-roberto-dev/react'

export default {
  title: 'Surfaces/Box',
  component: Box,
  args: {
    children: (
      <>
        <span>Testando o elemento Box</span>
      </>
    ),
  },
} as Meta<BoxProps>

export const Primart: StoryObj<BoxProps> = {}
