module.exports = {
  parser: 'babel-eslint',
  parserOptions: {
    sourceType: 'module',
    ecmaVersion: 2015,
    ecmaFeatures: {
      experimentalObjectRestSpread: true,
      jsx: true,
    },
  },
  env: {
    node: true,
    browser: true,
    es6: true,
  },
  plugins: ['react'],
  extends: ['eslint:recommended', 'airbnb', 'prettier'],
  settings: {
    'import/resolver': {
      webpack: {
        config: 'config/webpack.config.dev.js',
      },
    },
  },
  rules: {
    'comma-dangle': ['error', 'always-multiline'],
    strict: 'error',
    'prefer-const': 'error',
    'no-unused-vars': ['error', { argsIgnorePattern: '^_' }],
    'no-var': 'error',
    'no-console': ['error'],
    'react/jsx-uses-react': 1,
    'react/jsx-uses-vars': 1,
    'react/no-unescaped-entities': 0,
    'linebreak-style': ['error', 'unix'],
    'lines-between-class-members': ['error', 'always'],
    'jsx-a11y/anchor-is-valid': [
      'error',
      {
        components: ['Link'],
        specialLink: ['to'],
      },
    ],
    'jsx-a11y/media-has-caption': 0, // We cannot create captions for user-uploaded video and audio.
    'react/jsx-key': 2,
    'react/no-array-index-key': 2,
    'no-useless-escape': 'off',
    'import/extensions': [
      'error',
      'always',
      { js: 'never', jsx: 'never', json: 'never', ts: 'never', tsx: 'never' },
    ],
  },
}
