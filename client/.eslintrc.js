//linting run command
module.exports = {
  root: true,
  extends: '@react-native-community',
  rules: {
    quotes: [2, 'single'],
    'prettier/prettier': [
      'warn',
      {
        singleQuote: true,
        semi: true,
      },
    ],
  },
};
