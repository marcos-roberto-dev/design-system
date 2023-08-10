import type { StoryObj, Meta } from '@storybook/react'
import { Box, BoxProps, Text } from '@marcos-roberto-dev/react'

export default {
  title: 'Surfaces/Box',
  component: Box,
  args: {
    children: <Text>Testando o elemento Box</Text>,
  },
  tags: ['autodocs'],
} as Meta<BoxProps>

export const Primary: StoryObj<BoxProps> = {}
