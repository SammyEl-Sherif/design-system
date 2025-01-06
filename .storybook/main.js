/** @type { import('@storybook/react-webpack5').StorybookConfig } */
const config = {
  stories: [
    '../src/**/*.mdx',
    '../src/components/**/*.stories.@(js|jsx|mjs|ts|tsx)',
    '../src/**/*.stories.@(js|jsx|mjs|ts|tsx)',
  ],

  swc: () => ({
    jsc: {
      transform: {
        react: {
          runtime: 'automatic',
        },
      },
    },
  }),

  addons: [
    '@chromatic-com/storybook',
    '@storybook/addon-webpack5-compiler-swc',
    '@storybook/addon-onboarding',
    '@storybook/addon-essentials',
    '@storybook/addon-interactions',
    '@storybook/addon-styling-webpack',
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
    '@storybook/addon-mdx-gfm'
  ],

  features: {
    storyStoreV7: true,
  },

  framework: {
    name: '@storybook/react-webpack5',
    options: {}
  },

  staticDirs: ['./public'],

  core: {
    options: {
      lazyCompilation: true,
      fsCacne: true,
    }
  },

  webpackFinal: async (config) => {
    config.module.rules.push({
      test: /\.m?js$/,
      use: {
        loader: 'babel-loader',
        options: {
          presets: ['@babel/preset-env'],
        },
      },
    });
    return config;
  },

  env: (config) => ({
    ...config,
  }),

  docs: {},

  typescript: {
    reactDocgen: 'react-docgen-typescript'
  }
};
export default config;
