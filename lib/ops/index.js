var path = require('path');

module.exports = {
  read: require(path.join(__dirname, 'fileRead')),
  create: require(path.join(__dirname, 'fileWrite')),
  compile: require(path.join(__dirname, 'compile')),
  walk: require(path.join(__dirname, 'walk'))
}
