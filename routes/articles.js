var express = require('express');
var router = express.Router();

//Blog Stuff
var Article = require('../models/Article');

router.get('/articles/mostRecent/', function(req, res) {
	Article.find({}).exec(function(err, articles) {
		if(err) {
			res.send(500).err(err);
		} else {
			Article.getArticleStubs(articles, function(data) {
				console.log(data);
				res.render('articles.ejs', {
					articles: articles
				});
			});
		}
	});
});

router.get('articles/leastRecent/', function(req, res) {
	Article.find({}).sort({createdAt: 1}).exec(function(err, articles) {
		if(err) {
			res.send(500).err(err);
		} else {
			Article.getArticleStubs(articles, function(data) {
				res.render('articles.ejs', {
					articles: data
				});
			});
		}
	});
});

router.get('articles/:topic/mostRecent', function(req, res) {
	Article.find({topic: req.params.topic}).sort({createdAt: -1}).exec(function(err, articles) {
		if(err) {
			res.send(500).err(err);
		} else {
			Article.getArticleStubs(articles, function(data) {
				res.render('articles.ejs', {
					articles: data
				});
			});
		}
	});
});

router.get('articles/:topic/leastRecent', function(req, res) {
	Article.find({topic: req.params.topic}).sort({createdAt: 1}).exec(function(err, articles) {
		if(err) {
			res.send(500).err(err);
		} else {
			Article.getArticleStubs(articles, function(data) {
				res.render('articles.ejs', {
					articles: data
				});
			});
		}
	});
});

router.get('articles/article/:articleID', function(req, res) {
	Article.findOne({_id: req.params.articleID}).exec(function(err, article) {
		if(err) {
			res.send(500).err(err);
		} else {
			Article.getArticleStub(article, function(data) {
				res.render('articles.ejs', {
					articles: data
				});
			});
		}
	});
});

router.post('/articles', function(req, res) {
	var data = req.body;
	console.log(typeof req.body);
	console.log(typeof data.title);
	var newArticle = new Article({
		title: data.title, 
		slogan: data.slogan, 
		topic: data.topic, 
		text: data.text
	});
	console.log(newArticle);
	newArticle.save(function(err) {
		if (err) {
			res.status(400).send(err);
		} else {
			res.redirect('/admin');
		}
	});
});

module.exports = router;