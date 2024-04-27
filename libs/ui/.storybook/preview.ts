import type { Preview } from '@storybook/react';
// import globalTheme from '../../../globalTheme';

const preview: Preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },

    
  },
};

export default preview;
