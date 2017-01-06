/// <reference path="../typings/node_js_6.d.ts" />

import nconf = require('nconf');
import path = require("path");

nconf.use('file', {file: path.join(__dirname, 'config.json')});

module.exports = nconf;