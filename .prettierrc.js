module.exports = {
  proseWrap: 'never',
  singleQuote: true,
  overrides: [
    {
      files: ['*.js', '*.json', '*.mjs'],
      options: {
        tabWidth: 2,
      },
    },
    {
      files: ['*.ts', '*.tsx'],
      options: {
        tabWidth: 2,
      },
    },
  ],
};
