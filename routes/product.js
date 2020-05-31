var express = require('express');
var router = express.Router();
var dbConn = require('../dbConnect/db');

router.get('/listproduct', (req, res) => {
    let sql = "SELECT * FROM sanpham";
    let query = dbConn.query(sql, (err, products) => {
      if (err) throw err;
      res.render('listproduct', {
        products: products
      });
    });
  });
  router.post('/create', (req, res) => {
    let name = 'samsunga3';
    let hinhanh ='/images/'+ req.body.hinhanh;
    let data = { name: name, hinhanh: hinhanh };
    let sql = "INSERT INTO sanpham SET ?";
  let query = dbConn.query(sql, data, (err, results) => {
    if (err) throw err;
    res.redirect('/');
    console.log('Create success.');
  });

  });
module.exports = router;