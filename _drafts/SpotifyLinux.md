{{{
  "title": "Install Spotify on Linux (Debian/Ubuntu/Mint)",
  "tags": ["Linux", "Bash", "Music"],
  "category": "Tutorial",
  "date": "3-1-2014"
}}}

Love Spotify and Linux, here is a the install process simplified.<!--more-->

![Continuous Deployment With Github](/post_imgs/ContinuousDeployment/GithubNode.png)

*Prerequisites:*

1. `sudo` access

Hello, first off I would like to say I am taking it easy this week. By already
missing my typicaly Friday post but here I am bright and early with a Monday
post! If you enjoy Spotify and the entirely long process [here](https://www.spotify.com/us/download/previews/)
is too much for you, I have simplified it. Okay, okay I know it is not long or
hard, but I made a script to automate it for you, YAY!!

So without further ado here it is:

<script src="https://gist.github.com/loranbriggs/9317836.js"></script>

You can either copy and paste this into any text editor or you can clone it:

    git clone https://gist.github.com/9317836.git

Once you have a local copy of the script you can run it as so:

    sudo bash install-script.bash

Some processes will fly by and once it is done you should be able to open up
spotify from Linux Menu and enjoy!
