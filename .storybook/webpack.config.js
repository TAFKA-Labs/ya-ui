const path = require('path')

module.exports = ({ config }) => {
  config.resolve.alias = {
    ...config.resolve.alias,
    '@types': path.resolve(__dirname, '../src/types'),
    '@styling': path.resolve(__dirname, '../src/styling'),
    '@components': path.resolve(__dirname, '../src/components'),
  }
  return config
}

// config.resolve.alias = {
//   '@types': path.resolve(__dirname, '../src/types'),
//   '@styling': path.resolve(__dirname, '../src/styling'),
//   '@components': path.resolve(__dirname, '../src/components'),
// }

// config.module.rules.push({
//   test: /\.(ts|tsx)$/,
//   use: [
//     {
//       loader: require.resolve('awesome-typescript-loader'),
//     },
//   ],
// })
// config.resolve.extensions.push('.ts', '.tsx')
