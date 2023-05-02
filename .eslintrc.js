const { configure, presets } = require('eslint-kit')

module.exports = configure({
  presets: [
    presets.imports({
      alias: {
        root: './src',
        paths: {
          '@': './',
        },
      },
    }),
    presets.node(),
    presets.prettier({
      semi: false,
      singleQuote: true,
      tabWidth: 2,
      quoteProps: 'preserve',
    }),
    presets.typescript(),
    presets.react({
      version: 'detect',
      newJSXTransform: true,
    }),
    presets.effector({
      future: true,
    }),
  ],
})
