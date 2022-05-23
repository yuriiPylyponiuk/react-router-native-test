module.exports = {
  extends: [
    'react-app',
    'react-app/jest',
    '@react-native-community',
    'prettier',
    'eslint:recommended',
  ],
  globals: {
    Buffer: true,
    document: true,
    JSX: true,
    NodeJS: true,
    SVGSVGElement: true,
    Tranlation: true,
    translate: true,
  },
  parser: '@typescript-eslint/parser',
  plugins: ['@typescript-eslint'],
  root: true,
  rules: {
    '@typescript-eslint/no-unused-vars': 'error',
    'arrow-body-style': ['error', 'as-needed'],
    'no-console': ['error', { allow: ['debug', 'error', 'info', 'warn'] }],
    'no-unused-vars': 'error',
    'object-shorthand': ['error', 'always'],
    'quotes': [
      'error',
      'single',
      { allowTemplateLiterals: true, avoidEscape: true },
    ],
    'quote-props': ['warn', 'consistent-as-needed'],
    'react-hooks/exhaustive-deps': 'warn',
    'react/jsx-curly-brace-presence': ['error', 'always'],
    'react/self-closing-comp': ['error', { component: true, html: true }],
    'max-len': [
      'error',
      { code: 80, ignoreRegExpLiterals: true, ignoreStrings: true },
    ],
  },
  overrides: [
    {
      files: ['*.json', '.prettierrc', '.eslintrc'],
      rules: {
        'quote-props': ['error', 'always'],
        'quotes': ['error', 'double'],
      },
    },
  ],
}
