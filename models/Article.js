//Eric Gan
var mongoose = require('mongoose');
var helpers = require('../helpers/helpers');

//Define the schema for our User model
var userSchema = mongoose.Schema({
  name: {
    type: String,
    required: true,
    unique: true
  },
  password: {
    type: String,
    required: true
  },
  portfolios: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Portfolio'
  }],
  leagues: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'League'
  }]
});

userSchema.methods = {
  addPortfolio: function(portforlio_id, cb) {
    // add it to allStocks
    // make sure it's not repeated
    this.portfolios.push(helpers.setDiff(portforlio_id, this.portforlios));
    this.save(cb);
  },
  addLeague: function(league_id, cb) {
    // add it to allStocks
    // make sure it's not repeated
    this.leagues.push(helpers.setDiff(league_id, this.leagues));
    this.save(cb);
  }
};

userSchema.statics = {
  userNameToId: function(name, cb) {
    // console.log("NAME = " + name);
    this.findOne({
      name: name
    }, function(err, user) {
      if (err) {
        console.log(err);
      } else {
        // console.log("ID = " + user._id);
        cb(user._id)
      }
    });
  }
}
module.exports = {
  User: mongoose.model('User', userSchema)
};