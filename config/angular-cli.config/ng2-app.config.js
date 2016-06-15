import path from 'path';

export const sourceDir = 'src';

export const polyfills = [
  'vendor/ts-helpers/index.js',
  'vendor/babel-polyfill/dist/polyfill.js',
  'vendor/reflect-metadata/Reflect.js',
  'vendor/systemjs/dist/system.src.js',
  'vendor/zone.js/dist/zone.js'
];

export const sassCompiler = {
  includePaths: [
    'src/assets',
    'node_modules'
  ],
  importer: url => url.search('~') !== -1
    ? {file: path.join(__dirname, 'node_modules', url.slice(1) + '.scss')}
    : null
};

export const vendorNpmFiles = [
  'systemjs/dist/system-polyfills.js',
  'systemjs/dist/system.src.js',
  'ts-helpers/index.js',
  'babel-polyfill/dist/polyfill.js',

  'zone.js/dist/**/*.+(js|js.map)',
  'reflect-metadata/**/*.+(js|js.map)',
  'rxjs/**/*.+(js|js.map)',
  '@angular/**/*.+(js|js.map)',
  'babel-runtime/**/*.+(js|js.map)',
  'core-js/**/*.+(js|js.map)'
];
