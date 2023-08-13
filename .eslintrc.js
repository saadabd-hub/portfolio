module.exports = {
  env: {
    browser: true,
    es2021: true
  },
  extends: ['plugin:react/recommended', 'plugin:@next/next/recommended'],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaFeatures: {
      jsx: true
    },
    ecmaVersion: 'latest',
    sourceType: 'module'
  },
  plugins: ['react', '@typescript-eslint'],
  rules: {
    'require-jsdoc': 0,
    'react/react-in-jsx-scope': 'off',
    'quotes': [2, 'single', { avoidEscape: true }],
    'object-curly-spacing': ['error', 'always'],
    '@typescript-eslint/object-curly-spacing': ['error', 'always'],
    'max-len': 'off',
    'spaced-comment': 'off',
    'sort-imports': ['error', { ignoreCase: true, ignoreDeclarationSort: true }],
    '@typescript-eslint/no-explicit-any': 'error',
    'indent': ['error', 2],
    'comma-dangle': [
      'error',
      {
        arrays: 'never',
        objects: 'never',
        imports: 'never',
        exports: 'never',
        functions: 'never'
      }
    ],
    'react/prop-types': 'off',
    'camelcase': 'warn'
  },
  
  settings: {
    react: {
      version: 'detect'
    }
  }
};
  