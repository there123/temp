var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
	//Response.render()表示渲染view，同时传进对应的数据
  res.render('index', {
    "title":"Hello starting",
    "list":["tea","apple","orange"]
  });
});

module.exports = router;
