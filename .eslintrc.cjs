/* eslint-env node */
require('@rushstack/eslint-patch/modern-module-resolution');

module.exports = {
  root: true,
  extends: [
    'plugin:vue/vue3-essential',
    'eslint:recommended',
    '@vue/eslint-config-typescript',
    '@vue/eslint-config-prettier',
  ],
  parserOptions: {
    ecmaVersion: 'latest',
  },
  rules: {
    // Override our default settings just for this directory
    semi: ['error', 'never'],
    quotes: ['error', 'single', { avoidEscape: true }],
    'vue/multi-word-component-names': 'off',
  },
}
