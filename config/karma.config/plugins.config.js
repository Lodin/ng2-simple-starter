const DEV = process.env['TEST_ENV'] === 'development';

const base = [
  'karma-jasmine',
  'karma-coverage',
  'karma-spec-reporter'
];

const dev = [
  'karma-chrome-launcher',
  'karma-firefox-launcher',
  'karma-ie-launcher'
];

const prod = [
  'karma-phantomjs-launcher'
];

export const plugins = DEV ? [...base, ...dev] : [...base, ...prod];
