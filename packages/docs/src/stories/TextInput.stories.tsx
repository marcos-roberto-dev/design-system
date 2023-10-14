import type { StoryObj, Meta } from '@storybook/react'
import { TextInput, TextInputProps } from '@codeverseon/react'

export default {
  title: 'Form/TextInput',
  component: TextInput,
  args: {},
  tags: ['autodocs'],
} as Meta<TextInputProps>

export const Primary: StoryObj<TextInputProps> = {
  args: {
    placeholder: 'Type your name',
  },
}

export const WithPrefix: StoryObj<TextInputProps> = {
  args: {
    prefix: 'cal.com/',
    placeholder: 'your-username'
  },
}

export const Disabled: StoryObj<TextInputProps> = {
  args: {
    disabled: true,
  },
}
