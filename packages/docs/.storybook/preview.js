/** @type { import('@storybook/react').Preview } */

import {themes} from "@storybook/theming"
const preview = {
  parameters: {
    actions: { argTypesRegex: '^on.*' },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/,
      },
      expanded: true
    },
    docs: {
      theme: themes.dark
    },
    backgrounds: {
      default: 'dark'
    }
  },
};

export default preview;
