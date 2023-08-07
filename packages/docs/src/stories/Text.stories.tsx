import type { StoryObj, Meta } from '@storybook/react'
import { Text, TextProps } from '@marcos-roberto-dev/react'

export default {
  title: 'Typography/Text',
  component: Text,
  args: {
    children:
      'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Esse, ab quod. Placeat facilis voluptatibus, ducimus, sint aperiam mollitia omnis quis rerum necessitatibus odit excepturi sit! Sed quisquam laborum mollitia quaerat.',
  },
} as Meta<TextProps>

export const Primary: StoryObj<TextProps> = {}

export const Strong: StoryObj<TextProps> = {
  args: {
    as: 'strong',
    children: 'Strong text',
  },
}
