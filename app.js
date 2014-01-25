
/**
 * Module dependencies.
 */

var express = require('express')
  , routes = require('./routes')
  , user = require('./routes/user')
  , http = require('http')
  , Poet = require('poet')
  , path = require('path');

var app = express();
var poet = Poet(app, {
  posts: './_posts/',
  postPerPage: 5,
  metaFormat: 'json',
});

poet.watch(function() {
  console.log("Poet has an eye on you!");
}).init().then(function() {
  console.log("Poet is ready to go!");
});

app.configure(function(){
  app.set('port', process.env.PORT || 3001);
  app.set('views', __dirname + '/views/');
  app.set('view engine', 'ejs');
  app.use(express.favicon());
  app.use(express.logger('dev'));
  app.use(express.bodyParser());
  app.use(express.methodOverride());
  app.use(app.router);
  app.use(express.static(path.join(__dirname, 'public')));
});

app.configure('development', function(){
  app.use(express.errorHandler());
});

app.get('/', routes.index);
app.get('/work', routes.portfolio);
app.get('/portfolio', routes.portfolio);
app.get('/about', routes.about);
app.get('/contact', routes.contact);
app.get('/users', user.list);

http.createServer(app).listen(app.get('port'), function(){
  console.log("Express server listening on port " + app.get('port'));
});
