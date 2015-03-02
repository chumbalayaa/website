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
  	type: String,
    required: true,
    default: "General"
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
  
}
module.exports = {
  Article: mongoose.model('Article', articleSchema)
};