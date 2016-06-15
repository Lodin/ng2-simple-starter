export {files, exclude} from './files.config';
export {plugins} from './plugins.config';
export {browsers, customLaunchers} from './browsers.config';
export * as coverageReporter from './coverage.config';

export const basePath = '..';

export const frameworks = ['jasmine'];

export const preprocessors = {};
export const reporters = ['progress', 'coverage'];
export const port = 9876;
export const colors = true;
export const logLevel = 'INFO';
export const autoWatch = false;
export const singleRun = true;
