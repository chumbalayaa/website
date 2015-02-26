var express = require('express');
var app = express();
var mongoose = require("mongoose");
var path = require('path');
var bodyParser = require("body-parser");
var cookieParser = require("cookie-parser");
var errorhandler = require("errorhandler");
var session = require('express-session');
var favicon = require("serve-favicon");
var logger = require("morgan");
var fs = require("fs");
var busboy = require('connect-busboy');

Article = require('./models/User').Article;


/*
fs.readdirSync('./models').forEach(function(file) {
    console.log(file);
    require(path.join('./models',file.substring(0,file.length-3)));
});
*/
require(path.join(__dirname,'models','Match'));

//routing variables
var index = require('./routes/index');
var users = require('./routes/users');
var league = require('./routes/league');
var portfolio = require('./routes/portfolio');
var match = require('./routes/match');
var stock = require('./routes/stocks');

//Add variables to app
//app.set('view engine', 'jade');
app.set('view engine', 'jade');
app.set('views', path.join(__dirname, 'views'));
app.use(cookieParser());
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());
app.use(busboy()); 
app.use(express.static(path.join(__dirname, 'public')));

//Session code
app.use(session({
  resave: false,
  saveUninitialized: false,
  secret: 'secret_key'
}));

var connection_string = 'localhost/stockexchange';
if (process.env.OPENSHIFT_MONGODB_DB_PASSWORD) {
  connection_string = process.env.OPENSHIFT_MONGODB_DB_USERNAME + ':' +
        process.env.OPENSHIFT_MONGODB_DB_PASSWORD + '@' +
        process.env.OPENSHIFT_MONGODB_DB_HOST + ':' +
        process.env.OPENSHIFT_MONGODB_DB_PORT + '/stockexchange';
}

//Database connection - Mongoose
var db = mongoose.connect("mongodb://" + connection_string);

var port = process.env.OPENSHIFT_NODEJS_PORT;
var ip = process.env.OPENSHIFT_NODEJS_IP;

/*app.use(function(req, res, next) {
  if (req.session.user) {
    User.findOne({
      _id: req.session.user._id
    }, function(err, user) {
      if (user) {
        req.currentUser = user;
      } else {
        delete req.session.user._id;
      }
      next();
    });
  } else {
    next();
  }
});*/

//Pass around port/ip in case we need to do in house http requests
app.use(function(req,res,next) {
  req.OPENSHIFT_PORT = port;
  req.OPENSHIFT_IP = ip;
  next();
})


//Authenticate that user is logged (has session)
function authenticateUser(req, res, next) {
  if (req.session.user) {
    if (req.session.user.username == req.params.username) {
      next();
    } else {
      console.log("Wrong user");
      res.status(403).json({status: "Error",
                            message: "Wrong User"}).end();
    }
  } else {
    console.log("Not authenticated yet");
    req.session.error = 'Access denied!';
    res.status(400).json({status: "Error",
                          message: "Not logged in"}).end();
  }
}

//Routing
app.use('/', index);
app.use('/portfolio', portfolio);
app.use('/stock', stock);
app.use('/users', users);
app.use('/league', league);
app.use('/league/', match);

// development error handler
// will print stacktrace
/*if (app.get('env') === 'development') {
  app.use(function(err, req, res, next) {
    res.status(err.status || 500);
    res.render('error', {
      message: err.message,
      error: err,
      loggedIn: false
    });
  });
}

// production error handler
// no stacktraces leaked to user
app.use(function(err, req, res, next) {
  res.status(err.status || 500);
  res.render('error', {
    message: err.message,
    error: {}
  });
});*/

module.exports = app;

process.env.NODE_ENV = 'development';
app.listen(port || 3000, ip);
console.log("We are in "+process.env.NODE_ENV);

// app.listen(process.env.OPENSHIFT_NODEJS_PORT || 8080,
//            process.env.OPENSHIFT_NODEJS_IP);
