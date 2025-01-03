/** @type { import('@storybook/react-webpack5').StorybookConfig } */
const config = {
  stories: [
    '../stories/**/*.mdx',
    '../stories/**/*.stories.@(js|jsx|mjs|ts|tsx)',
  ],
  addons: [
    '@storybook/addon-webpack5-compiler-swc',
    '@storybook/addon-onboarding',
    '@storybook/addon-essentials',
    '@chromatic-com/storybook',
    '@storybook/addon-interactions',
    {
      name: '@storybook/preset-scss',
      options: {
        rule: {
          sideEffects: true,
        },
        cssLoaderOptions: {
          modules: {
            auto: true,
          },
        },
      },
    },
  ],
  features: {
    storyStoreV7: true,
  },
  framework: {
    name: '@storybook/react-webpack5',
    options: {},
  },
};
export default config;
