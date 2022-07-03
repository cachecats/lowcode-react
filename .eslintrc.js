module.exports = {
  env: {
    browser: true,
    es2015: true
  },
  extends: [
    'plugin:react/recommended',
    'plugin:react-hooks/recommended',
    "react-app",
    "plugin:prettier/recommended"
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaFeatures: {
      jsx: true
    },
    ecmaVersion: 12,
    sourceType: 'module'
  },
  plugins: ['react', '@typescript-eslint', 'react-hooks'],
  ignorePatterns: ['.eslintrc.js'],
  rules: {
    'react/display-name': 0,
    'react/prop-types': 0,
    '@typescript-eslint/naming-convention': [0],
    '@typescript-eslint/no-namespace': 'off'
  }
};
