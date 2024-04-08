'use strict';

// Fix eslint shareable config (https://github.com/eslint/eslint/issues/3458)
require('@rushstack/eslint-patch/modern-module-resolution');

module.exports = {
  root: true,
  env: {
    browser: true,
    commonjs: true,
    es6: true,
    node: true,
  },
  parser: '@babel/eslint-parser',
  parserOptions: {
    sourceType: 'module',
    requireConfigFile: false,
    babelOptions: {
      presets: ['@babel/preset-react'],
    },
    ecmaFeatures: {
      jsx: true,
    },
  },
  settings: {
    react: {
      version: 'detect',
    },
  },
  extends: [
    'plugin:react/recommended',
    'plugin:react-hooks/recommended',
    'plugin:jsx-a11y/recommended',
  ],
  plugins: ['react', 'react-hooks', 'jsx-a11y', 'lodash'],

  rules: {
    'react-hooks/rules-of-hooks': 2,
    'react-hooks/exhaustive-deps': 2,
    'react/jsx-filename-extension': [2, { extensions: ['.tsx', '.jsx'] }],
    'lodash/import-scope': [2, 'member'],
    'react/react-in-jsx-scope': 0,
    'react/prop-types': 0,
    'react/no-unescaped-entities': 0,
    'react/display-name': 0,
    'jsx-a11y/no-autofocus': 0,
    'no-unused-vars': [
      2,
      {
        args: 'after-used',
        ignoreRestSiblings: true,
        argsIgnorePattern: '^_',
      },
    ],
    'no-unused-expressions': [
      2,
      {
        allowShortCircuit: true,
        allowTernary: true,
        allowTaggedTemplates: true,
      },
    ],
    'no-console': [2, { allow: ['error'] }],
    'max-lines': ['error', 400],
    'max-params': ['error', 2],
    'no-dupe-else-if': 2,
    'no-lonely-if': 2,
    'no-duplicate-case': 2,
    'no-else-return': [2, { allowElseIf: false }],
    'react/jsx-curly-brace-presence': 2,
    'react/no-multi-comp': [2, { ignoreStateless: true }],
    curly: 2,
    'no-extra-boolean-cast': 2,
    eqeqeq: ['error', 'always'],
    'no-nested-ternary': 2,
    'no-unneeded-ternary': 2,
    'no-empty-pattern': 2,
    'no-useless-rename': 2,
    'prefer-const': 2,
  },

  overrides: [
    {
      files: ['**/*.ts?(x)'],
      parser: '@typescript-eslint/parser',
      parserOptions: {
        project: './tsconfig.json',
        tsconfigRootDir: './',
        ecmaVersion: 2018,
        sourceType: 'module',
        ecmaFeatures: {
          jsx: true,
        },

        warnOnUnsupportedTypeScriptVersion: true,
      },
      plugins: ['@typescript-eslint'],

      rules: {
        '@typescript-eslint/ban-ts-comment': 2,
        '@typescript-eslint/no-non-null-assertion': 2,
        '@typescript-eslint/no-unnecessary-type-assertion': 2,
        '@typescript-eslint/array-type': [2, { default: 'array' }],
        'no-unused-vars': 0,
        '@typescript-eslint/no-unused-vars': [
          2,
          {
            args: 'after-used',
            ignoreRestSiblings: true,
            argsIgnorePattern: '^_',
          },
        ],
        'no-unused-expressions': 0,
        '@typescript-eslint/no-unused-expressions': [
          2,
          {
            allowShortCircuit: true,
            allowTernary: true,
            allowTaggedTemplates: true,
          },
        ],
        '@typescript-eslint/consistent-type-assertions': [
          2,
          {
            assertionStyle: 'never',
          },
        ],
      },
    },
  ],
};
