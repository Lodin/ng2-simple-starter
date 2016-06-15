// Test shim for Karma, needed to load files via SystemJS

/*global jasmine, __karma__, window*/
Error.stackTraceLimit = Infinity;
jasmine.DEFAULT_TIMEOUT_INTERVAL = 1000;

__karma__.loaded = () => {
};

const distPath = '/base/dist/';
const appPaths = ['app']; //Add all valid source code folders here

const isJsFile = path => path.slice(-3) == '.js';

const isSpecFile = path => path.slice(-8) == '.spec.js';

const isAppFile = path => isJsFile(path) && appPaths.some(appPath => {
  const fullAppPath = distPath + appPath + '/';
  return path.substr(0, fullAppPath.length) == fullAppPath;
});

const allSpecFiles = Object.keys(window.__karma__.files)
  .filter(isSpecFile)
  .filter(isAppFile);

// Load our SystemJS configuration.
System.config({
  baseURL: distPath
});

// Load and configure the TestComponentBuilder.
System.import('system-config.js')
  .then(() => Promise.all([
      System.import('@angular/core/testing'),
      System.import('@angular/platform-browser-dynamic/testing')
    ]).then(providers => {
      const testing = providers[0];
      const testingBrowser = providers[1];

      testing.setBaseTestProviders(testingBrowser.TEST_BROWSER_DYNAMIC_PLATFORM_PROVIDERS,
        testingBrowser.TEST_BROWSER_DYNAMIC_APPLICATION_PROVIDERS);
    })
  )
  // Finally, load all spec files.
  // This will run the tests directly.
  .then(() => Promise.all(
    allSpecFiles.map(moduleName => System.import(moduleName)))
  )
  .then(__karma__.start, __karma__.error);
