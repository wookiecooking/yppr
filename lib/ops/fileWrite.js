var fs = require('fs'), mkdirp = require('mkdirp'), getdir = require('path').dirname;

module.exports = function(file, content) {
 mkdirp(getdir(file), function (err) {
    try {
      fs.writeFileSync(file, content, 'utf8');
    } catch(err) {
      console.log(err)
      process.exit(1)
    }
  });
}
