module.exports = {
  printWidth: 100,
  semi: false,
  trailingComma: 'es5',
  singleQuote: true,
  overrides: [
    {
      files: ['*.css', '*.sass', '*.scss'],
      options: {
        singleQuote: false
      }
    }
  ]
};
