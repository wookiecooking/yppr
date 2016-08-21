#!/usr/bin/env node

var ops = require('./ops')
var path = require('path')
var argv = require('minimist')(process.argv.slice(2));

var TEMPLATESPATH = ( process.env.YPPR_TEMPLATES || path.join(__dirname, '../templates') );
var TEMPLATEDIR = path.join(TEMPLATESPATH, argv._[0]);
var dd = ops.walk(TEMPLATEDIR);

dd.map(v=> {
  var template = ops.read(v)
  var compiled = ops.compile(template, argv)
  var newPath = v.replace(TEMPLATEDIR, process.cwd());
  ops.create(newPath, compiled)
})

console.log('complete')

module.exports = ops
