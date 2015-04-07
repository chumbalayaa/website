var express = require('express');
var router = express.Router();

//Blog Stuff
var Article = require('../models/Article');

router.get('/articles/mostRecent/', function(req, res) {
	Article.find({}).exec(function(err, articles) {
		if(err) {
			res.send(500).err(err);
		} else {
			res.render('articles.ejs', {
				articles: articles,
				list: true
			});
		}
	});
});

router.get('/articles/leastRecent/', function(req, res) {
	Article.find({}, {}, {sort: {'created_at' : -1}}, function(err, articles) {
		if(err) {
			res.send(500).err(err);
		} else {
			res.render('articles.ejs', {
				articles: articles,
				list: true
			});
		}
	});
});

router.get('/articles/:topic/mostRecent', function(req, res) {
	Article.find({topic: req.params.topic}).sort({createdAt: -1}).exec(function(err, articles) {
		if(err) {
			res.send(500).err(err);
		} else {
			res.render('articles.ejs', {
				articles: articles,
				list: true
			});
		}
	});
});

router.get('/articles/:topic/leastRecent', function(req, res) {
	Article.find({topic: req.params.topic}).sort({createdAt: 1}).exec(function(err, articles) {
		if(err) {
			res.send(500).err(err);
		} else {
			res.render('articles.ejs', {
				articles: articles,
				list: true
			});
		}
	});
});

router.get('/articles/article/:articleID', function(req, res) {
	Article.findOne({_id: req.params.articleID}).exec(function(err, article) {
		if(err) {
			res.send(500).err(err);
		} else {
			res.render('articles.ejs', {
				article: article,
				list: false
			});
		}
	});
});

router.post('/articles', function(req, res) {
	var data = req.body;
	var newArticle = new Article({
		title: data.title, 
		slogan: data.slogan, 
		topic: data.topic, 
		text: data.text
	});
	newArticle.save(function(err) {
		if (err) {
			res.status(400).send(err);
		} else {
			res.redirect('/admin');
		}
	});
});

module.exports = router;