var express = require('express');
var router = express.Router();
var rand;
var hypot;
var ceil;
var clz32;

/* GET home page. */
router.get('/', function(req, res, next) {
  rand = Math.random()*(100-1)+1;
  hypot = Math.hypot(rand);
  ceil =  Math.ceil(rand);
  clz32 = Math.clz32(rand); 

  res.send(`The value of Math.hypot() is ${hypot} <br>

            The value of Math.ceil() is ${ceil} <br>

            The value of Math.clz32() is ${clz32}`);
});

module.exports = router;
