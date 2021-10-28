var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('mydata', { title: 'Apurupa Mathi' });
  res.render('mydata', { fact: 'I love drawing'});
});

module.exports = router;
