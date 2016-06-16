import path from 'path';
// import loaders from './loaders.config';
import {default as plugins} from './plugins.config';

const DEV = process.env['BUILD_ENV'] === 'development';

const context = path.resolve(__dirname, '../../');

const entry = {
  vendor: [
    'script!uglify!./dist/vendor/ts-helpers/index.js',
    'script!./dist/vendor/babel-polyfill/dist/polyfill.min.js',
    'script!uglify!./dist/vendor/reflect-metadata/Reflect.js',
    'script!./dist/vendor/zone.js/dist/zone.min.js'
  ],
  app: './dist/main.js'
};

const output = {
  path: path.resolve(context, 'build'),
  publicPath: '/',
  filename: '[name].bundle.js',
  chunkFilename: '[id].[name].js'
};

const devtool = DEV ? 'source-map' : undefined;
// export const module = {loaders};
const cache = DEV;

const uglifyLoader = {
  mangle: true
};

export default {
  devtool,
  cache,
  context,
  entry,
  output,
  plugins,
  'uglify-loader': uglifyLoader
}
