{{{
  "title": "Privacy Statement Windows 8 Javascript App",
  "tags": ["C++", "Windows 8", "Javascript"],
  "category": "Windows 8",
  "date": "11-3-2013"
}}}

If your Windows 8 app connects to the web, it must have a privacy statement.
But you knew that right? That is problem how you found this article. So I am
going to show you today how to set up a privacy statement in your settings
charm.<!--more-->

Taking from the <a href="http://msdn.microsoft.com/en-us/library/windows/apps/Hh780611.aspx">
microsoft</a> site we use this template:

    &lt;!doctype HTML&gt;
    &lt;html&gt;
    &lt;head&gt;
        &lt;title&gt;Default settings flyout&lt;/title&gt;
    &lt;/head&gt;
    &lt;body&gt;
        &lt;!-- BEGINTEMPLATE: Template code for an empty Settings Flyout. --&gt;
        &lt;!-- Each settings flyout should be defined in its own HTML file. --&gt;
        &lt;!-- Set the width to 'narrow' for a narrow settings flyout. --&gt;
        &lt;!-- Set the background color for the header to the background color defined for your
            app tile in the manifest. --&gt;
        &lt;div id="defaultsDiv" data-win-control="WinJS.UI.SettingsFlyout" aria-label="App defaults settings flyout"
                data-win-options="{width:'wide'}"&gt;
            &lt;div class="win-header" style="background-color:#dbf9ff"&gt;
                &lt;button type="button" onclick="WinJS.UI.SettingsFlyout.show()" class="win-backbutton"&gt;&lt;/button&gt;
                &lt;div class="win-label"&gt;Defaults&lt;/div&gt;
                &lt;img src="images/smallTile.png" style="position: absolute; right: 40px;"/&gt;
            &lt;/div&gt;
            &lt;div class="win-content"&gt;
                {Defaults content here}
            &lt;/div&gt;
        &lt;/div&gt;
        &lt;!-- ENDTEMPLATE --&gt;
    &lt;/body&gt;
    &lt;/html&gt;

Two things you need to do with this above template. 1: On the 12th line where
it says, "id='defaultsDiv'" replace that with whatever you want to call it. I
called my "privacyDiv" and 2: fill in your content. I used this:

    &lt;!doctype HTML&gt;
    &lt;html&gt;
    &lt;head&gt;
        &lt;title&gt;Help settings flyout&lt;/title&gt;
    &lt;/head&gt;
    &lt;body&gt;
        &lt;!-- BEGINTEMPLATE: Template code for an empty Help Flyout. --&gt;
        &lt;!-- Each settings flyout should be defined in its own HTML file. --&gt;
        &lt;!-- Set the width to 'narrow' for a narrow settings flyout. --&gt;
        &lt;!-- Set the background color for the header to the background color defined for your
            app tile in the manifest. --&gt;
        &lt;div id=&quot;privacyDiv&quot; data-win-control=&quot;WinJS.UI.SettingsFlyout&quot; aria-label=&quot;Help settings flyout&quot;
                data-win-options=&quot;{width:'wide'}&quot;&gt;
            &lt;div class=&quot;win-header&quot; style=&quot;background-color:#dbf9ff&quot;&gt;
                &lt;button type=&quot;button&quot; onclick=&quot;WinJS.UI.SettingsFlyout.show()&quot; class=&quot;win-backbutton&quot;&gt;&lt;/button&gt;
                &lt;div class=&quot;win-label&quot;&gt;Help&lt;/div&gt;
                &lt;img src=&quot;images/smallTile.png&quot; style=&quot;position: absolute; right: 40px;&quot;/&gt;
            &lt;/div&gt;
            &lt;div class=&quot;win-content&quot;&gt;
                &lt;h3&gt;Privacy Policy&lt;/h3&gt;
                &lt;p&gt;I hope the following statements will help you understand how this app will collect, use and protect your information.
                It will not use or share your information with anyone except as described in this Privacy Policy.&lt;/p&gt;
                &lt;h3&gt;Please uninstall this APP if you do not agree with this privacy statement. &lt;/h3&gt;
                &lt;h3&gt;What information is collected?&lt;/h3&gt;
                &lt;p&gt; This app does not collect personal information outside of the analytics collected by the Windows Store which is called the UDID
                and IP Addresses which are shared with Microsoft PubCenter as shown below.
                No other information is collected. &lt;/p&gt;
                &lt;h3&gt;How is your information used?&lt;/h3&gt;
                &lt;p&gt;If there is an advertisement banner, then the UDID information is collected in order to determine the aggregate number of unique
                devices using the APP, to track total usage, analyze data, and communicate with you more effectively.
                Also, the UDID and IP address are used to show the in-APP advertisement. &lt;/p&gt;
                &lt;h3&gt;How is your information shared?&lt;/h3&gt;
                &lt;p&gt; Both the UDID and IP address are shared with Microsoft PubCenter. This is needed to show the in-APP advertisement.
                Other information may be collected with further communications with you.&lt;/p&gt;
                &lt;p&gt;This app does not collect any information about you or any users, except analytics data as described below.&lt;/p&gt;
                &lt;h3&gt;Analytics&lt;/h3&gt;
                &lt;p&gt;Analytics data is collected by Microsoft Research, as described in
                &lt;a href=&quot;http://research.microsoft.com/en-us/UM/legal/TouchDevelopPS_4-2012%20v2.htm&quot;&gt;Privacy Statement for TouchDevelop&lt;/a&gt;. 
                Analytics data collection cannot be disabled. Microsoft does not store any information that personally identifies you.&lt;/p&gt;
                &lt;h3&gt;Questions?&lt;/h3&gt;
                &lt;p&gt;Any questions about this privacy policy use the address supplied in the support page &lt;/p&gt;
            &lt;/div&gt;
        &lt;/div&gt;
        &lt;!-- ENDTEMPLATE --&gt;
    &lt;/body&gt;
    &lt;/html&gt;

Okay so now we have our pivacy policy we want to display, save this in a file privacy.html and place it in the same directory as default.html of you
JavaScript application. Next in your default.js file, at the end just above app.start(); I enterted the following:

    WinJS.Application.onsettings = function (e) {
        e.detail.applicationcommands = {
        "privacyDiv": { title: "Privacy", href: "/privacy.html" }
        };
        WinJS.UI.SettingsFlyout.populateSettings(e);
    };

And thats it, stick that in your simulator and try it!
