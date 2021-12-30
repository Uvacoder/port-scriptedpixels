---
title: "SVG image Fallback"
date: "2015-05-18"
description: 'How to feelback to .png when transitioning to .svg images'
tags: ['SVG', 'Front-end', 'CSS']
category: 'Web Development'
---

Using SVG's is awesome. When they break, which isn't that often, they can be a pain.

To ensure I don't get 'stung' when using SVG's as background images in Sass/CSS, I created the following Sass mixin:

```css
@mixin svgWithFallback( $imageName ) {
  background-image: url('../images/svg/#{$imageName}.png');
  background-image: url('../images/svg/#{$imageName}.svg');
}
```

This is pretty self-explanatory but what it does is ensure that there's a '.png' image for older browsers, and 
devices, that don't yet support svg's.

To use it, you include the following when setting a 'background-image' :

`@include svgWithFallback( imageNameNoExtension );`

The name of the image is passed within the brackets. I've chosen not to include the extension as it's already set in 
the sass mixin. This can be changed to anything that you wish to use.

The CSS that gets rendered is pretty clean, I think:

```css
selector {
  background-image: url('../images/svg/searchIcon.png');
  background-image: url('../images/svg/searchIcon.svg');
}
```
 

I use the above mainly for icons and logo's, to be honest. I'll be posting more about SVG and images tomorrow. You 
may have noticed that I've not written a blog post for some time; I'm looking to change that, dramatically, from now on.

_I'll also be replying to a lot of questions asked in previous blog posts, better late than never..._
