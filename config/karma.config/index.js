import {files, exclude} from './files.config';

export const basePath = '..';

export const frameworks = ['jasmine'];

export const plugins = [
  'karma-jasmine',
  'karma-chrome-launcher',
  'karma-firefox-launcher',
  'karma-ie-launcher',
  'karma-coverage'
];

export const customLaunchers = {
  // chrome setup for travis CI using chromium
  Chrome_travis_ci: {
    base: 'Chrome',
    flags: ['--no-sandbox']
  }
};

export {files, exclude};

export const preprocessors = {};
export const reporters = ['progress'];
export const port = 9876;
export const colors = true;
export const logLevel = 'INFO';
export const autoWatch = false;
export const browsers = ['Chrome'];
export const singleRun = false;
