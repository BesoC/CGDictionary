/// <reference path="../typings/node_js_6.d.ts" />
"use strict";
var nconf = require('nconf');
var path = require("path");
nconf.use('file', { file: path.join(__dirname, 'config.json') });
module.exports = nconf;
//# sourceMappingURL=index.js.map