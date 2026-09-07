export default [
  {
    ignores: ['dist', 'node_modules', '.commandcode'],
  },
  {
    files: ['src/**/*.ts', 'src/**/*.tsx'],
    rules: {
      'no-unused-vars': 'warn',
    },
  },
];
