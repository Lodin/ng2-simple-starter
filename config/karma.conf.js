require('babel-register');

var karmaConfig = require('./karma.config');

module.exports = function (config) {
  config.set(karmaConfig);
};
