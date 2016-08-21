var fs = require('fs'), path = require('path');


// http://stackoverflow.com/questions/5827612/node-js-fs-readdir-recursive-directory-search
// I guess for big files this might cause some issues
var walk = function(dir) {
    var results = []
    var list = fs.readdirSync(dir)
    list.forEach(function(file) {
      var file = path.join(dir, file);
        var stat = fs.statSync(file)
        if (stat && stat.isDirectory()) results = results.concat(walk(file))
        else results.push(file)
    })
    return results
}
module.exports = walk
