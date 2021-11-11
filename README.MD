# @genesis-xyz/eslint-config
Genesis's eslint + prettier setup.

* * *

# Typescript

## Installation
```
yarn add @genesis-xyz/eslint-config @typescript-eslint/parser eslint prettier typescript --dev
touch .eslintrc.js
```

### `.eslintrc.js`
```javascript
module.exports = {
  parser: '@typescript-eslint/parser',
  extends: ['@genesis-xyz'],
}
```
* * *

# Javascript

## Installation
```
yarn add @genesis-xyz/eslint-config eslint prettier --dev
touch .eslintrc.js
```

### `.eslintrc.js`
```javascript
module.exports = {
  extends: ['@genesis-xyz/js'],
}
```
