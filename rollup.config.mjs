import path from 'path';
import commonjs from '@rollup/plugin-commonjs';
import copy from 'rollup-plugin-copy';
import nodeResolve from '@rollup/plugin-node-resolve';
import postcss from 'rollup-plugin-postcss';
import typescript from '@rollup/plugin-typescript';
import { babel } from '@rollup/plugin-babel';
import strip from '@rollup/plugin-strip';
import json from '@rollup/plugin-json';
import preserveDirectives from 'rollup-plugin-preserve-directives';
import maxmin from 'maxmin';
import pkg from './package.json' with { type: 'json' };

const external = [
  ...Object.keys({
    ...pkg.dependencies,
  }),
  'react/jsx-runtime',
];

const input = './src/lib.ts';

const basePlugins = [
  nodeResolve(),
  commonjs(),
  json(),
  babel({
    babelHelpers: 'bundled',
    exclude: 'node_modules/**',
  }),
];
/**
 * @type {import('rollup').RollupOptions}
 */
const devConfig = {
  external,
  input,
  output: [
    {
      file: pkg.exports['.'].development.require,
      sourcemap: true,
      format: 'cjs',
    },
    {
      dir: path.dirname(pkg.exports['.'].development.import),
      sourcemap: true,
      format: 'esm',
      preserveModules: true,
      preserveModulesRoot: 'src',
    },
  ],
  plugins: basePlugins.concat([
    typescript({ declaration: false }),
    postcss({ extract: 'styles.css' }),
    preserveDirectives({ surpressPreserveModulesWarning: true }),
  ]),
  onwarn(warning, warn) {
    if (
      warning.code === 'MODULE_LEVEL_DIRECTIVE' &&
      warning.message.includes('use client')
    ) {
      return;
    }
    warn(warning);
  },
};

const prodConfig = {
  external,
  input,
  output: [
    {
      file: pkg.exports['.'].production.require,
      sourcemap: true,
      format: 'cjs',
    },
    {
      dir: path.dirname(pkg.exports['.'].production.import),
      sourcemap: true,
      format: 'esm',
      preserveModules: true,
      preserveModulesRoot: 'src',
    },
  ],
  plugins: basePlugins.concat([
    strip({
      include: 'src/**/*.ts?(x)',
      functions: ['console.*', 'assert.*'],
    }),
    typescript({
      declaration: true,
      declarationDir: path.dirname(pkg.exports['.'].production.import),
      exclude: [
        'src/**/*.stories.tsx',
        '.storybook/**',
        'docs/**',
        'tokens/**',
      ],
    }),
    postcss({ extract: 'styles.css' }),
    typescript({ declaration: false }),
    preserveDirectives({ surpressPreserveModulesWarning: true }),
    copy({
      targets: [
        {
          dest: 'dist',
          src: './tokens/design-tokens.cjs',
        },
        {
          dest: 'dist',
          src: './tokens/design-tokens.js',
        },
        {
          dest: 'dist',
          src: './tokens/design-tokens.d.ts',
        },
        {
          dest: 'dist',
          src: './src/styles/_design-tokens.scss',
        },
      ],
    }),
  ]),
  onwarn(warning, warn) {
    if (
      warning.code === 'MODULE_LEVEL_DIRECTIVE' &&
      warning.message.includes('use client')
    ) {
      return;
    }
    warn(warning);
  },
};

export default [devConfig, prodConfig];
