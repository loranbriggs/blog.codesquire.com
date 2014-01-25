
/*
 * POST deploy.
 */

exports.index = function(req, res){
  if (req.body.ref = "refs/heads/master") {
    console.log("pushed from master");
  } else {
    console.log("pushed not from master");
  }
};
