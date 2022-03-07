---
title: "Custom mini image gallery, made with jQuery"
date: "2013-09-30"
description: 'Responsive image gallery with slide-down panel'
tags: ['Responsive', 'CSS', 'HTML', 'JavaScript']
category: 'Web Development'
---

<p class="introduction">Responsive image gallery with slide-down panel</p>

[20/11/2013 UPDATE: This is now responsive and available [here](https://scriptedpixels.co.uk/playground/thumbgallerygrid/thumbGallery.html "Now Responsive :)")]

This is a short tutorial on how I created the mini gallery, seen after clicking the large image, on [LuxDeco's Discover page](https://www.luxdeco.com/discover "The mini gallery on LuxDeco "). I've been asked to write up how I created the gallery as part of another tutorial found [here](https://tympanus.net/codrops/2013/03/19/thumbnail-grid-with-expanding-preview "Grid with expanding preview"). I recommend reading through the tutorial on how to get the whole grid setup before continuing with this article, just so you're up to speed and don't get lost with code examples I use.

To start with I'll create a demo of the actual gallery and thumbnails to show you how it works. I'll then show you where I used the code. This way you'll have the demo and will be able to take it across to your site line by line and implement how you need it.

Here's the demo:

<iframe width="100%" height="600" src="https://jsfiddle.net/scriptedpixels/rphaM/embedded/result,js,html,css" allowfullscreen="allowfullscreen" frameborder="0"></iframe>

The code can be easily taken the JSFiddle above or from below:


THE HTML
```html
<div class="container">

  <div class="PreviewImageContainer">
    <div class="LargePreviewImageContainer">
      <div class="og-fullimg">
        <img src="https://tympanus.net/Tutorials/ThumbnailGridExpandingPreview/images/thumbs/1.jpg" alt="" >
      </div>
    </div>

    <div class="SmallPreviewImageContainer">
      <a class="SmallImage" rel="https://tympanus.net/Tutorials/ThumbnailGridExpandingPreview/images/thumbs/1.jpg" href="#">
        <img class="thumb" src="https://tympanus.net/Tutorials/ThumbnailGridExpandingPreview/images/thumbs/1.jpg">
      </a>
      <a class="SmallImage" rel="https://tympanus.net/Tutorials/ThumbnailGridExpandingPreview/images/thumbs/2.jpg" href="#">
        <img class="thumb" src="https://tympanus.net/Tutorials/ThumbnailGridExpandingPreview/images/thumbs/2.jpg">
      </a>
      <a class="SmallImage" rel="https://tympanus.net/Tutorials/ThumbnailGridExpandingPreview/images/thumbs/3.jpg" href="#">
        <img class="thumb" src="https://tympanus.net/Tutorials/ThumbnailGridExpandingPreview/images/thumbs/3.jpg">
      </a>
    </div>
  </div>

</div> <!-- container -->
```

THE JAVASCRIPT
```js
<script>
  $(document).ready(function(){
    // Assigns a click listener to all dom elements with a class of .SmallImage
    $(".SmallImage").click(function() {
      // Get the thumbnail's larger version. For the tutorial I use the same image.
      // It looks for the image location in the thumbnails REL attribute
      var image = $(this).attr("rel");

      // Hide the large, full sized, image
      $('.og-fullimg').hide();
      // Edit the HTML of the large image to match the thumbnails larger version
      $('.og-fullimg').html('<img src="' + image + '"/>');
      // Lets fade that new large image back in
      $('.og-fullimg').fadeIn('slow');
      // return false to make sure the browser doesn't do anything 'funky' :)
      return false;
      // Done!
    })
  });
</script>
```

THE CSS
```css
/* setup the very basis for the document */
body {
	font-family: 'Helvetica Neue';
	text-align: center;
	font-weight: lighter;
	font-size: 16px;
	background: #dc4600;
	padding-top: 50px;
}

a {
	color: #f0f0f0;
	text-decoration: none;
}

.container {
	clear: both;
	display: block;
	margin: 0 auto;
	max-width: 1024px;
	min-height: 9000px;
	position: relative;
}

/* ANIMATION TRANSITION IF NEEDED */
.animate {
	transition: all 0.35s ease-in-out;
}

.PreviewImageContainer {
	display: inline-block;
	height: 460px;
	position: relative;
	text-align: center;
	width: 330px;
	margin: 0 auto;
	border: solid thin #fb6c29;
	padding: 0 10px;
}

.LargePreviewImageContainer {
	margin-top: 10px;
}

.LargePreviewImageContainer,
.LargePreviewImageContainer .og-fullimg {
	display: inline-block;
	height: 330px;
	text-align: center;
}

.LargePreviewImageContainer .og-fullimg img {
	height: 100%;
	margin: 0 auto;
	max-height: 100%;
	max-width: 100%;
	width: auto;
}

.SmallPreviewImageContainer {
	bottom: -5px;
	display: inline-block;
	height: auto;
	left: 0;
	margin: 0;
	position: absolute;
	text-align: center;
	width: 100%;
	margin-bottom: 10px;
}

.SmallPreviewImageContainer .SmallImage {
	height: auto;
	margin: 0 5px;
	max-width: 100px;
	min-height: 73px;
}

.SmallPreviewImageContainer .thumb {
	max-width: 100px;
	min-height: 73px;
}
```

Now to transfer this in to the tympanus tutorial I pretty much took the HTML line by line in to the tutorial and swapped out the image. It was very simple to insert the new code. You'll notice there really wasn't much to do except wrap the current HTML with the new HTML.

The previous code:
```html
<div class="og-expander">
	<div class="og-expander-inner">
		<span class="og-close"></span>
		<div class="og-fullimg">
			<div class="og-loading"></div>
			<img src="images/2.jpg">
		</div>
		<div class="og-details">
			<h3>Veggies sunt bona vobis</h3>
			<p>Komatsuna prairie turnip wattle seed artichoke mustard horseradish taro rutabaga ricebean carrot black-eyed pea turnip greens beetroot yarrow watercress kombu.</p>
			<a href="https://cargocollective.com/jaimemartinez/">Visit website</a>
		</div>
	</div>
</div>
```

My new code:
```html
<div class="og-expander">
	<div class="og-expander-inner">
		<span class="og-close"></span>

		<div class="PreviewImageContainer">
			<div class="LargePreviewImageContainer">
				<div class="og-fullimg">
					<div class="og-loading"></div>
					<img src="images/1.jpg" alt="" >
				</div>
			</div>

			<div class="SmallPreviewImageContainer">
				<a class="SmallImage" rel="images/1.jpg" href="#">
					<img class="thumb" src="images/1.jpg">
				</a>
				<a class="SmallImage" rel="images/2.jpg" href="#">
					<img class="thumb" src="images/2.jpg">
				</a>
				<a class="SmallImage" rel="images/3.jpg" href="#">
					<img class="thumb" src="images/3.jpg">
				</a>
			</div>
		</div>

		<div class="og-details">
			<h3>Veggies sunt bona vobis</h3>
			<p>Komatsuna prairie turnip wattle seed artichoke mustard horseradish taro rutabaga ricebean carrot black-eyed pea turnip greens beetroot yarrow watercress kombu.</p>
			<a href="https://cargocollective.com/jaimemartinez/">Visit website</a>
		</div>
	</div>
</div>
```

That should pretty much do the trick for you. You'll need to ensure that you've got jQuery pulled in as per normal.

I created the [LuxDeco Discover page](https://www.luxdeco.com/discover "LuxDeco Discover") with this tutorial too. It was built with Magento providing the content for each preview. Initially this was a little to pull off but it fell in to place in the end with the use of jQuery and a lot of appends and data-attributes.

Please, ask questions, highlight issues, complain or provide some constructive feedback below – everything is welcome!

20/11/2013 UPDATE: This is now responsive and available [here](https://scriptedpixels.co.uk/playground/thumbgallerygrid/thumbGallery.html "Now Responsive :)")
