{{{
  "title": "Continuous Deployment With Github",
  "tags": ["Node", "Github", "Deployment"],
  "category": "Tutorial",
  "date": "2-20-2014"
}}}

Continuous Deployment is the practice of ensuring the most recent changes to
your code are readily deployable.<!--more-->

![Continuous Deployment With Github](/post_imgs/GithubNode.png)

*Prerequisites:*

1. [Github](https://github.com/) account, (Githooks, can be used on other services)
1. VPS, I recommend [Digital Ocean](https://www.digitalocean.com/?refcode=bc8baa3f9b81) (Affiliate Link)
1. (Optional) [Node js](http://nodejs.org/), you can use any server side language,
but I will be highlight Node js.

### But Why?
If you are part of an agile team working on a project, you most likely are not pushing
your code live everyday. You are probably pushing to a production server once
every two weeks or so depending on your build cycle. You definitely would not
want to be working on something for two weeks to realize that something done
early in the build cycle, broke something else. Now instead of pushing live, you
are tracing back over weeks of work to determine the culprit. The key to preventing
this is Continuous Integration, combine everyone's work often (ideally daily)
using some form of version control. I will be focusing on Continuous Deployment
to a VPS as a way to verify your Continuous Integration was successful.

### The VPS
If you are talking about Continuous Deployment, you need a place to deploy too.
Often this is to a [VPS](https://www.digitalocean.com/?refcode=bc8baa3f9b81). I
strongly recommend [Digital Ocean](https://www.digitalocean.com/?refcode=bc8baa3f9b81)
because of the price ($5/month), and the fast SSD. Even if you are not a Digital
Ocean customer, check out their [Community](https://www.digitalocean.com/community)
it's full of many helpful articles. And if you do decide to join, please use
my [link](https://www.digitalocean.com/?refcode=bc8baa3f9b81), it
helps supports this site.

Ideally a project will be built locally, tested on a staging server, and finally
deployed to a production server when ready for launch. Both the staging and the
production environments can be done on the same server using a sub-domain. Link
the staging site to your version control "develop" branch and the production site
to your "master" branch. A nice tool to keep them organize is
[Git Flow](https://github.com/nvie/gitflow).

### The VPS and Github

Typically when you are starting out you build locally and use a FTP program
such as [FileZilla](https://filezilla-project.org/) to transfer your files to
the server. Eventually you graduate from that and start using some sort of
[Version Control](http://en.wikipedia.org/wiki/Revision_control), my personal
favorite is [Git](http://git-scm.com/) via Github. The typically work flow might
look like this.

    <work locally>
    git commit ...
    git push ...
    .
    .
    .
    ssh name@server.....
    git pull
    <restart scripts if necessary>
    deployed!!

This is much nicer than manually transferring files and directories, but it leaves
room for optimization. Especially if there are any extra steps after you pull on
your server. Let's start this automation process using Githooks.

### Github and Webhooks

Github has a great feature, webhooks. Go to the repository in question and click
on `Settings` on the right side bar. Then click on `Web Hooks & Services` and
then click on `Add webhook`. Then enter in the url you wish to send the command
to. In the example below I am using `sandbox.codesquire.com:9004`.

Basically whenever the repository is pushed it will send a json object via a POST 
request to the url of your choice. Upon receiving that post you can have your 
web server respond to your liking. If PHP is your thing, this simple Gist can
get you up running: <https://gist.github.com/cowboy/619858>

Node is my thing so I am going to show you how you can respond to the POST request
with a bit more customization, using [Gith](https://github.com/danheberden/gith).

To start, run the following from your node project folder:

    npm install gith --save

Assuming we are starting with a Vanilla [Express](http://expressjs.com/) project:


    /**
    * Module dependencies.
    */

    var express = require('express');
    var routes = require('./routes');
    var user = require('./routes/user');
    var http = require('http');
    var path = require('path');

    var app = express();

    // all environments
    app.set('port', process.env.PORT || 3004);
    app.set('views', path.join(__dirname, 'views'));
    app.set('view engine', 'ejs');
    app.use(express.favicon());
    app.use(express.logger('dev'));
    app.use(express.json());
    app.use(express.urlencoded());
    app.use(express.methodOverride());
    app.use(app.router);
    app.use(express.static(path.join(__dirname, 'public')));

    // development only
    if ('development' == app.get('env')) {
      app.use(express.errorHandler());
    }

    app.get('/', routes.index);
    app.get('/users', user.list);

    http.createServer(app).listen(app.get('port'), function(){
      console.log('Express server listening on port ' + app.get('port'));
    });

All we need to do is add a few lines at the end like so:

    var gith = require('gith').create(9004); // ensure to match the port you entered in Github

    gith({
      repo: 'loranbriggs/Sandbox'
    }).on( 'all', function( payload ) {
      console.log( 'Post-receive happened!' );
    });

This will print to the Node console that the push was received. To make this more
useful we will expand upon this. Remember before I said it would be ideally to
separate your staging from your production. Well lets start by adding a line
so this only gets fired when our `develop` branch is pushed:

    gith({
          repo: 'loranbriggs/Sandbox',
          branch: 'develop'
        }).on( 'all', function( payload ) {
          console.log( 'Post-receive happened!' );
        });

Also from before I said a typical deployment using git required logging into
the server via SSH and then executing a `git pull`, and restarting the Node
script. Well lets quickly create a Bash file that will do just that. Let's call
it `deploy-develop.sh` and place it in the root of our project directory.

    #!/bin/bash

    echo "Deploying develop branch at $(date)" >> ~/Sandbox/deployment_log.txt

    git pull

    forever restartall

You might want to replace the last line with `forever restart <forever uid>` to
prevent this from restarting other scripts on the same server. You can test this
from an SSH connection by entering:

    . deploy-develop.sh

If the desired effect took place, lets call it from our `gith` function. To do
this we need to be able to call a Linux command from our Node script. Pulling from
<http://www.dzone.com/snippets/execute-unix-command-nodejs> we add it like so:

    gith({
          repo: 'loranbriggs/Sandbox',
          branch: 'develop'
        }).on( 'all', function( payload ) {
          var sys = require('sys')
          var exec = require('child_process').exec;
          function puts(error, stdout, stderr) { 
            sys.puts(stdout)
          }
          exec(". ~/Sandbox/deploy-develop.sh", puts); // command to be execute
        });

Now place this at the end of your app.js file like so:

    /**
    * Module dependencies.
    */

    var express = require('express');
    var routes = require('./routes');
    var user = require('./routes/user');
    var http = require('http');
    var path = require('path');

    var app = express();

    // all environments
    app.set('port', process.env.PORT || 3004);
    app.set('views', path.join(__dirname, 'views'));
    app.set('view engine', 'ejs');
    app.use(express.favicon());
    app.use(express.logger('dev'));
    app.use(express.json());
    app.use(express.urlencoded());
    app.use(express.methodOverride());
    app.use(app.router);
    app.use(express.static(path.join(__dirname, 'public')));

    // development only
    if ('development' == app.get('env')) {
      app.use(express.errorHandler());
    }

    app.get('/', routes.index);
    app.get('/users', user.list);

    http.createServer(app).listen(app.get('port'), function(){
      console.log('Express server listening on port ' + app.get('port'));
    });


    var gith = require('gith').create(9004);

    gith({
        repo: 'loranbriggs/Sandbox',
        branch: 'develop'
      }).on( 'all', function( payload ) {
        var sys = require('sys')
        var exec = require('child_process').exec;
        function puts(error, stdout, stderr) { 
          sys.puts(stdout)
        }
        exec(". ~/sandbox.codesquire.com/deploy-develop.sh", puts); // command to be execute
      });

Now for the last time (hopefully) do a `git push`, ssh into the server and do a
manually `git pull`. Go back and make a change locally, and push again. With
any luck you should see the live changes without having to manually pull on the
server anymore!!

<div class="gplus">
</div>
