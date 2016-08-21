var _ = require('lodash.template');

module.exports = function(template, data) {
  var compile = _(template);
  return compile(data);
}
