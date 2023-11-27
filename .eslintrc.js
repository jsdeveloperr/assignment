module.exports = {
  // Configuration for JavaScript files
  extends: ['airbnb-base', 'plugin:prettier/recommended'],
  rules: {
    'linebreak-style': ['error', 'unix'], // changes the file to LF
    'prettier/prettier': [
      'error',
      {
        singleQuote: true,
      },
    ],
  },
  overrides: [
    // Configuration for TypeScript files
    {
      files: ['**/*.ts', '**/*.tsx'],
      parser: '@typescript-eslint/parser',
      plugins: ['react', '@typescript-eslint', 'unused-imports'],
      extends: [
        'eslint:recommended',
        'plugin:@typescript-eslint/recommended',
        'plugin:prettier/recommended',
        'airbnb-typescript',
        'plugin:import/recommended',
      ],
      parserOptions: {
        project: './tsconfig.json',
      },
      rules: {
        'linebreak-style': ['error', 'unix'], // changes the file to LF
        'prettier/prettier': [
          'error',
          {
            singleQuote: true,
          },
        ],
        'react/destructuring-assignment': 'off', // Vscode doesn't support automatically destructuring, it's a pain to add a new variable
        'jsx-a11y/anchor-is-valid': 'off', // Next.js use his own internal link system
        'react/require-default-props': 'off', // Allow non-defined react props as undefined
        'react/jsx-props-no-spreading': 'off', // _app.tsx uses spread operator and also, react-hook-form
        'react-hooks/exhaustive-deps': 'off', // Incorrectly report needed dependency with Next.js router
        'import/order': [
          'error',
          {
            groups: ['builtin', 'external', 'internal'],
            pathGroups: [
              {
                pattern: 'react',
                group: 'external',
                position: 'before',
              },
            ],
            pathGroupsExcludedImportTypes: ['react'],
            'newlines-between': 'always',
            alphabetize: {
              order: 'asc',
              caseInsensitive: true,
            },
          },
        ],
        '@typescript-eslint/comma-dangle': 'off', // Avoid conflict rule between Eslint and Prettier
        'import/prefer-default-export': 'off', // Named export is easier to refactor automatically
        '@typescript-eslint/no-unused-vars': 'off',
        '@typescript-eslint/no-explicit-any': 'off',
        'unused-imports/no-unused-imports': 'error',
        'unused-imports/no-unused-vars': ['error', { argsIgnorePattern: '^_' }],
      },
    },
  ],
};
