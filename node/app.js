
// @TODO: check out bootstrap.js code 
// http://stackoverflow.com/questions/7732293/node-js-express-js-breaking-up-the-app-js-file

/** Module dependencies */
var express = require('express')
  //, mongoose = require("mongoose")
  //, models = require("./models")
  , routes = require('./routes')
  //, dbConfig = require("./data/_dbConfig")  // needed for mongoose here, which is also commented out
  // initialize express.js app
  , app = module.exports = express.createServer();


// connect to mongodb via mongoose
//mongoose.connect('mongodb://' + dbConfig.user + ':' + dbConfig.pass + '@' + dbConfig.host + ':' + dbConfig.port + '/' + dbConfig.name)


// Configuration
app.configure(function(){
  app.set('views', __dirname + '/views');
  app.set('view engine', 'jade');
  app.use(express.bodyParser());
  app.use(express.methodOverride());
  app.use(app.router);
  app.use(express.static(__dirname + '/public'));
});

app.configure('development', function(){
  app.use(express.errorHandler({ dumpExceptions: true, showStack: true })); 
});

app.configure('production', function(){
  app.use(express.errorHandler()); 
});


// Routes
app.get('/', routes.index);
app.get('/users', routes.users);
app.get('/users/new', routes.users.new);

app.listen(3000);
console.log("Express server listening on port %d in %s mode", app.address().port, app.settings.env);
