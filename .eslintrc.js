module.exports = {
  root: true,
  env: {
    node: true
  },
  extends: [
    'plugin:vue/vue3-essential',
    '@vue/standard'
  ],
  parserOptions: {
    parser: '@babel/eslint-parser'
  },
  rules: {
    'no-console': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    'space-before-function-paren': 0,
    indent: [2, 2, { SwitchCase: 2 }],
    'no-unused-vars': [1, {
      args: 'none'
    }],
    'vue/multi-word-component-names': 0,
    'eol-last': 0,
    'vue/no-setup-props-destructure': 0,
    semi: 0,
    'multiline-ternary': 0,
    'operator-linebreak': 0,
    'no-unneeded-ternary': 0,
    'quote-props': 0,
    quotes: 0,
    'no-useless-escape': 0
  }
}
