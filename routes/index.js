module.exports  = function(app) {

  /*
  * GET home page.
  */
  app.get('/', function(req, res){
    res.render('index', { title: 'Home' });
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

};
