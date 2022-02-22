---
title: "Thumbnail grid with expanding preview and mini gallery"
date: "2013-11-19"
description: 'My version of a thumbnail gallery grid'
tags: ['JavaScript', 'Responsive']
category: 'Web Development'
---

I've been asked how I created my own version of [this](https://tympanus.net/codrops/2013/03/19/thumbnail-grid-with-expanding-preview), so I decided to document it after it was put in to production here at [LuxDeco Discover page](https://luxdeco.com/discover)

I decided to finally create my own version of the Grid for you to download.

I've got a working example [here](https://scriptedpixels.co.uk/playground/thumbGalleryGrid.html). You can also download the code from [this link](https://www.putlocker.com/file/5204FA1C7F182E7D).

To show you what the structure of the new mini-gallery I drew at the image below. It may not be as clear as it could be, but I think it's a good rough outline.

<article-image src="blog/IMG_0302-1024x768.png" alt="preview"></article-image>


## The grid modifications:

I started off with editing a few bits of the Grid JavaScript first. I've included comments in the 'grid.js' file and I've pasted some key parts below. The changes start from line 341 in Grid.js:

```js
// PREPARE THE LARGE GALLERY IMAGE FIRST
  // The image itself. The SRC is set later on in the code
  this.$fullSizeImg			 	 = $('<img src="" alt="" />');
  // A div for the large gallery image
  this.$fullSizeImgContainer		 = $('<div class="og-fullimg"></div>').append(this.$fullSizeImg, this.$loading );

// PREPARE THE thumbnails
  // Thumbnails IMG SRC first to appen later to relative wrapper
  this.$thumbnailSrcOne			 = $('<img class="thumb" rel="" src="">');
  this.$thumbnailSrcTwo			 = $('<img class="thumb" rel="" src="">');
  this.$thumbnailSrcThree			 = $('<img class="thumb" rel="" src="">');
  // Anchor tag for thumbnail 1
  this.$smallThumbContainerOne	 = $('<a class="SmallImage" href="#"></a>').append( this.$thumbnailSrcOne );
  // Anchor tag for thumbnail 2
  this.$smallThumbContainerTwo	 = $('<a class="SmallImage" href="#"></a>').append( this.$thumbnailSrcTwo );
  // Anchor tag for thumbnail 3
  this.$smallThumbContainerThree	 = $('<a class="SmallImage" href="#"></a>').append( this.$thumbnailSrcThree );

// WRAP UP THE LARGE IMAGES AND THE THUMBNAILS
  // A div to wrap the large image above
  this.$largePreviewImageContainer = $('<div class="LargePreviewImageContainer"></div>').append(this.$fullSizeImgContainer);

  // A div to wrap the thumbnails
  this.$smallPreviewContainer 	 = $('<div class="SmallPreviewImageContainer"></div>').append(this.$smallThumbContainerOne, this.$smallThumbContainerTwo, this.$smallThumbContainerThree);

  // A div to wrap everything up
  this.$previewLargeContainer 	 = $('<div class="PreviewImageContainer"> </div>').append( this.$largePreviewImageContainer, this.$smallPreviewContainer );
```

What I've basically done it set up all elements and then appended them to the relative wrapping containers. I've then appended the wrapping containers to the large container. It's written backwards as I need to ensure I've declared the to-be-appended items before appending them to any other elements.

The next step is to get all the data from the clicked image. This clicked image contains A LOT of data. It has our title, copy, href's and our image paths.

```js
var $itemEl = this.$item.children( 'a' ),
eldata = {
	href : $itemEl.attr( 'href' ),
	largesrc : $itemEl.data( 'largesrc' ),
	title : $itemEl.data( 'title' ),
	description : $itemEl.data( 'description' ),
	price : $itemEl.data( 'price' ),
	thumb1 : $itemEl.data( 'thumb-1' ),
	thumb2 : $itemEl.data( 'thumb-2' ),
	thumb3 : $itemEl.data( 'thumb-3' )
};

// Then we use our data values and inject them to their relative HTML elements
// This updates the thumbnails with relative images
this.$thumbnailSrcOne.attr( 'src', (eldata.thumb1 ? eldata.thumb1 : ''));
this.$smallThumbContainerOne.attr( 'rel', (eldata.thumb1 ? eldata.thumb1 : ''));

this.$thumbnailSrcTwo.attr( 'src', (eldata.thumb2 ? eldata.thumb2 : ''));
this.$smallThumbContainerTwo.attr( 'rel', (eldata.thumb2 ? eldata.thumb2 : ''));
this.$thumbnailSrcThree.attr( 'src', (eldata.thumb3 ? eldata.thumb3 : ''));
this.$smallThumbContainerThree.attr( 'rel', (eldata.thumb3 ? eldata.thumb3 : ''));
```

At the end of the 'update' function we make a call to our Preview initiator function `this.PreviewGallery();`. This brings in our image gallery jQuery code. We have to call this in at this, last, point of the 'update' function to let jQuery find the DOM elements and bind our 'onclick' function.

```js
// HAVE TO ACTIVATE THE GALLERY HERE ONCE THE PREVIEW WINDOW IS OPEN AND IMAGES ARE LOADED
// THIS IS BECUASE JQUERY WILL NOT PICK UP THE THUMBS ON LOAD :)
PreviewGallery : function() {
	$(".SmallImage").click(function() {
		var image = $(this).attr("rel");
		$('.og-fullimg').hide();
		$('.og-fullimg').html('<img src="' + image + '"/>');
		$('.og-fullimg').fadeIn('slow');
		return false;
	});
}
```

## HTML for each grid item

For each grid item I've had to include some extra data-attributes. These hold the thumbnail paths as well as our URL's.
```html
<li>
  <a href="https://scriptedpixels.co.uk/blog"
     data-thumb-1="images/1.jpg"
     data-thumb-2="images/2.jpg"
     data-thumb-3="images/3.jpg"
     data-largesrc="images/2.jpg"
     data-title="Veggies sunt bona vobis"
     data-description="Komatsuna prairie turnip wattle seed artichoke mustard horseradish taro rutabaga ricebean carrot black-eyed pea turnip greens beetroot yarrow watercress kombu."
  >
    <img src="images/2.jpg" alt="img02"/>
  </a>
</li>
```

Once you've edited the grid elements as needed you'll need to fire it all up within the DOC READY function:

```js
<!-- Let's do stuff when the Doc is ready, shall we -->
<script>
  $(document).ready(function(){
    Grid.init();
  });
</script>
```

You can see it all in action [here](https://scriptedpixels.co.uk/playground/thumbGalleryGrid.html "Scripted Pixels Thumbnail Grid with Mini-Gallery"). You can also download the code from [this link](https://s000.tinyupload.com/?file_id=88527630786784161460 "Scripted Pixels Thumbnail Grid") too!

Hope it's of some use to you all! Please, ask questions, highlight issues, complain or provide some constructive feedback below – everything is welcome!
