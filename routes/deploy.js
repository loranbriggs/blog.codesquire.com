/*
 * POST deploy.
 */

exports.index = function(req, res){
  var payload = JSON.parse(req.body.payload);
  console.log(payload);
  //var params = JSON.parse(req.query.payload);
  if (false) {
    d = new Date();
    console.log("pushed from master at:" + d );

  } else {
    console.log("pushed not from master");
  }
};
