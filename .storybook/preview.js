/** @type { import('@storybook/react').Preview } */

import { PrismLight as SyntaxHighlighter } from 'react-syntax-highlighter';
import scss from 'react-syntax-highlighter/dist/esm/languages/prism/scss';
import theme from './theme';
import './storybook-global.scss';

SyntaxHighlighter.registerLanguage('scss', scss);

export const parameters = {
  viewMode: 'docs',
  docs: {
    theme,
  },
  chromatic: { disableSnapshot: true },
  controls: { sort: 'alpha' },
};

const preview = {
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
