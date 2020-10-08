---
title: "My first attempt at a sublime text 2 plugin and...it works!!"
date: "2013-08-07"
---

I'm currently contracting for a company in Liverpool Street, London. I'm was in the process of taking old CSS and moving, cleaning, tidying and fixing ALL of it, for this specific Magento page. It's a painful task but someone needed to doit!

I was working on a large...sorry I mean HUGE...CSS file and it was all written inline, nearly at minified level!. This is my worst, coding, nightmare come true.

`#ExampleCSSCodeSelector { background: url('../images/thissucks.jpg') no-repeat 0 10px #f00; font-size: 12px; font-family: arial, helvetica, serif; color: #fff; border-radius: 20px 20px 20px 20px;}`_you get what i mean, right? it's difficult to read let a lone see where one style starts/finishes._

I spent about 10 minutes manually spacing, new line-in' and indenting the CSS in to manageable blocks before I gave up and got frustrated...so I [tweeted](https://twitter.com/ScriptedPixels/status/365057832992772098 "my small rant") about it, as you do.

This was when I turned to Google and looked for a ready made plugin to clean up the CSS automatically as manually doing this wasn't going to go down well for me and the people around me. I was more frustrated with why this code was written like this in the first place than anything else; no developer should write code like this...unless they're manually minifying the code (which never happens).

I came across this post - [Sublime Forum](https://www.sublimetext.com/forum/viewtopic.php?f=6&t=2237 "Plugin help") - and was presented with the following two blocks of code:

`import sublime, sublime_plugin, re # toggle a single-line or multi-line formatted css statement class ToggleSingleLineCssCommand(sublime_plugin.TextCommand): def run(self,edit): for region in reversed(self.view.sel()): text = self.view.substr(region) # check if the css statement needs to be expanded or collapsed if re.match('^.*\{.*}\s*$', text): # expand the css statement m = re.search('^(?P.*)\{(?P.*)\;\s*}$', text) multiline = '%s{\n\t%s;\n}' % (m.group('key'), m.group('params').strip().replace('; ', ';\n\t')) self.view.replace(edit, region, multiline) else: # collapse the css statement singleline = ' '.join([x.strip() for x in text.split('\n')]) self.view.replace(edit, region, singleline)`

`{ "keys": ["ctrl+shift+j"], "command": "toggle_single_line_css" }`

There was no explanation on what to do with these so I Google'd again and found what I [needed todo](https://sublimetext.info/docs/en/extensibility/plugins.html#your-first-plugin "How to set up your own plugin"):

From what I remember, here are the steps I took:

1. Select Tools | New Plugin… in the menu
2. Save to Packages/User/NameOfYouPlugin.py.
3. Paste in code from block 1
4. Save
5. Select Preferences | Key Bindings - User
6. Paste the second block of code in between the " \[ \] "'s
7. Save

You then head over to a CSS document with, stupidly, typed CSS and highlight one selector block (it only works one block at a time) and press the keys, ctrl+shift+j, previously assigned to the plugin (these are editable).

You should see the CSS change immediately so it becomes legible, as below:

`#ExampleCSSCodeSelector { background: url('../images/thissucks.jpg') no-repeat 0 10px #f00; font-size: 12px; font-family: arial, helvetica, serif; color: #fff; border-radius: 20px 20px 20px 20px; }` _tabbing doesn't translate too well in to Wordpress_

If you find it doesn't work then drop me a message via the boxes below and I'll find out what I've forgot to mention. I hope this saves you time, as it did me!
