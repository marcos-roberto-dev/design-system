import type { StoryObj, Meta } from '@storybook/react'
import { Avatar, AvatarProps } from '@codeverseon/react'

export default {
  title: 'Data display/Avatar',
  component: Avatar,
  args: {
    src: 'https://github.com/marcos-roberto-dev.png',
    alt: 'Marcos Roberto',
  },
  argTypes: {
    src: {
      control: 'text',
    },
  },
  tags: ['autodocs'],
} as Meta<AvatarProps>

export const Primary: StoryObj<AvatarProps> = {}

export const Fallback: StoryObj<AvatarProps> = {
  args: {
    src: undefined,
  },
}
