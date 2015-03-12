var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res) {
	res.render('index.ejs', {});
});

/* GET Resume Page. */
router.get('/resume', function(req, res) {
	res.render('resume.ejs', {});
});

/*  GET Projects Page  */
router.get('/projects', function(req, res) {
	res.render('projects.ejs', {});
});

module.exports = router;