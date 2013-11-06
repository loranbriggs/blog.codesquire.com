{{{
  "title": "Build Your First Windows 8 C++ App",
  "tags": ["C++", "Windows8", "Xaml"],
  "category": "Tutorial",
  "date": "10-30-2013"
}}}

So you want to build a Windows 8 app and you know some C++ or
want to know some C++. Here is a quick down and dirty Hello World
to get you crawling.<!--more--> You have to walk before you run, crawl before
you walk. Most tutorials either assume to much or too little, so
I will try to strike a happy medium. You have Visual Studios install
right? I'l wait here while you go get that.

![New Project](/post_imgs/HelloC++/newProject.png)

Depending on your intial start up of visual studios you might have to
hunt for the C++ option. Its either under 'Visual C++' or
'Other Languages' either way we want a 'Blank App (XAML)' under the
Windows Store tab. We want to make apps to make money right?

![Select Project Type](/post_imgs/HelloC++/selectProjectType.png)

Okay now we have our project created. Search around for the 'Solution
Explorer' tab, it's either on the left or right edge or under the 'View'
menu. Look around the file structure for a bit, you're going to want
to evenuatly learn more about all the files. But for now double Click 
on 'MainPage.xaml' to open up the XAML designer.

![Main Page Xaml](/post_imgs/HelloC++/mainPageXaml.png)

Now that we have the designer screen up and running, click on the
'Properties' tab, should be near the Solution Explorer or under
View->Other Windows. Here you will be able to adjust the properties
of any GUI object you have selected. We are going to go ahead and
click on the 'Brush' tab and change the backgroun of our app.

![Change Properties](/post_imgs/HelloC++/changeProperties.png)

Lets click the 'Toolbox' tab also near Solution Expoloer or under
view. This is where you will see nearly every GUI object you will ever
need. Go ahead and drag and drop a button onto the screen.

![Drag Button](/post_imgs/HelloC++/dragButton.png)

Next find a 'TextBlock' not to be confused with a 'TextBox' thats for
inputing data. Block for display, box for input.

![Text Block](/post_imgs/HelloC++/textBlock.png)

Now for this simple tutorial that's all the GUI compnents we are
going to use. Go ahead and play around with the Propeties tab
and resize the text and color perhaps. You will notice as you do so
the bottom window which displays the XAML code will be changing as
you make changes to the GUI. Think of this as like html code that you
are manipulating with the GUI designer. You can write straight XAML
if you are brave enough. But we will want to edit this XAML code.
We are going to want to give our button and textblock a name so we
can refrence them from the c++ file. Lets name them 'button' and
'textOutput' if you want to hide the text block by default just delete
its 'Text' value (optional).

![Name Objects](/post_imgs/HelloC++/nameObjects.png)

Now lets make this application interactive! Go ahead and double click
on the button that we created and watch the magic! As you see Visual
Studios will automatically open the 'MainPage.xaml.cpp' and create a
'Button_Click' fuction for us. How cool is that?

Okay we are almost done, I promise. All we have to do is type what c++
code we want to run when the button is pressed. Visual Studio has a
feature called 'Intellisense' that automaticaly will try and complete
variable names for you. Go ahead and try to type 'textOutput' and see what
happens. It tries to finish it for you! It also has many more features
We wont go over here. So go ahead and enter the following code:

<pre>
    textOutput->Text = "Hello C++!";
</pre>

![C++ Code](/post_imgs/HelloC++/cppCode.png)

And were done! Go ahead and click the green play button next to 'Local
Machine' to run your new app. You should see it in full screen similar
to this:

![Final Product](/post_imgs/HelloC++/finalProduct.png)

That's it! I know it isnt too exciting, but we have came along way since
in about 10 minutes. Before we conclude lets recap what went over.

<ul>
    <li>Create a new project</li>
    <li>Placed GUI objects</li>
    <li>Adjust objects properties</li>
    <li>Link our XAML with C++ code</li>
    <li>Change text on screen</li>
</ul>

Not bad for a quick lesson. Say goodebye to console apps forever! Unless
your a system admin. Stay tuned for future posts to learn even more!

Here is my <a href='/downloads/HelloC++GUI.zip'>code</a> if you need it for
reference.

