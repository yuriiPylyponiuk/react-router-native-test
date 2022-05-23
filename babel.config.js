module.exports = {
  presets: ['react-app', 'module:metro-react-native-babel-preset'],
  plugins: [
    'babel-plugin-styled-components',
    [
      'babel-plugin-root-import',
      {
        paths: [
          {
            rootPathPrefix: '~',
            rootPathSuffix: 'src',
          },
          {
            rootPathPrefix: '@components',
            rootPathSuffix: 'src/components',
          },
          {
            rootPathPrefix: '@rizna-components',
            rootPathSuffix: 'rizna-components',
          },
        ],
      },
    ],
  ],
};
