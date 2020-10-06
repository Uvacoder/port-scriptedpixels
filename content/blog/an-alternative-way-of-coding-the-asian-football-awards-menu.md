---
title: "An alternative way of coding the Asian Football Awards menu"
date: "2013-08-21"
---

As promised, although it's a little later than I said it would be, here's my take on how I should have coded the menus for the Asian Football Awards website, for mobile particularly, I [posted about last week](/how-i-made-the-animated-menu-for-asian-football-awards/).

I've created a [JSFiddle](http://jsfiddle.net/scriptedpixels/LtCk7) demo so you can grab the HTML, JS, CSS and see it in action:

<iframe width="100%" height="300" src="http://jsfiddle.net/scriptedpixels/LtCk7/embedded/result,js,html,css/" allowfullscreen="allowfullscreen" frameborder="0"></iframe>

I've added comments in the above example but here's a break down of what's going on:

1. The click function is bound to all elements with the class '.nav'
2. The '.nav' item that's been clicked is stored in "clickedIcon"
3. I then need the 'REL' and 'ID' of the clicked menu element
4. I use the ID to get the relative menu for the clicked menu
5. I also use the current 'ID' & 'REL' to get the "other" menu, that wasn't clicked, I'm able to get the 'other' 'REL' and 'ID'
6. With these I get the other relative menu for the non-clicked menu item
7. I check to see IF the other menu is open. If it is I go ahead and close it and remove the 'hover' class from the other clicked menu item
8. At the same time I'm checking to see if the menu I've clicked has the 'hover' class. If it does I know the menu is already open and I need to close it. If it doesn't have the class then I know I need to open it and add the class - that's the IF ELSE statement.

It should be pretty clear on how it all works. I've added a "live demo" video below so you can see it in action. (This was taken from a previous version of my portfolio site)

video.instagram, img.instagram {width: 100% !important; height: auto !important;}   
_#webdev #wordpress how a previous iteration of my site worked with a, better thought out, #jQuery nav (comparing to my previous code/video for Asian Football Awards) by @[scriptedpixels](http://instagram.com/scriptedpixels)_