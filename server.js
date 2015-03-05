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
var passwords = require('./helpers/passwords');

//model variables
Article = require('./models/Article').Article;

//routing variables
var index = require('./routes/index');
var admin = require('./routes/admin');
var articles = require('./routes/articles');

//Add variables to app
//app.set('view engine', 'jade');
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));
app.use(cookieParser());
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, 'public')));

//Session code
app.use(session({
  resave: false,
  saveUninitialized: false,
  secret: passwords.getCookiePassword()
}));

var connection_string = 'localhost/alexchumbley';
if (process.env.OPENSHIFT_MONGODB_DB_PASSWORD) {
  connection_string = process.env.OPENSHIFT_MONGODB_DB_USERNAME + ':' +
        process.env.OPENSHIFT_MONGODB_DB_PASSWORD + '@' +
        process.env.OPENSHIFT_MONGODB_DB_HOST + ':' +
        process.env.OPENSHIFT_MONGODB_DB_PORT + '/alexchumbley';
}

//Database connection - Mongoose
var db = mongoose.connect("mongodb://" + connection_string);

var port = process.env.OPENSHIFT_NODEJS_PORT;
var ip = process.env.OPENSHIFT_NODEJS_IP;

//Pass around port/ip in case we need to do in house http requests
app.use(function(req,res,next) {
  req.OPENSHIFT_PORT = port;
  req.OPENSHIFT_IP = ip;
  next();
})

//Authenticate that user is me
var basicAuth = require('basic-auth');

var auth = function (req, res, next) {
  function unauthorized(res) {
    res.set('WWW-Authenticate', 'Basic realm=Authorization Required');
    return res.sendStatus(401);
  };
  var user = basicAuth(req);
  if (!user || !user.name || !user.pass) {
    return unauthorized(res);
  };
  if (user.name === passwords.getAdminUsername() && user.pass === passwords.getAdminPassword()) {
    return next();
  } else {
    return unauthorized(res);
  };
};

//Routing
app.use('/', index);
app.use('/', articles);
app.use('/admin', auth, admin);

// development error handler
// will print stacktrace
if (app.get('env') === 'development') {
  app.use(function(err, req, res, next) {
    console.log(err);
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
});

module.exports = app;

process.env.NODE_ENV = 'development';
app.listen(port || 3000, ip);
console.log("We are in "+process.env.NODE_ENV);

// app.listen(process.env.OPENSHIFT_NODEJS_PORT || 8080,
//            process.env.OPENSHIFT_NODEJS_IP);
