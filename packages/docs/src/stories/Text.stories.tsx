import type { StoryObj, Meta } from '@storybook/react'
import { Text, TextProps } from '@codeverseon/react'

export default {
  title: 'Typography/Text',
  component: Text,
  args: {
    size: 'md',
    children:
      'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Esse, ab quod. Placeat facilis voluptatibus, ducimus, sint aperiam mollitia omnis quis rerum necessitatibus odit excepturi sit! Sed quisquam laborum mollitia quaerat.',
  },
  argTypes: {
    size: {
      options: [
        'xxs',
        'xs',
        'sm',
        'md',
        'lg',
        'xl',
        '2xl',
        '4xl',
        '5xl',
        '6xl',
        '7xl',
        '8xl',
        '9xl',
      ],
      control: {
        type: 'select',
      },
    },
  },
  tags: ['autodocs'],
} as Meta<TextProps>

export const Primary: StoryObj<TextProps> = {}

export const Strong: StoryObj<TextProps> = {
  args: {
    as: 'strong',
    children: 'Strong text',
  },
}
