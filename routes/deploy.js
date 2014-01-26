
/*
 * POST deploy.
 */

exports.index = function(req, res){
  if (req.body.payload.ref == "refs/heads/master") {
    d = new Date();
    console.log("pushed from master at:" + d );

  } else {
    console.log("pushed not from master");
  }
};
