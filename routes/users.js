var express = require('express');
var router = express.Router();
var dbConn= require('../dbConnect/db');

/* GET users listing. */
router.get('/login', function (req, res, next) {
  res.render('login', { title: 'Express' });
});


module.exports = router;
