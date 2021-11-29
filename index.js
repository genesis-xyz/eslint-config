'use strict';

module.exports = {
  extends: [
    'airbnb',
    'plugin:@typescript-eslint/recommended',
    'plugin:prettier/recommended',
  ],
  plugins: ['react-hooks'],
  settings: {
    'import/resolver': {
      node: {
        extensions: ['.js', '.jsx', '.ts', '.tsx'],
      },
    },
  },
  rules: {
    '@typescript-eslint/no-shadow': ['error'],
    '@typescript-eslint/no-use-before-define': 0,
    '@typescript-eslint/no-var-requires': 0,
    'import/extensions': 0,
    'import/no-extraneous-dependencies': 'warn',
    'jsx-a11y/anchor-is-valid': 0,
    'lines-between-class-members': ['error', 'always', { exceptAfterSingleLine: true }],
    'max-len': 0, // Handled by prettier
    'no-shadow': 'off', // This rule incorrectly reports ts enums as shadowed, use the version from @typescript-eslint instead
    'no-use-before-define': 0,
    'react-hooks/exhaustive-deps': 'error',
    'react-hooks/rules-of-hooks': 'error',
    'react/function-component-definition': ['error', { namedComponents: 'function-declaration', unnamedComponents: 'arrow-function' }],
    'react/jsx-curly-newline': 0,
    'react/jsx-filename-extension': [1, { extensions: ['.tsx', '.jsx'] }],
    'react/jsx-one-expression-per-line': 0,
    'react/jsx-props-no-spreading': 'warn',
    'react/no-unescaped-entities': 0, // N/A to React Native
    'react/prop-types': [1, { skipUndeclared: true }],
    'spaced-comment': ['error', 'always', { exceptions: ['-', '*', '='] }],

    // Prettier
    'prettier/prettier': [
      'error',
      {
        printWidth: 80,
        semi: true,
        singleQuote: true,
        trailingComma: 'es5',
      },
    ],
  },
  env: {
    browser: true,
    node: true,
  },
};
