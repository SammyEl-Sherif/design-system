const addons = [
  '@chromatic-com/storybook',
  '@storybook/addon-webpack5-compiler-swc',
  '@storybook/addon-onboarding',
  '@storybook/addon-essentials',
  '@storybook/addon-interactions',
  '@storybook/addon-styling-webpack',
  '@storybook/react-webpack5',
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
  '@storybook/addon-mdx-gfm',
];

module.exports = {
  stories: [
    '../src/**/*.mdx',
    '../src/components/**/*.stories.@(js|jsx|mjs|ts|tsx)',
    '../src/**/*.stories.@(js|jsx|mjs|ts|tsx)',
  ],
  addons,
  framework: {
    name: '@storybook/react-webpack5',

    options: {
      builder: {
        lazyCompilation: true,
        fsCache: true,
      },
    },
  },
  features: {
    storyStoreV7: true,
  },
  core: {
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
  },
  staticDirs: ['./public'],
  swc: () => ({
    jsc: {
      transform: {
        react: {
          runtime: 'automatic',
        },
      },
    },
  }),

  env: (config) => ({
    ...config,
  }),

  docs: {},

  typescript: {
    reactDocgen: 'react-docgen-typescript',
  },
};
