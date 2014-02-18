module.exports  = function(app) {

  /*
  * GET home page.
  */
  app.get('/', function(req, res){
    res.render('index', { title: 'Home', mobile: isMobile(req) });
  });

  app.get('/portfolio', function(req, res) {
    var fs = require('fs');
    var data_from_file;

    fs.readFile('./public/data/portfolio.json', 'utf8', function (err, data) {
      if (err) {
        console.log('Error: ' + err);
        return;
      }

      data_from_file = JSON.parse(data);
      console.log("data:");
      console.log(data_from_file);

      res.render('portfolio', { title: 'Work', data: data_from_file });

    });
  });

  app.get('/about', function(req, res){
    res.render('about', { title: 'About' });
  });

  app.get('/contact', function(req, res){
    res.render('contact', { title: 'Contact' });
  });

  app.get('/habits', function(req, res){
    res.sendfile('public/projects/habits/index.html');
  });

  app.get('/gplus', function(req, res) {
    res.render('gplus', { title: 'gPlus' });
  });

  var re = new RegExp('android|iphone|ipod|ipad', 'i');

  function isMobile(req) {
    var ua = req.headers['user-agent'];
    return re.exec(ua) ? true : false;
  }

};
