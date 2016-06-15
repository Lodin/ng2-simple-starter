// Karma configuration file, see link for more information
// https://karma-runner.github.io/0.13/config/configuration-file.html
require('babel-register');
var karmaConfig = require('./karma.config');

module.exports = function (config) {
  config.set(karmaConfig);
};
