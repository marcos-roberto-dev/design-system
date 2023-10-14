import type { StoryObj, Meta } from '@storybook/react'
import { Heading, HeadingProps } from '@codeverseon/react'

export default {
  title: 'Typography/Heading',
  component: Heading,
  args: {
    children: 'Custom Title',
    size: 'md',
  },
  argTypes: {
    size: {
      options: ['sm', 'md', 'lg', '2xl', '4xl', '5xl', '6xl'],
      control: {
        type: 'select',
      },
    },
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
