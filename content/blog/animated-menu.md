---
title: "How I made the animated menu for Asian Football Awards"
date: "2013-08-16"
description: 'How I created the menu for Asian Football Awards website'
tags: ['JavaScript', 'Responsive web development', 'Front-end', 'CSS', 'HTML', 'PHP']
category: 'Web Development'
---

This is going to be a post about how I made the animated menu for [Asian Football Awards](https://www.asianfootballawards.co.uk "Asian Football Awards").

You can see the menu in action below, via [instagram](https://instagram.com/scriptedpixels):

video.instagram, img.instagram {width: 100% !important; height: auto !important;}
_#webdev #wordpress #asianfootballawards #jquery How a simple mobile menu can be animated. Blog post to follow with sample code by @[scriptedpixels](https://instagram.com/scriptedpixels)_

It was a simple idea but, to be honest, it did take me a little while to figure out a way to make the menu act how I wanted it too. I wanted both drop down menus to know if the other was open and if it was/wasn't then to close and then open. You can see this happening in the video above.

```html
<!-- mobile menu -->
<div id="mobile_menu" class="col span_12">
  <a href="" id="mobileMenuButton" >Menu</a>
  <!-- Wordpress Menu -->
  <?php wp_nav_menu(); ?>
</div>

<!-- share -->
<div id="share" class="col span_12">
  <a href="#" class="hover" onclick="return false;" >Share</a>
  <!-- AddThis Button BEGIN -->
  <div class="addthis_toolbox addthis_default_style ">
  <a class="addthis_button_facebook_like" fb:like:layout="button_count"></a>
  <a class="addthis_button_tweet"></a>
  <a class="addthis_button_pinterest_pinit"></a>
  <a class="addthis_counter addthis_pill_style"></a>
  </div>
  <!-- AddThis Button END -->
</div>
```

At the very top I've created a wrapper called "mobile_menu" that contains the MENU button with text as well as a line of PHP that brings in my WordPress Menu. This next line of PHP brings in the list HTML used for the main menu:

```html
<?php wp_nav_menu(); ?>

<div class="menu">
  <ul>
    <li> menu item 1 </li>
    <li> menu item 2 </li>
    <li> menu item 3 </li>
  </ul>
</div>
```

The- items are not literal in this example...clearly.

You can see in the code above that I've added the "Add this" social buttons in there too just so you can see where the icons were coming from and how I added them in to the site._

Both the Menu and Share This are structured the same. They have a wrapping DIV and a "Button" inside with a DIV following that acts as the list container. I've created a plain example below:

```html
<div id="mobile_menu" >
  <a href="#" id="mobileMenuButton" >Menu</a>
  <ul>
    <li> </li>
  </ul>
</div>

<div id="share" >
  <a href="#" id="" >Share</a>
  <ul>
    <li> </li>
  </ul>
</div>
```
_as a note to self; I've just thought of a simpler way to implement this, (face palm moment)!_

That's the basic HTML. The next bunch of code will be the JavaScript. I already know it's a lot lengthier than needed but I think it's good for me to post what I originally did so I know not to do it again!

The theory behind it was that if a button was clicked it would look at the state of the other menu and then close it if it was open. The clicked menu would then open when it knew the other menu was closed. Sounds a lot simpler when spelling it out but I did find it a little trickier when writing it, for some reason.

```js
$(document).ready(function(){
  var menu        = $("#mobile_menu .menu ul");
  var share       = $('.addthis_toolbox.addthis_default_style');

  $("#mobileMenuButton").bind('click', function(event) {
    event.preventDefault();
    if (share.is(":visible")) {
      share.slideUp( 300 );
    };
    if (menu.is(":visible")) {
      menu.slideUp(300, 'easeInOutSine', {
        complete:function(){
          $(this).css('display','');
        }
      });
    } else {
        menu.slideDown(300, 'easeInOutSine');
    };
  });

  $('.hover').bind('click', function(event) {
    event.preventDefault();
    if (menu.is(":visible")) {
      menu.slideUp( 300 );
    };
    if (share.is(":visible")) {
      share.slideUp(500, 'easeInOutSine', {
        complete:function(){
          $(this).css('display','');
        }
      });
    } else {
      share.slideDown(300, 'easeInOutSine');
    };
  });
});
```

So... I setup two global variables on Doc.Ready so I knew I could reference the state of each menu quickly. I then "bind" a click event to each button.

The code 1st looks to see if the "other menu" is ":visible". If it is then it tells the other menu to close ("slide up"). It also looks to see if their own lists are open. It does this by looking to see if their child lists are ":visible". If it is then it tells it to close (slide up). If it isn't, "else", then it tells its child list to open ("slide down").

It's as simple as that, and as I said earlier, it can be written in a better way than I've just written but I want to share this as it's how I wrote the code then and I know now that I can write better, cleaner, code!

I hope this is of use to some, and I hope you can see how it can be written in a cleaner way. I'll be posting again this weekend and I hope to post the cleaner and simpler code.
