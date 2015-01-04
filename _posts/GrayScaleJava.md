{{{
  "title": "Converting an Image to Gray Scale in Java",
  "tags": ["Java", "Image Processing"],
  "category": "Tutorial",
  "date": "1-2-2015"
}}}

To manipliate an image you could use one of many image libraries, but they 
often add a lot of bulk. Here I will show you how to implement your own simple 
algorithm to convert an image to Gray Scale, <!--more-->

![Gray Scale image in Java](/post_imgs/GrayScaleJava/halfredjava.jpg)

*Prerequisites:*

1. [Java](http://www.oracle.com/technetwork/java/javase/downloads/index.html),
yep that's all.

### Just simple Java
Here is a short java program that will convert an image to Gray Scale. Notice
the method accepts a Buffered Image instead of a file. This is because it will
be used later in a larger Image Processing Library writen in pure java. So
without any futher ado, here is the short program to convert an image:

    import java.awt.image.BufferedImage;
    import java.awt.Color;
    import java.io.File;
    import java.io.IOException;
    import javax.imageio.ImageIO;

    public class GrayScale {

      public static void toGray(BufferedImage image) {
        int width = image.getWidth();
        int height = image.getHeight();
        for(int i=0; i<height; i++){
          for(int j=0; j<width; j++){
            Color c = new Color(image.getRGB(j, i));
            int red = (int)(c.getRed() * 0.21);
            int green = (int)(c.getGreen() * 0.72);
            int blue = (int)(c.getBlue() *0.07);
            int sum = red + green + blue;
            Color newColor = new Color(sum,sum,sum);
            image.setRGB(j,i,newColor.getRGB());
          }
        }
      }

      static public void main(String args[]) throws IOException {
        File input = new File("red.jpg");
        BufferedImage image = ImageIO.read(input);
        toGray(image);
        File output = new File("grayscale-" + input.getName());
        ImageIO.write(image, "jpg", output);
      }
    }

### Input
To test this program I used the following photo:
![Jenna Red](/post_imgs/GrayScaleJava/red.jpg)

[Image credit](https://www.flickr.com/photos/robnas/5525365684/)

### The Concept
The basic idea of this program is to loop through every pixel of the photo,
grab the RGB color, split it into the three color values, use the
[Luminosity](http://www.johndcook.com/blog/2009/08/24/algorithms-convert-color-grayscale/)
formula to convert to grayscale, and reset the pixel value to the new gray color
The results:

### The output:
![Jenna Gray](/post_imgs/GrayScaleJava/grayscale-red.jpg)

### Inspiration
I was inspired to figure out how to do this because I am interested in creating
an image processing library written entirely in Java. I have already created
one in Java but it uses the OpenCV bindings in order to do tempalte matching.
While it works, and fast, what I don't like is the complexity to link the
necessary OpenCV library. I would like to create a library where you can just
drop in the Jar file and it works. Converting images to grayscale is the first
step in the [template matching](http://docs.opencv.org/doc/tutorials/imgproc/histograms/template_matching/template_matching.html)
proscess. Stay tuned to my progress of this
library.

#### Credit
The original algrorithm I modified can be found [here](http://www.tutorialspoint.com/java_dip/grayscale_conversion.htm)

<div class="gplus">
<!-- Place this tag in your head or just before your close body tag. -->
<script type="text/javascript" src="https://apis.google.com/js/plusone.js"></script>

<!-- Place this tag where you want the widget to render. -->
<div class="g-post" data-href="https://plus.google.com/101579508735882012098/posts/aweETVUWufA"></div>
</div>
