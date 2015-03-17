var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
	//Response.send()为发送一个响应；
  res.send({"list":["tea","apple"]});
});

module.exports = router;
