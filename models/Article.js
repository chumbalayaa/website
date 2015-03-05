var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var helpers = require('../helpers/helpers');

var articleSchema = new Schema({
  title: {
    type: String,
    required: true,
    unique: true
  },
  slogan: {
    type: String,
    required: true
  },
  topic: {
  	type: String,
    required: true,
    default: "General"
  },
  text: {
    type: String,
    required: true
  },
  created_at: { 
  	type: Date 
  }, 
  updated_at: { 
  	type: Date
  }
});

articleSchema.pre('save', function(next){
  now = new Date();
  this.updated_at = now;
  if ( !this.created_at ) {
    this.created_at = now;
  }
  next();
});

//articleSchema.methods = {
//  set: function(data, cb) {
//    var that = this;
//  	that = helpers.mapJSON(this, data, function() {
//  		that.save(cb);
//  	});
//  }
//};

articleSchema.statics = {
  getArticleStubs: function(aricles, cb) {
    data = {};
    if (typeof articles == "")
    for (article in articles) {
      data[article._id] = {
        "title": article.title,
        "slogan": article.slogan,
        "created_at": article.created_at
      };
    }
    cb(data);
  },

  getArticleStub: function(article, cb) {
    data = {};
    data[article._id] = {
      "title": article.title,
      "slogan": article.slogan,
      "created_at": article.created_at
    };
    cb(data);
  }
};


module.exports = mongoose.model('Article', articleSchema);