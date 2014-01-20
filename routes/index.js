
/*
 * GET home page.
 */

exports.index = function(req, res){
  res.render('index', { title: 'Express' });
};

exports.portfolio = function(req, res) {
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

    res.render('portfolio', { data: data_from_file });

  });
};
