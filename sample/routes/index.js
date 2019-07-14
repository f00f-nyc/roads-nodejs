var express = require('express');
var db = require('../db');
var router = express.Router();


/* GET home page. */
router.get('/', function(req, res, next) {
  
  //db.pool.query(...   
  
  res.render('index', { title: 'Roads Sample App' });
});

module.exports = router;
