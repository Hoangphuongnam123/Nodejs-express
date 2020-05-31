
var express = require('express');
var router = express.Router();
var dbConn = require('../dbConnect/db');

router.get('/', function (req, res, next) {
  res.render('login', { title: 'Express' });
});
router.post('/checklogin', (req, res) => {
  let email = req.body.email;
  let password = req.body.password;
  let sql = "SELECT * FROM nhanvien where email = ? and password= ? ";
  let query = dbConn.query(sql,email,password,(err, users) => {
    if (err) throw err;
    req.session.email=email;
    console.log('login success');
  });
});
/*l*/
router.get('/register', function (req, res, next) {
  res.send('register');
});
  module.exports = router;
  