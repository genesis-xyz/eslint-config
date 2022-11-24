'use strict';

module.exports = {
  extends: [
    'airbnb',
    'plugin:@typescript-eslint/recommended',
    'plugin:prettier/recommended',
  ],
  plugins: ['react-hooks', 'import'],
  settings: {
    'import/parsers': {
      '@typescript-eslint/parser': [".ts", ".tsx"],
    },
    'import/resolver': {
      node: {
        extensions: ['.js', '.jsx', '.ts', '.tsx'],
      },
      typescript: {
        alwaysTryTypes: true,
      },
    },
  },
  rules: {
    '@typescript-eslint/no-shadow': ['error'],
    '@typescript-eslint/no-use-before-define': 0,
    '@typescript-eslint/no-var-requires': 0,
    'class-methods-use-this': 0, // Classes are used so sparingly that cases where this rule will error are intentional
    'import/extensions': 0,
    'import/no-extraneous-dependencies': 'warn',
    'import/prefer-default-export': 0, // Allow single named exports to exported from files for better barrel re-exporting
    'jsx-a11y/anchor-is-valid': 0,
    'lines-between-class-members': ['error', 'always', { exceptAfterSingleLine: true }],
    'max-classes-per-file': 0, // Classes are used so sparingly that cases where this rule will error are intentional
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
    'react/jsx-props-no-spreading': 0, // Allow JSX props spreading
    'react/jsx-sort-props': 1, // Sort props alphabetically
    'react/no-unescaped-entities': 0, // N/A to React Native
    'react/prop-types': [1, { skipUndeclared: true }],
    'react/require-default-props': 0, // This rule causes false-positive errors for TS function components
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
