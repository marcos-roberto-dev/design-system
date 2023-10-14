import type { StoryObj, Meta } from '@storybook/react'
import { Box, BoxProps, Text } from '@codeverseon/react'

export default {
  title: 'Surfaces/Box',
  component: Box,
  args: {
    children: <Text>Testando o elemento Box</Text>,
  },
  tags: ['autodocs'],
} as Meta<BoxProps>

export const Primary: StoryObj<BoxProps> = {}
