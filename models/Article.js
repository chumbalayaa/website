var mongoose = require('mongoose');
var helpers = require('../helpers/helpers');

var articleSchema = mongoose.Schema({
  name: {
    type: String,
    required: true,
    unique: true
  },
  slogan: {
    type: String,
    required: true
  },
  topic: {
  	
  },
  views: {
  	type: Number,
  	default: 0
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

articleSchema.methods = {
  set: function(data, cb) {
  	this = helpers.mapJSON(this, data, function() {
  		this.save(cb);
  	});
  },
};

articleSchema.statics = {
  
}
module.exports = {
  Article: mongoose.model('Article', articleSchema)
};