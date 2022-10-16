module.exports = {
    env: {
      browser: true,
      es2021: true,
    },
    extends: [
      'plugin:react/recommended',
      'airbnb',
      'airbnb-typescript',
    ],
    parser: '@typescript-eslint/parser',
    parserOptions: {
      ecmaFeatures: {
        jsx: true,
      },
      ecmaVersion: 'latest',
      sourceType: 'module',
      project: ["tsconfig.json"] ,
    },
    plugins: [
      'react',
      '@typescript-eslint',
    ],
    rules: {
      "import/prefer-default-export": 0,
      "@typescript-eslint/no-unused-vars": "warn",
      "import/no-extraneous-dependencies": "off",
      "no-nested-ternary": "off",
      "react/require-default-props": "off",
    },
  };