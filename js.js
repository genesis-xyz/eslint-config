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
    'import/prefer-default-export': 0, // Allow single named exports to exported from files for better barrel re-exporting
    'jsx-a11y/anchor-is-valid': 0,
    'lines-between-class-members': ['error', 'always', { exceptAfterSingleLine: true }],
    'max-classes-per-file': 0, // Classes are used so sparingly that cases where this rule will error are intentional
    'max-len': 0, // Handled by prettier
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
    'spaced-comment': ['error', 'always', { exceptions: ['-', '*', '=', '/'] }],

    // Prettier
    'prettier/prettier': [
      'error',
      {
        endOfLine: 'auto',
        pluginSearchDirs: false,
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
