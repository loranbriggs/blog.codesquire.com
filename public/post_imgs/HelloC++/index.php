<?PHP include '../../head.php'; ?>
  <div class='row-fluid'>
    <div id='main-pannel' class='span10'>
      <article class="blog">
        <h1>Hello world C++ / XAML Style</h1>
        <p>
          So you want to build a Windows 8 app and you know some C++ or
          want to know some C++. Here is a quick down and dirty Hello World
          to get you crawling. You have to walk before you run, crawl before
          you walk. Most tutorials either assume to much or too little, so
          I will try to strike a happy medium. You have Visual Studios install
          right? I'l wait here while you go get that.
        </p>
        <p>
          Okay we're back! Start off by making a new project.
        </p>
        <pre>
        <img src="newProject.png" />
        </pre>
        <p>
          Depending on your intial start up of visual studios you might have to
          hunt for the C++ option. Its either under 'Visual C++' or
          'Other Languages' either way we want a 'Blank App (XAML)' under the
          Windows Store tab. We want to make apps to make money right?
        </p>
        <pre>
        <img src="selectProjectType.png" />
        </pre>
        <p>
          Okay now we have our project created. Search around for the 'Solution
          Explorer' tab, it's either on the left or right edge or under the 'View'
          menu. Look around the file structure for a bit, you're going to want
          to evenuatly learn more about all the files. But for now double Click 
          on 'MainPage.xaml' to open up the XAML designer.
        <p>
        <pre>
        <img src="mainPageXaml.png" />
        </pre>
        <p>
          Now that we have the designer screen up and running, click on the
          'Properties' tab, should be near the Solution Explorer or under
          View->Other Windows. Here you will be able to adjust the properties
          of any GUI object you have selected. We are going to go ahead and
          click on the 'Brush' tab and change the backgroun of our app.
        </p>
        <pre>
        <img src="changeProperties.png" />
        </pre>
        <p>
          Lets click the 'Toolbox' tab also near Solution Expoloer or under
          view. This is where you will see nearly every GUI object you will ever
          need. Go ahead and drag and drop a button onto the screen.
        </p>
        <pre>
        <img src="dragButton.png" />
        </pre>
        <p>
          Next find a 'TextBlock' not to be confused with a 'TextBox' thats for
          inputing data. Block for display, box for input.
        </p>
        <pre>
        <img src="textBlock.png" />
        </pre>
        <p>
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
        </p>
        <pre>
        <img src="nameObjects.png" />
        </pre>
        <p>
          Now lets make this application interactive! Go ahead and double click
          on the button that we created and watch the magic! As you see Visual
          Studios will automatically open the 'MainPage.xaml.cpp' and create a
          'Button_Click' fuction for us. How cool is that?
        </p>
        <p>
          Okay we are almost done, I promise. All we have to do is type what c++
          code we want to run when the button is pressed. Visual Studio has a
          feature called 'Intellisense' that automaticaly will try and complete
          variable names for you. Go ahead and try to type 'textOutput' and see what
          happens. It tries to finish it for you! It also has many more features
          We wont go over here. So go ahead and enter the following code:
        </p>
        <pre>
            textOutput->Text = "Hello C++!";
        </pre>
        <pre>
        <img src="cppCode.png" />
        </pre>
        <p>
          And were done! Go ahead and click the green play button next to 'Local
          Machine' to run your new app. You should see it in full screen similar
          to this:
        </p>
        <pre>
        <img src="finalProduct.png" />
        </pre>
        <p>
          That's it! I know it isnt too exciting, but we have came along way since
          in about 10 minutes. Before we conclude lets recap what went over.
        </p>
        <ul>
          <li>Create a new project</li>
          <li>Placed GUI objects</li>
          <li>Adjust objects properties</li>
          <li>Link our XAML with C++ code</li>
          <li>Change text on screen</li>
        </ul>
        <p>
          Not bad for a quick lesson. Say goodebye to console apps forever! Unless
          your a system admin. Stay tuned for future posts to learn even more!
        </p>
        <p>
          Here is my <a href='HelloC++GUI.zip'>code</a> if you need it for
          reference.
        </p>
      </article>
    </div>
    <div id='right-pannel' class='span2'>
      <?PHP include(ROOT.'/right_add_pannel.php'); ?>
    </div>
  </div>
<?PHP include(ROOT.'/foot.php'); ?>
