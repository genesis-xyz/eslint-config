"use strict";

module.exports = {
  extends: [
    'airbnb',
    'plugin:prettier/recommended',
  ],
  plugins: ['react-hooks'],
  settings: {
    'import/resolver': {
      node: {
        extensions: ['.js', '.jsx'],
      },
    },
  },
  rules: {
    'import/extensions': 0,
    'import/no-extraneous-dependencies': 'warn',
    'jsx-a11y/anchor-is-valid': 0,
    'max-len': 0, // Handled by prettier
    'no-use-before-define': 0,
    'react-hooks/exhaustive-deps': 'error',
    'react-hooks/rules-of-hooks': 'error',
    'react/jsx-curly-newline': 0,
    'react/jsx-filename-extension': 0,
    'react/jsx-one-expression-per-line': 0,
    'react/jsx-props-no-spreading': 'warn',
    'react/no-unescaped-entities': 0, // N/A to React Native
    'react/prop-types': [1, { skipUndeclared: true }],
    'spaced-comment': ['error', 'always', { exceptions: ['-', '*', '='] }],

    // Prettier
    'prettier/prettier': [
      'error',
      {
        printWidth: 120,
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
