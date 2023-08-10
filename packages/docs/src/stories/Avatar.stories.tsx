import type { StoryObj, Meta } from '@storybook/react'
import { Avatar, AvatarProps } from '@marcos-roberto-dev/react'

export default {
  title: 'Data display/Avatar',
  component: Avatar,
  args: {
    src: 'https://github.com/marcos-roberto-dev.png',
    alt: 'Marcos Roberto',
  },
  tags: ['autodocs'],
} as Meta<AvatarProps>

export const Primary: StoryObj<AvatarProps> = {}

export const Fallback: StoryObj<AvatarProps> = {
  args: {
    src: undefined,
  },
}
