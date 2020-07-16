module.exports = {
  compact: true,
  presets: [
    [
      '@babel/preset-env',
      {
        useBuiltIns: 'usage',
        modules: false,
        corejs: '3.0.0',
      },
    ],
  ],
  // These seem to be necessary for useBuiltIns: 'usage' to work properly
  sourceType: 'unambiguous',
  ignore: [/[/\\]core-js/, /@babel[/\\]runtime/],

  plugins: [
    '@babel/plugin-transform-runtime',
  ],
}

