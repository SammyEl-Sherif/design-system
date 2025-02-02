/** @type {import('eslint').Linter.Config} */
export default {
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:react/recommended',
    'plugin:react/jsx-runtime',
    'plugin:react-hooks/recommended',
  ],
  plugins: ['@typescript-eslint', 'react'],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
    ecmaFeatures: {
      jsx: true,
    },
  },
  settings: {
    polymorphicPropName: 'as',
    components: {
      Button: 'button',
      Page: 'article',
      Header: 'header',
      Box: "div",
    },
  },
  overrides: [
    {
      files: ['*.jsx', '*.tsx'],
    },
    {
      files: ['*.jsx', '*.tsx'],
      extends: ['plugin:mdx/recommended'],
      rules: {
        'react/prop-types': [0],
        'react/no-unescaped-entities': 0,
      },
    },
  ],
  rules: {
    'indent': ['error', 4],
    'no-restricted-imports': [
      'error',
      {
        patterns: [
          {
            group: ['**/*/tokens/design-tokens.json'],
            importNames: ['default'],
            message:
              "Importing tokens from the default export will bloat consumers' bundles. Import tokens and token groups individually.",
          },
          {
            group: ['**/*/lib'],
            message:
              'Importing tokens from the package entrypoint causes circular dependencies. Import from the module directly.',
          },
        ],
      },
    ],
    '@typescript-eslint/no-var-requires': 0,
    '@typescript-eslint/no-unused-vars': [
      'error',
      { varsIgnorePattern: '^_' },
    ],
    'react-hooks/exhaustive-deps': [
      'warn',
      { additionalHooks: '(useIsomorphicLayoutEffect)' },
    ],
  },
};