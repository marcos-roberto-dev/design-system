import type { StoryObj, Meta } from '@storybook/react'
import { Box, Text, TextArea, TextAreaProps } from '@codeverseon/react'

export default {
  title: 'Form/Text Area',
  component: TextArea,
  args: {
    disabled: false,
    placeholder: 'Add any observation...',
  },
  decorators: [
    (Story) => {
      return (
        <Box
          as="label"
          css={{ display: 'flex', flexDirection: 'column', gap: '$2' }}
        >
          <Text>Observation</Text>
          <Story />
        </Box>
      )
    },
  ],
  tags: ['autodocs'],
} as Meta<TextAreaProps>

export const Primary: StoryObj<TextAreaProps> = {}
