const vendors = [
  'babel-polyfill/dist/polyfill.js',
  'zone.js/dist/zone.js',
  'reflect-metadata/Reflect.js',
  'systemjs/dist/system-polyfills.js',
  'systemjs/dist/system.src.js',
  'zone.js/dist/async-test.js',
  'zone.js/dist/fake-async-test.js',
  'ts-helpers/index.js'
].map(vendor => ({pattern: `dist/vendor/${vendor}`, included: true, watched: false}));

const shims = [
  'config/karma.config/karma-test-shim.js'
].map(shim => ({pattern: shim, included: true, watched: true}));

const dist = [
  'dist/**/*'
].map(file => ({pattern: file, included: false, watched: true}))

export const exclude = [
  // Vendor packages might include spec files. We don't want to use those.
  `dist/vendor/**/*.spec.js`
];

export const files = [...vendors, ...shims, ...dist];
