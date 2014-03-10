
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
  readMoreLink: function(post) {
    return '<a href="' + post.url + '" class="read-more">Read More...</a>';
  }
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

// routes
require('./routes/index')(app);
app.get('/users', user.list);

var gith = require('gith').create(9001);

gith({
  repo: 'loranbriggs/codesquire.com',
  branch: 'master'
}).on( 'all', function(payload) {
  var util = require('util'),
      exec = require('child_process').exec,
      child;

  child = exec('. ~/codesquire.com/deploy-master.sh', // command line argument directly in string
    function (error, stdout, stderr) {      // one easy function to capture data/errors
      console.log('stdout: ' + stdout);
      console.log('stderr: ' + stderr);
      if (error !== null) {
        console.log('exec error: ' + error);
      }
  });
});

gith({
  repo: 'loranbriggs/codesquire.com',
  branch: 'develop'
}).on( 'all', function(payload) {
  console.log( 'Push develop');
});

http.createServer(app).listen(app.get('port'), function(){
  console.log("Express server listening on port " + app.get('port'));
});
