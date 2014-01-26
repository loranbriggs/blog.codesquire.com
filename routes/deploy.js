var url = require('url');
/*
 * POST deploy.
 */

exports.index = function(req, res){
  var parts = url.parse(req.url, true);
  var params = JSON.parse(parts.query);
  if (params.payload.ref == "refs/heads/master") {
    d = new Date();
    console.log("pushed from master at:" + d );

  } else {
    console.log("pushed not from master");
  }
};
