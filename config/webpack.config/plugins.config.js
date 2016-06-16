import webpack from 'webpack';
import HtmlWebpackPlugin from 'html-webpack-plugin';

const DEV = process.env['BUILD_ENV'] === 'development';

const chunks = DEV ? ['vendor', 'app'] : ['common', 'vendor', 'app'];

const base = [
  new HtmlWebpackPlugin({
    template: './src/webpack.html',
    inject: 'body',
    chunksSortMode: (a, b) =>
      chunks.indexOf(a.names[0]) < chunks.indexOf(b.names[0]) ? -1 : 1
  })
];

const dev = [
  new webpack.NoErrorsPlugin()
];

const prod = [
  new webpack.optimize.OccurrenceOrderPlugin(true),
  new webpack.optimize.DedupePlugin(),
  new webpack.optimize.CommonsChunkPlugin({
    name: 'common',
    filename: '[name].bundle.js'
  }),
  new webpack.optimize.AggressiveMergingPlugin()
];

export default DEV ? [...base, ...dev] : [...base, ...prod];
