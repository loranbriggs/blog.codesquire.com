{{{
  "title": "Install OpenCV on Mac OS X",
  "tags": ["OpenCV"],
  "category": "Tutorial",
  "date": "1-6-2015"
}}}

Installing OpenCV for the first time can be daunting and intimidating. While
[OpenCV](http://opencv.org/) is really well documented, it lacks a clear
installation guide for Mac OS X. Here I will attempt to provide a simple guide.
<!--more-->

![Continuous Deployment With Github](/post_imgs/InstallOpenCVMacOSX/opencv_osx.png)

### Why This Guide?
When people first come to OpenCV, they often wonder why there aren't ready to use
library files that you can simple drop into your project and use. And it can
be intimidating to build and make the project your first time, espically if you
don't have a solid Unix background. I will walk through the steps to get OpenCV
running on a Mac here. I won't provided step by step installation steps for the
prerequists because they are well documented on their own sites. Also many of
them may already be installed on your Mac, so before attempting to install any
of them, run the verify commands to see if you can skip any of them.

### Prerequsits
1. GCC 4.4.x. This can be installed a few ways:
    1. From `Xcode` (available from the app store):
    `Xcode menu > Preferences > Downloads > Command Line Tools`
    1. Directly from [Apples Developer Page](https://developer.apple.com/downloads/index.action?=Command%20Line%20Tools%20%28OS%20X%20Mavericks%29) (requres a fre account)

    **To Verify**: `gcc --version` into your terminal
1. [Cmake](http://www.cmake.org/download/) 2.6 or higher

  **To Verfiy**: `cmake --version`
1. [Git](http://git-scm.com/download/)

    **To Verfiy**: `git --version`

### Build / Install
Clone repository, I recomend being in your home directory:

    cd ~
    git clone https://github.com/Itseez/opencv
Enter the `opencv` directroy and create a `release` directory.

    cd opencv
    mkdir release
    cd release
Generate the make files.

    cmake -D CMAKE_BUILD_TYPE=RELEASE -D CMAKE_INSTALL_PREFIX=/usr/local ..
Start the make process

    make
Install the generated library:

    sudo make install
### Verify
Now even if this completes without errors, it doesn't garentee the libarary was
properly built. To verify we will write a quick program that will display an
image.

Create a new directory for this test project. It doesn't matter where because
the install command made it avaiable globaly. I created a direcotry in my user's
home direcotry.

    cd ~
    mkdir OpenCvProjects
    cd OpenCvProjects
    mkdir DisplayImage
    cd DisplayImage

Write the following program to the file `DisplayImage.cpp`

    #include <stdio.h>
    #include <opencv2/opencv.hpp>

    using namespace cv;

    int main(int argc, char** argv )
    {
        if ( argc != 2 )
        {
            printf("usage: DisplayImage.out <Image_Path>\n");
            return -1;
        }

        Mat image;
        image = imread( argv[1], 1 );

        if ( !image.data )
        {
            printf("No image data \n");
            return -1;
        }
        namedWindow("Display Image", CV_WINDOW_AUTOSIZE );
        imshow("Display Image", image);

        waitKey(0);

        return 0;
    }

And write the following into `CMakeLists.txt` file:

    cmake_minimum_required(VERSION 2.8)
    project( DisplayImage )
    find_package( OpenCV REQUIRED )
    add_executable( DisplayImage DisplayImage.cpp )
    target_link_libraries( DisplayImage ${OpenCV_LIBS} )

Now generate the executable:

    cmake .
    make

And to execute provide a path to an image, ex: `~/Pictures/foo.png`

    ./DisplayImage ~/Pictures/foo.png

The first time I ran this it provided an error saying I was missing some
dependicies for the build process. I installed them and tried again and it
worked.

If everything works you should see a simple gui with your image display.
Now that you have OpenCV working, go build something cool! Go to the OpenCV
websites to view their [tutorials](http://docs.opencv.org/doc/tutorials/tutorials.html).
