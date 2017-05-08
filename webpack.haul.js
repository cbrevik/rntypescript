/**
 * This is Webpack config you need in order to get
 * Typescript up and running
 */
module.exports = ({ platform }, { module }) => ({
  // We have two files, index.ios.tsx and index.android.tsx
  entry: `./index.${platform}.tsx`,
  // We extend default loaders by prepending `ts-loader`
  module: {
    ...module,
    rules: [
      {
        test: /\.tsx?$/,
        loader: 'ts-loader'
      },
      ...module.rules,
    ]
  },
});