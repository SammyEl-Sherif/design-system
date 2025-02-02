import { PrismLight as SyntaxHighlighter } from 'react-syntax-highlighter';
import scss from 'react-syntax-highlighter/dist/esm/languages/prism/scss';
import theme from './theme';
import './storybook-global.scss';
import "../src/styles/fonts.css";

SyntaxHighlighter.registerLanguage('scss', scss);

export const parameters = {
  viewMode: 'docs',
  docs: {
    theme,
    source: { excludeDecorators: true, state: 'open' },
  },
  chromatic: { disableSnapshot: true },
  controls: { sort: 'alpha' },
};

export const tags = ['autodocs'];
