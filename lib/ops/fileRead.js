var fs = require('fs');

module.exports = function(file) {
  try {
    return fs.readFileSync(file,'utf8');
  } catch(err) {
    console.log(err);
    process.exit(1);
  }
}

