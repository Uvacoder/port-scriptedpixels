---
title: "My custom 24 column responsive grid"
date: "2013-09-04"
description: 'A custom 24 responsive grid'
tags: ['Responsive', 'CSS', 'HTML']
category: 'Web Development'
---

I made this a little while back and have since used it in all my new website builds.

Here it is in [action](https://scriptedpixels.co.uk/playground/basicresponsivegrid/ "Scripted Pixels 24 column demo")

WHY? I was working a late night on a project and decided to investigate some general frameworks and twitter bootstrap was appearing on all the blogs, plus I had heard a lot, good and bad, about it. With the majority of reviews being good; I decided to download it and give it a try.

The steps I took after were pretty much:

Downloaded -> unzipped -> pulled in to Sublime 2 -> a few minutes spent looking at all the classes in the .CSS -> confused -> not much documentation -> tried a small integration test -> deleted.

Why did such a greatly talked about framework documented so little...and full of bloat CSS?!

I was confused and annoyed. The website was pretty poor to navigate (it may have changed since I last used it) and
finding basic documentation was painful.

<article-image src="blog/bootstrapCss1.jpg" alt="bootstrap css overview" ></article-image>

_The standard css for bootstrap. 1080 lines of CSS, most of which won't be used!_

The small integration test I did concluded my efforts with this "framework". I was possibly just impatient with the whole process but there was one thing that I knew I would be doing if I had continued to use it: **overwriting CSS**.

I could've spent hours overwriting CSS ensuring current CSS wasn't being overwritten by bootstrap's and vice versa. When it comes to coding; I find it tedious having to repeat tasks like that, tasks that shouldn't be this difficult or long winded.

**If it's something that's being repeated over and over then there's got to be an efficient way of doing it once**.

HOW? I started off building my own framework by going back to the basics and getting some 'resets' in place.

Kudos to: [Eric Meyer](https://meyerweb.com/eric/tools/css/reset/ "Eric Meyer Reset") for his CSS reset, it's used **everywhere!**, [Responsive.gs](https://www.responsivegridsystem.com "Responsive Grid System") for the basic structure, to the [TutPlus.com](https://tutsplus.com) network for their amazing article on [A basic responsive Grid](https://webdesign.tutsplus.com/tutorials/htmlcss-tutorials/a-basic-responsive-grid-plus-handy-css3-media-query-reporter/) and finally thanks to: [www.snook.ca](https://snook.ca/archives/html_and_css/font-size-with-rem "Sizing with REM's")

_You'll notice my version is nearly the same as all three links and I can admit that at first I did copy all their code, which I then manipulated and made my own_

My slightly modified reset.css file contains the following:

```css
/* Reset */
a, abbr, acronym, address, applet, article, aside, audio, b, big, blockquote, body, caption, canvas, center, cite, code, dd, del, details, dfn, dialog, div, dl, dt, em, embed, fieldset, figcaption, figure, form, footer, header, hgroup, h1, h2, h3, h4, h5, h6, html, i, iframe, img, ins, kbd, label, legend, li, mark, menu, nav,object, ol, output, p, pre, q, ruby, s, samp, section, small, span, strike, strong, sub, summary, sup, tt, table, tbody, textarea, tfoot, thead, time, tr, th, td, u, ul, var, video {
	font-family: inherit;
	font-weight: inherit;
	font-style: inherit;
	vertical-align: baseline;
	white-space: normal;
	text-align: left;
	margin: 0;
	padding: 0;
	border: 0;
	outline: 0;
	background: transparent;
}

article, aside, details, figcaption, figure, footer, header, hgroup, menu, nav, section {
	display: block;
}

ol, ul {
	list-style: none;
}

blockquote, q {
	quotes: none;
}

:focus {
	outline: 0;
}

table {
	border-collapse: collapse;
	border-spacing: 0;
}
/*
	SET ALL ELEMENTS BOX-SIZING TO BORDER-BOX
	If you need support for IE7 and lower use polyfill: https://github.com/Schepp/box-sizing-polyfill
*/

* {
	-webkit-box-sizing: border-box;
	-moz-box-sizing: border-box;
	box-sizing: border-box;
}

body {
	-webkit-text-size-adjust: 100%;
}
```

I added a fonts.css to setup my custom fonts and a global font size. Ensuring that I don't need repeat CSS setting a font-family multiple times in multiple places in the project. This works the same for setting the font-size too - reducing the tedious task of ensuring all font sizes are the same throughout the projects files.

What is REM? CSS3 introduces a few new units, including the rem unit, which stands for "root em". If this hasn't put you to sleep yet, then let's look at how rem works.

The em unit is relative to the font-size of the parent, which causes the compounding issue. The rem unit is relative to the root—or the html—element. That means that we can define a single font size on the html element and define all rem units to be a percentage of that.

```css
html { font-size: 62.5%; }
body { font-size: 1.4rem; } /* =14px */
h1   { font-size: 2.4rem; } /* =24px */
```

I'm defining a base font-size of 62.5% to have the convenience of sizing rems in a way that is similar to using px.

But what pitiful browser support do we have to worry about?

You might be surprised to find that browser support is surprisingly decent: Safari 5, Chrome, Firefox 3.6+, and even Internet Explorer 9 have support for this. The nice part is that IE9 supports resizing text when defined using rems. (Alas, poor Opera (up to 11.10, at least) hasn't implemented rem units yet.)

What do we do for browsers that don't support rem units? We can specify the fall-back using px, if you don't mind users of older versions of Internet Explorer still being unable to resize the text (well, there's still page zoom in IE7 and IE8). To do so, we specify the font-size using px units first and then define it again using rem units.

```css
html { font-size: 62.5%; }
body { font-size: 14px; font-size: 1.4rem; } /* =14px */
h1   { font-size: 24px; font-size: 2.4rem; } /* =24px */
```

And voila, we now have consistent and predictable sizing in all browsers, and resizable text in the current versions of all major browsers.

HOW TO MAKE IT WORK? My main style sheet, named styles.css, contains the CSS for the main site when viewed on smaller screens - I choose, as recommended by many now on the web, to work from the smaller screen sizes up - ensuring that our mobile users aren't downloading the whole desktop version of the site with elements hidden. This would waste our visitors time as well as resources (data-limits on network tariff's is a biggie).

A file called "mediaqueries.css" plays the main role here for me. It controls the layout for any given screen resolution chosen. This file works from the smallest screen size up. The initial media query sets the breakpoint to optimise the layout for a screen that has a max-width of 480px. This is usually associate with mobiles in landscape. You can enhance these media-queries further by accessing the orientation as well as detecting high resolution (retina) screens to really make sure you've provided the best user experience. My standard code is as follows:

```css
/* -------------- SIZE 320 to 480 ----------------- */
@media only screen and (min-width: 320px) {
	#wrapper {
		max-width: 480px;
	}
}
```

A file called "responsivegrid.css" holds all the magic of the grid. It's created by [Denis Leblanc](https://www.responsivegridsystem.com) and provides the classes that control the width of the columns. Unlike twitter bootstrap's version my file is only 64 lines of code - without comments.

`.row` Add this class to any element that spans the entire width of your container to clear any floating child elements. Also allows you to define spacing between rows.

`.col` Add this class to child elements of a row to float left and add the default gutter width. This class must be used in conjuction with one of the span classes below.

```css
.span_1, .span_2, .span_3, .span_4, .span_5, .span_6, .span_7, .span_8, .span_9, .span_10, .span_11, .span_12
```

Add one of these classes to a each col element to set it’s fluid width. On smaller screen sizes these elements will default to stack vertically.

`.row, .col, .clr, .group` Add either of these classes to an element to clear it’s floating children. Uses the 'clearfix' method.

Things to remember `.col:first-child` The last col element gets the right margin removed with the col:first-child pseudo selector in order to fit within it’s parent element along with it’s siblings. The browser support for this goes as far back as IE7 so if you’re one of those innocent bastards still having to support IE6 then you’ll need to add an additional last class to your markup and CSS to remove the right margins.

To ensure the columns only apply their widths when needed I wrap the width's for each span in a media query

```css
/*
	APPLY GRID WHEN ON SCREENS > TABLETS
*/
@media (min-width: 768px) {
	.span_1 { width: 2.25%; }
	.span_2 { width: 6.5%; }
	.span_3 { width: 10.75%; }
	.span_4 { width: 15.0%; }
	.span_5 { width: 19.25%; }
	.span_6 { width: 23.5%; }
	.span_7 { width: 27.75%; }
	.span_8 { width: 32.0%; }
	.span_9 { width: 36.25%; }
	.span_10 { width: 40.5%; }
	.span_11 { width: 44.75%; }
	.span_12 { width: 49.0%; }
	.span_13 { width: 53.25%; }
	.span_14 { width: 57.5%; }
	.span_15 { width: 61.75%; }
	.span_16 { width: 66.0%; }
	.span_17 { width: 70.25%; }
	.span_18 { width: 74.5%; }
	.span_19 { width: 78.75%; }
	.span_20 { width: 83.0%; }
	.span_21 { width: 87.25%; }
	.span_22 { width: 91.5%; }
	.span_23 { width: 95.75%; }
	.span_24 { width: 100%; }
}
```


This current example, and one that I hardly change, "activates" the column layout when the screen width is at a minimum width of 768 pixels. Originally, this was the set transitional width for when viewports would transition from landscape to tablet.

There's now better ways to check for what device your visitors are using but you're currently just looking to use this media query to enable a column layout and only when your content needs it.

By using media-queries/breakpoints and the "responsivegrid.css" rules I can create multiple layouts, as per any grid/framework.

Some small notes about this custom grid:

1. Set the widths of images to be `max-width:100%;` so they don't scale larger than their original dimensions
2. Set the width of the outer most wrapper, normally a `DIV` or `section` called "wrapper or container" to 100% so it's always filling the whole width of the page.
3. Removed any margins from the 1st column to ensure all columns fit in, something that is sometimes overlooked

WRAP IT UP! I feel that this could go on for a while, I think I've covered everything I needed...and more. I hope this is of some use to someone out there. I'm updating the grid as I continue to work with it, so I decided to add it to [GitHub](https://github.com/kambanwait/BasicResponsiveGrid "Git Hub Link") for people to keep track of changes and updates.

I'm currently working on a Wordpress version too so trying to include some extra basic elements in to the current version.

Please, ask questions, highlight issues, complain or provide some constructive feedback below - everything is welcome!
