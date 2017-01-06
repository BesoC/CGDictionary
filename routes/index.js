var express = require('express');
var router = express.Router();
var test = require('../models/exports').Test.Create();
var testName = test.TestMethod();

var config = require('../config');
var confString = config.get('database');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: confString });
});

module.exports = router;
