import type { Preview } from '@storybook/react';

import { withThemeByClassName } from '@storybook/addon-themes';

/* TODO: update import to your tailwind styles file. If you're using Angular, inject this through your angular.json config instead */
import '../src/app/global.css';

const preview: Preview = {
  parameters: {
    actions: {},
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/,
      },
    },
  },

  decorators: [
    // Adds theme switching support.
    // NOTE: requires setting "darkMode" to "class" in your tailwind config
    withThemeByClassName({
      themes: {
        light: 'light',
        dark: 'dark',
      },
      defaultTheme: 'light',
    }),
  ],
};

export default preview;
