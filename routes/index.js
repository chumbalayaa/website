var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res) {
	res.render('index.ejs', {});
});

/* GET Resume Page. */
router.get('/resume', function(req, res) {
	res.send("Not done yet");
});

/*  GET Projects Page  */
router.get('/projects', function(req, res) {
	res.send("Not done yet");
});

module.exports = router;