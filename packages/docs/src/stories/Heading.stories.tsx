import type { StoryObj, Meta } from '@storybook/react'
import { Heading, HeadingProps } from '@marcos-roberto-dev/react'

export default {
  title: 'Typography/Heading',
  component: Heading,
  args: {
    children: 'Custom Title',
  },
  tags: ['autodocs'],
} as Meta<HeadingProps>

export const Primary: StoryObj<HeadingProps> = {}

export const CustomTag: StoryObj<HeadingProps> = {
  args: {
    as: 'h1',
    children: 'Strong Heading',
  },
  parameters: {
    docs: {
      description: {
        story:
          'Por padrão o heading sempre sera um `h2`, mas podemos alterar isso com a propriedade `as`.',
      },
    },
  },
}
