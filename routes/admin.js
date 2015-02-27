var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res) {
	res.render('admin/admin.ejs', {});
});

router.get('/newArticle', function(req, res) {
	res.render('admin/postArticle.ejs', {});
});

module.exports = router;