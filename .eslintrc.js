module.exports = {
  env: {
    browser: true,
    es2021: true
  },
  extends: [
    'plugin:react/recommended',
    'standard-with-typescript',
    'prettier'
  ],
  overrides: [
    {  files: ['*.ts', '*.tsx'],
    parserOptions: {
      project: ['./tsconfig.json'], 
    }, }
  ],
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module'
  },
  plugins: [
    'react'
  ],
  rules: {
    "@typescript-eslint/strict-boolean-expressions": "off",
    '@typescript-eslint/no-misused-promises':'off',
    "@typescript-eslint/no-floating-promises":'off',
    '@typescript-eslint/explicit-function-return-type':'off'
  }
}
