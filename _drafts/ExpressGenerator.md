{{{
  "title": "Understanding the Express Generator",
  "tags": ["Node", "Express", "Javascript"],
  "category": "Tutorial",
  "date": "2-2-2014"
}}}

Generators are great; great for prototyping, great for automatation; but
are not great for understanding. When you are new to a language / framework /
library / whatever, you often uses generators to quickly get a project running.
An important step is to step back and make sure you *understand* what exactly
the generator is generating. Could you build it without the generator?<!--more-->

*Pre-requistests:*

1. Node Js
1. Express Js

# Express Generator

Here we are going to walk through a project generatored with the built in
Express generator:

    express --ejs expressGenerated

### Why EJS?
Express defaults to [Jade](http://jade-lang.com/) templating engine. If you are
coming from Rails, its similar to [Haml](http://haml.info/). I use to
experiment with both Jade and Haml but I often found myself spending more time
looking up how to do simple the "Jade" way. Espically if you are
using a complex libary such as [Angular](http://angularjs.org/) or
[Bootstrap](http://getbootstrap.com/), you will often have to copy and paste
HTML, and then have to convert it to Jade. With [EJS](http://embeddedjs.com/)
there is no learning curve, if you know HTML and just want to add javascript
variables or page templates, it is simple. If you like Jade, use it. Converting
from EJS to Jade is the same as HTML to EJS, but Jade to HTML is not trivial.

Okay back from that tangent. The above generator will produce a prjoct
directory like the following:

    expressGenerated
    ├── app.js
    ├── package.json
    ├── public
    │   ├── images
    │   ├── javascripts
    │   └── stylesheets
    │       └── style.css
    ├── routes
    │   ├── index.js
    │   └── user.js
    └── views
        └── index.ejs

When you run `npm install` it will install all the dependencies into `node_modules` directory. To run this application:

    node app.js

Then direct your browser to <http://localhost:3000/> to see the application
running. This application is basically listening on port `3000` and will
respond only to `get` requests to `'/'` or `'/users'`. The controller handling
these requests are in the `routes` directory.

This is a common way to start a simple web site application. It sets you up
with a static public assets directory and it seperates your controllers
(routes) from your views.

Now let's see if we can recreate this manually. We are still going to use
express and ejs, but we will combine them manually.

We start by creating a new directory and `package.json` file:

    mkdir expressManually
    cd expressManually
    touch package.json


