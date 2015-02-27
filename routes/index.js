var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res) {
	res.render('index.ejs', {});
});

router.get('/articles', function(req, res) {
	res.render('articles.ejs', {});
});

module.exports = router;