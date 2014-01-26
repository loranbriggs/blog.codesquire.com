/*
 * POST deploy.
 */

exports.index = function(req, res){
  var params = JSON.parse(req.query.payload);
  if (params.ref == "refs/heads/master") {
    d = new Date();
    console.log("pushed from master at:" + d );

  } else {
    console.log("pushed not from master");
  }
};
