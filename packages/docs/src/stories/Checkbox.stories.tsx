import type { StoryObj, Meta } from '@storybook/react'
import { Box, Checkbox, CheckboxProps, Text } from '@marcos-roberto-dev/react'

export default {
  title: 'Form/Checkbox',
  component: Checkbox,
  decorators: [
    (Story) => {
      return (
        <Box
          as="label"
          css={{
            display: 'flex',
            flexDirection: 'row',
            alignItems: 'center',
            gap: '$2',
          }}
        >
          <Story />
          <Text>Accept terms of use</Text>
        </Box>
      )
    },
  ],
  tags: ['autodocs'],
} as Meta<CheckboxProps>

export const Primary: StoryObj<CheckboxProps> = {}
