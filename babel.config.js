module.exports = {
  presets: ['module:metro-react-native-babel-preset'],
  plugins: [
    [
      'module-resolver',
      {
        root: ['./src'],
        extensions: ['.tsx'],
        alias: {
          '@containers': './src/containers',
          '@containers/*': './src/containers/*',
          '@common': './src/common',
          '@helper': './src/helper',
        },
      },
    ],
  ],
};
