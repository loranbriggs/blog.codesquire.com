{{{
  "title": "Phaser Phonegap Awesome",
  "tags": ["Phaser", "Phonegap", "Javascript", "Games"],
  "category": "Tutorial",
  "date": "2-28-2014"
}}}

HTML games are fun to build, fun to play, but have you ever wished the vast
number of HTML games were availabe on your phone? Using
[Phaser](http://phaser.io/) and [Phonegap](http://phonegap.com/) we are going
to build a Hybird app using JavaScript!<!--more-->

![Continuous Deployment With Github](/post_imgs/ContinuousDeployment/GithubNode.png)

*Prerequisites:*

1. [Node js](http://nodejs.org/) (Phonegap dependacy, plus who doesn't love it?)
1. [Phonegap](http://phonegap.com/install/)
    a. [Adobe Creatuve Cloud Membership](http://www.adobe.com/products/creativecloud.html)
   (Optional but includes [Phonegap Build](https://build.phonegap.com/))
    If you have a Photoshop membership, you have Phonegap Build!
    a. You can subsitute with [Cordova](https://cordova.apache.org/)
1. Download [Phaser](https://github.com/photonstorm/phaser), and run through
one of the following (our focus will be combine with Phonegap, not learning
Phaser):
    a. <http://www.photonstorm.com/phaser/tutorial-making-your-first-phaser-game>
    a. <http://blog.lessmilk.com/how-to-make-flappy-bird-in-html5-1/> 
    (We are going to use this one for our simple test run)

### Quick Install
1. Install Node
    - referece<https://github.com/joyent/node/wiki/Installing-Node.js-via-package-manager>
1. Install Phonegap
    - `sudo npm install -g phonegap`
1. Clone Phaser
    - `git clone https://github.com/photonstorm/phaser.git`

The idea of developing JavaScript games is appealing to many of us. The low
barrier to entry, the ease of deployment, a language we love (at least love
its' portability). Using Phonegap and Phaser, creating your own mobile app
has never been easier. Let's get to work!

### Phonegap
Hopefully you had no issues intalling Node or Phonegap, and can stat your project
using the following:

    phonegap create Flappy-Phaser

This will create a directory like this:

    Flappy-Phaser
    ├── merges
    ├── platforms
    ├── plugins
    └── www
        ├── config.xml
        ├── css
        ├── icon.png
        ├── img
        ├── index.html
        ├── js
        ├── res
        ├── spec
        └── spec.html

We will be focusing on the `www` directory since I will be using Phonegap Build. If you are not using Phonegap Build you will have to dive into the `platforms` directory and set up your local enviorments for each platform you wish to target. My suggestion is if you have or need Photoshop, just use Phonegap Build.

Let's break down this `www` folder a bit:

    www
    ├── config.xml        // Phonegap config file (Permssions, etc)
    ├── css               // Your style sheets
    ├── icon.png          // Your apps Icon
    ├── img               // img assets
    ├── index.html        // The entry point into your app
    ├── js               // Your JavaScript src code
    ├── res               // Platform specific Icons
    ├── spec
    └── spec.html


So if you walked through <http://blog.lessmilk.com/how-to-make-flappy-bird-in-html5-1/>
then you should already have a project to combine into this. **But do not simply
replace the `www` directory with your Phaser game.** Instead, copy the files
over manually. The only file that really requires work is the `index.html`:

    <!DOCTYPE html>
    <html>
        <head>
            <meta charset="utf-8" />
            <meta name="format-detection" content="telephone=no" />
            <meta name="viewport" content="user-scalable=no, initial-scale=1, maximum-scale=1, minimum-scale=1, width=device-width, height=device-height, target-densitydpi=device-dpi" />
            <link rel="stylesheet" type="text/css" href="css/index.css" />
            <title>Hello World</title>
        </head>
        <body>
            <div class="app">
                <h1>PhoneGap</h1>
                <div id="deviceready" class="blink">
                    <p class="event listening">Connecting to Device</p>
                    <p class="event received">Device is Ready</p>
                </div>
            </div>
            <script type="text/javascript" src="phonegap.js"></script>
            <script type="text/javascript" src="js/index.js"></script>
            <script type="text/javascript">
                app.initialize();
            </script>
        </body>
    </html>

All you need to do is copy over the imporant items into the header, like the
`script` tags and the `style` block. Then in the body copy over the game `div`.
Your `index.html` should end up like this:

    <!DOCTYPE html>
    <html>
        <head>
            <meta charset="utf-8" />
            <meta name="format-detection" content="telephone=no" />
            <meta name="viewport" content="user-scalable=no, initial-scale=1, maximum-scale=1, minimum-scale=1, width=device-width, height=device-height, target-densitydpi=device-dpi" />
            <link rel="stylesheet" type="text/css" href="css/index.css" />
            <style>
              #game_div {
                width: 400px;
                margin: auto;
                margin-top: 50px;
              }
            </style>

            <script type="text/javascript" src="js/phaser.min.js"></script>
            <script type="text/javascript" src="js/main.js"></script>

            <title>Flappy Phaser</title>
        </head>
        <body>
            <div id="game_div"> </div>
            <script type="text/javascript" src="phonegap.js"></script>
            <script type="text/javascript" src="js/index.js"></script>
            <script type="text/javascript">
                app.initialize();
            </script>
        </body>
    </html>

### Touch Controls
If you were to run this it would work but you couldnt play on a touch device.
You don't have a `spacebar`, so we need to add a touch event. In the `main.js`
file just below where you defined the spacebar, add this:

    // call 'jump' for touch events
    this.game.input.onDown.add(this.jump, this);

Now you will be able to jump with a touch of a finger!


### Phonegap Build
Assuming you have an Adobe Creative Cloud membership (if you do not, you can
still build this mannually, following the guide Phonegap Guid, its not difficult
unless you are accessing the Hardware API), you need to login.
From the root of your project directory enter:

    $ phonegap remote login -u CREATIVE_SUITE_USERNAME@gmail.com -p PASSWORD

Once logged in you will need to run the command to build the app for the platform 
you wish to target by running these commands:

    $ phonegap remote build ios
    $ phonegap remote build android

Each command will take a few minutes to process. If there are any errors the 
command line will not be very helpful but you can log into <https://build.phonegap.com/>
and see the errors there.

### Create iOS and Android Keys
To install the app on your own device you will need to create and sign keys.
To do so follow these steps:

#### iOS
To create signing keys you will need a Macintosh Computer and Xcode installed. You will also need an
Apple Dev Account. Next follow these steps:
1. Open Xcode and plug in device you wish to test on.
2. A pop up will appear asking if you want to use this device for development, click yes and log in
with your developer account.
3. Another popup will appear asking if you would like to 'Export Developer Profile?' click yes and
save it to a place you can remember.
4. Open up 'Keychain Access' from the Mac applications.
    1. Click on 'Certificates' in the category window not under all items, you need to export it
    as .p12
    2. right click 'iPhone Developer: Name....' click export, enter a password (you will need this
    password when you upload to phone gap build)
5. You will also need the Provision file from the Developer Center.
Note: you may have to update this file (re-download it and submit to Phonegap after you
add a new testing device)
6. Once you have both the Certificate file in the .p12 format and the provisionfile you can upload
them to Phonegap Build
7. If you need to manualy add an iOS device to your developer account (say you are
communicating with a tester over the phone), you can do the following:
    1. Plug iOS device into a computer with iTunes
    2. Click on the device, then click on the Serial Number to display the UDID.
    3. Enter the UDID Developer Center.
    4. You may have to update the Provision file on Phonegap Build.

#### Android
To create signing keys for Android, from the command line enter:

    $ keytool -genkey -v -keystore revealMobileApp.keystore -alias flappyPhaserAppKey - keyalg RSA -keysize 2048 -validity 10000

To export the key run:
    $ keytool -exportcert -alias flappyPhaserAppKey -keystore revealMobileApp.keystore |
openssl sha1 -binary | openssl base64

Then upload the .keystore file to Phonegap Build.


### Download and Test on Device
Now just go to Phonegap build and download your app!
