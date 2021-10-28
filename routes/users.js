var express = require('express');
var router = express.Router();
var c =0 ;
/* GET users listing. */
router.get('/', function(req, res, next) {
  c  = c+1;
  res.send('User accesses are:'+c);
});

module.exports = router;
