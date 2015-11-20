#! /usr/bin/env node
var process = require('process');

var execDir = process.cwd();
require('./lib/app.js')(execDir);
