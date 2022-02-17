/*
* debouncedresize: special jQuery event that happens once after a window resize
*
* latest version and complete README available on Github:
* https://github.com/louisremi/jquery-smartresize/blob/master/jquery.debouncedresize.js
*
* Copyright 2011 @louis_remi
* Licensed under the MIT license.
*/
var $event = $.event,
$special,
resizeTimeout;

$special = $event.special.debouncedresize = {
	setup: function() {
		$( this ).on( "resize", $special.handler );
	},
	teardown: function() {
		$( this ).off( "resize", $special.handler );
	},
	handler: function( event, execAsap ) {
		// Save the context
		var context = this,
			args = arguments,
			dispatch = function() {
				// set correct event type
				event.type = "debouncedresize";
				$event.dispatch.apply( context, args );
			};

		if ( resizeTimeout ) {
			clearTimeout( resizeTimeout );
		}

		execAsap ?
			dispatch() :
			resizeTimeout = setTimeout( dispatch, $special.threshold );
	},
	threshold: 250
};

// ======================= imagesLoaded Plugin ===============================
// https://github.com/desandro/imagesloaded

// $('#my-container').imagesLoaded(myFunction)
// execute a callback when all images have loaded.
// needed because .load() doesn't work on cached images

// callback function gets image collection as argument
//  this is the container

// original: MIT license. Paul Irish. 2010.
// contributors: Oren Solomianik, David DeSandro, Yiannis Chatzikonstantinou

// blank image data-uri bypasses webkit log warning (thx doug jones)
var BLANK = 'data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///ywAAAAAAQABAAACAUwAOw==';

$.fn.imagesLoaded = function( callback ) {
	var $this = this,
		deferred = $.isFunction($.Deferred) ? $.Deferred() : 0,
		hasNotify = $.isFunction(deferred.notify),
		$images = $this.find('img').add( $this.filter('img') ),
		loaded = [],
		proper = [],
		broken = [];

	// Register deferred callbacks
	if ($.isPlainObject(callback)) {
		$.each(callback, function (key, value) {
			if (key === 'callback') {
				callback = value;
			} else if (deferred) {
				deferred[key](value);
			}
		});
	}

	function doneLoading() {
		var $proper = $(proper),
			$broken = $(broken);

		if ( deferred ) {
			if ( broken.length ) {
				deferred.reject( $images, $proper, $broken );
			} else {
				deferred.resolve( $images );
			}
		}

		if ( $.isFunction( callback ) ) {
			callback.call( $this, $images, $proper, $broken );
		}
	}

	function imgLoaded( img, isBroken ) {
		// don't proceed if BLANK image, or image is already loaded
		if ( img.src === BLANK || $.inArray( img, loaded ) !== -1 ) {
			return;
		}

		// store element in loaded images array
		loaded.push( img );

		// keep track of broken and properly loaded images
		if ( isBroken ) {
			broken.push( img );
		} else {
			proper.push( img );
		}

		// cache image and its state for future calls
		$.data( img, 'imagesLoaded', { isBroken: isBroken, src: img.src } );

		// trigger deferred progress method if present
		if ( hasNotify ) {
			deferred.notifyWith( $(img), [ isBroken, $images, $(proper), $(broken) ] );
		}

		// call doneLoading and clean listeners if all images are loaded
		if ( $images.length === loaded.length ){
			setTimeout( doneLoading );
			$images.unbind( '.imagesLoaded' );
		}
	}

	// if no images, trigger immediately
	if ( !$images.length ) {
		doneLoading();
	} else {
		$images.bind( 'load.imagesLoaded error.imagesLoaded', function( event ){
			// trigger imgLoaded
			imgLoaded( event.target, event.type === 'error' );
		}).each( function( i, el ) {
			var src = el.src;

			// find out if this image has been already checked for status
			// if it was, and src has not changed, call imgLoaded on it
			var cached = $.data( el, 'imagesLoaded' );
			if ( cached && cached.src === src ) {
				imgLoaded( el, cached.isBroken );
				return;
			}

			// if complete is true and browser supports natural sizes, try
			// to check for image status manually
			if ( el.complete && el.naturalWidth !== undefined ) {
				imgLoaded( el, el.naturalWidth === 0 || el.naturalHeight === 0 );
				return;
			}

			// cached images don't fire load sometimes, so we reset src, but only when
			// dealing with IE, or image is complete (loaded) and failed manual check
			// webkit hack from http://groups.google.com/group/jquery-dev/browse_thread/thread/eee6ab7b2da50e1f
			if ( el.readyState || el.complete ) {
				el.src = BLANK;
				el.src = src;
			}
		});
	}

	return deferred ? deferred.promise( $this ) : $this;
};

var Grid = (function() {

		// list of items
	var $grid = $( '#og-grid' ),
		// the items
		$items = $grid.children( 'li' ),
		// current expanded item's index
		current = -1,
		// position (top) of the expanded item
		// used to know if the preview will expand in a different row
		previewPos = -1,
		// extra amount of pixels to scroll the window
		scrollExtra = 0,
		// extra margin when expanded (between preview overlay and the next items)
		marginExpanded = 10,
		$window = $( window ), winsize,
		$body = $( 'html, body' ),
		// transitionend events
		transEndEventNames = {
			'WebkitTransition' : 'webkitTransitionEnd',
			'MozTransition' : 'transitionend',
			'OTransition' : 'oTransitionEnd',
			'msTransition' : 'MSTransitionEnd',
			'transition' : 'transitionend'
		},
		transEndEventName = transEndEventNames[ Modernizr.prefixed( 'transition' ) ],
		// support for csstransitions
		support = Modernizr.csstransitions,
		// default settings
		settings = {
			minHeight : 500,
			speed : 350,
			easing : 'ease'
		};

	function init( config ) {
		
		// the settings..
		settings = $.extend( true, {}, settings, config );

		// preload all images
		$grid.imagesLoaded( function() {

			// save item´s size and offset
			saveItemInfo( true );
			// get window´s size
			getWinSize();
			// initialize some events
			initEvents();

		} );

	}

	// add more items to the grid.
	// the new items need to appended to the grid.
	// after that call Grid.addItems(theItems);
	function addItems( $newitems ) {

		$items = $items.add( $newitems );

		$newitems.each( function() {
			var $item = $( this );
			$item.data( {
				offsetTop : $item.offset().top,
				height : $item.height()
			} );
		} );

		initItemsEvents( $newitems );

	}

	// saves the item´s offset top and height (if saveheight is true)
	function saveItemInfo( saveheight ) {
		$items.each( function() {
			var $item = $( this );
			$item.data( 'offsetTop', $item.offset().top );
			if( saveheight ) {
				$item.data( 'height', $item.height() );
			}
		} );
	}

	function initEvents() {
		
		// when clicking an item, show the preview with the item´s info and large image.
		// close the item if already expanded.
		// also close if clicking on the item´s cross
		initItemsEvents( $items );
		
		// on window resize get the window´s size again
		// reset some values..
		$window.on( 'debouncedresize', function() {
			
			scrollExtra = 0;
			previewPos = -1;
			// save item´s offset
			saveItemInfo();
			getWinSize();
			var preview = $.data( this, 'preview' );
			if( typeof preview != 'undefined' ) {
				hidePreview();
			}

		} );

	}

	function initItemsEvents( $items ) {
		$items.on( 'click', 'span.og-close', function() {
			hidePreview();
			return false;
		} ).children( 'a' ).on( 'click', function(e) {

			var $item = $( this ).parent();
			// check if item already opened
			current === $item.index() ? hidePreview() : showPreview( $item );
			return false;

		} );
	}

	function getWinSize() {
		winsize = { width : $window.width(), height : $window.height() };
	}

	function showPreview( $item ) {

		var preview = $.data( this, 'preview' ),
			// item´s offset top
			position = $item.data( 'offsetTop' );
		var owl = $("#oCarousel").data('owlCarousel');

		scrollExtra = 0;

		// if a preview exists and previewPos is different (different row) from item´s top then close it
		if( typeof preview != 'undefined' ) {

			// not in the same row
			if( previewPos !== position ) {
				// if position > previewPos then we need to take te current preview´s height in consideration when scrolling the window
				if( position > previewPos ) {
					scrollExtra = preview.height;
				}
				hidePreview();
				// GO AND DESTROY THE OWL CAROUSEL
				owl.destroy();
			}
			// same row
			else {
				// GO AND DESTROY THE OWL CAROUSEL
				owl.destroy();
				preview.update( $item );
				return false;
			}
		}

		// update previewPos
		previewPos = position;
		// initialize new preview for the clicked item
		preview = $.data( this, 'preview', new Preview( $item ) );
		// expand preview overlay
		preview.open();

	}

	function hidePreview() {
		current = -1;
		var preview = $.data( this, 'preview' );
		preview.close();
		$.removeData( this, 'preview' );
	}

	// the preview obj / overlay
	function Preview( $item ) {
		this.$item = $item;
		this.expandedIdx = this.$item.index();
		this.create();
		this.update();
	}

	/*
		KAM - INNER CONTENTS CREATED HERE
	*/
	Preview.prototype = {
		create : function() {
		// NEW CODE - Setup the inside of the gallery first as it gets appended insdide to relative wrappers

		// SET UP SOME GENERIC STUFFS
			this.$loading				= $('<div class="og-loading"></div>');
			this.$closePreview 			= $('<span class="og-close"></span>');

		// PREPARE THE CONTENTS OF THE SLIDES
			// GET THE IMAGES
			this.$slideImageOne			= $('<img class="slideImage" src="">');
			this.$slideImageTwo			= $('<img class="slideImage" src="">');
			this.$slideImageThree		= $('<img class="slideImage" src="">');
			// warp images in a class
			this.$slideImageWrapOne		= $('<div class="imageContainer"></div>').append(this.$slideImageOne);
			this.$slideImageWrapTwo		= $('<div class="imageContainer"></div>').append(this.$slideImageTwo);
			this.$slideImageWrapThree	= $('<div class="imageContainer"></div>').append(this.$slideImageThree);


		// SET THE COPY FOR EACH SLIDE
			// Get the project title
			this.$projectTitle 			= $('<h3></h3>');
			this.$linkToSite			= $('<a href="" target"_blank" >Visit website</a>');
			// get slide descriptions
			this.$slideOneDescription	= $('<p></p>');
			this.$slideTwoDescription	= $('<p></p>');
			this.$slideThreeDescription	= $('<p></p>');

		// DESCRIPTION WRAPPERS
			this.$slideOneContentsWrap	= $('<div class="descriptionContainer"></div>').append(
				this.$projectTitle,
				this.$linkToSite,
				this.$slideOneDescription
			);
			this.$slideTwoContentsWrap	= $('<div class="descriptionContainer"></div>').append(
				this.$slideTwoDescription
			);
			this.$slideThreeContentsWrap= $('<div class="descriptionContainer"></div>').append(
				this.$slideThreeDescription
			);

		// SET UP SLIDE CONTAINERS AND INSERT CONTENTS
			this.$slideContainerOne	 	= $('<div class="item"></div>').append(
				this.$slideImageWrapOne,
				this.$slideOneContentsWrap
			);
			
			this.$slideContainerTwo	 	= $('<div class="item"></div>').append(
				this.$slideImageWrapTwo,
				this.$slideTwoContentsWrap
			);
			
			this.$slideContainerThree	= $('<div class="item"></div>').append(
				this.$slideImageWrapThree,
				this.$slideThreeContentsWrap
			);

		// PUT ALL THE STUFFS ABOVE IN TO THE CAROUSEL CONTAINER
			this.$previewContainer 		= $('<div id="oCarousel" class="owl-carousel"></div>').append(
				this.$slideContainerOne,
				this.$slideContainerTwo,
				this.$slideContainerThree
			);
		// PUT ALL CONTAINERS IN TO A INNER WRAPPER
			this.$previewInner 			= $('<div class="og-expander-inner"></div>').append(
				this.$loading,
				this.$closePreview,
				this.$previewContainer
			);

			this.$previewEl 			= $('<div class="og-expander"></div>').append(this.$previewInner);

		// INSER THE PREVIEW IN TO THE SELECED DROP DOWN
			this.$item.append( this.getEl() );

		// SET THE TRANSITIONS
			if( support ) {
				this.setTransition();
			}
		},
		update : function( $item ) {
			if( $item ) {
				this.$item = $item;
			}
			// if already expanded remove class "og-expanded" from current item and add it to new item
			if( current !== -1 ) {
				var $currentItem = $items.eq( current );
				$currentItem.removeClass( 'og-expanded' );
				this.$item.addClass( 'og-expanded' );
				// position the preview correctly
				this.positionPreview();
			}
			// update current value
			current = this.$item.index();
			var $itemEl = this.$item.children( 'a' ),
				eldata = {
					href 			: $itemEl.attr('href'),
					projectTitle  	: $itemEl.data('projecttitle'),
					description 	: $itemEl.data('description'),
					descriptionTwo 	: $itemEl.data('descriptiontwo'),
					descriptionThree: $itemEl.data('descriptionthree'),
					descriptionFour : $itemEl.data('descriptionfour'),
					descriptionFive : $itemEl.data('descriptionfive'),
					descriptionSix  : $itemEl.data('descriptionsix'),
					descriptionSeven: $itemEl.data('descriptionseven'),
					descriptionEight: $itemEl.data('descriptioneight'),
					slideImage1		: $itemEl.data('slide-1'),
					slideImage2		: $itemEl.data('slide-2'),
					slideImage3		: $itemEl.data('slide-3'),
					slideImage4		: $itemEl.data('slide-4'),
					slideImage5		: $itemEl.data('slide-5'),
					slideImage6		: $itemEl.data('slide-6'),
					slideImage7		: $itemEl.data('slide-7'),
					slideImage8		: $itemEl.data('slide-8')
				};

			// SET THE FIRST SLIDE'S COPY
			this.$projectTitle.html(eldata.projectTitle);
			this.$linkToSite.attr('href', eldata.href);
			// GET THE COPY FOR THE REST OF THE SLDES
			this.$slideOneDescription.html(eldata.description);
			this.$slideTwoDescription.html(eldata.descriptionTwo);
			this.$slideThreeDescription.html(eldata.descriptionThree);
			// this.$slideFoureDescription.html(eldata.descriptionFour);
			// this.$slideFiveDescription.html(eldata.descriptionFive);
			// this.$slideSixDescription.html(eldata.descriptionSix);
			// this.$slideSevenDescription.html(eldata.descriptionSeven);
			// this.$slideEightDescription.html(eldata.descriptionEight);

			// ADD IMAGES TO ALL THE SLIDES
			this.$slideImageOne.attr('src',(eldata.slideImage1 		? eldata.slideImage1 : ''));
			this.$slideImageTwo.attr('src',(eldata.slideImage2 		? eldata.slideImage2 : ''));
			this.$slideImageThree.attr('src',(eldata.slideImage3 	? eldata.slideImage3 : ''));
			// this.$slideImageFour.attr('src',(eldata.slideImage4 	? eldata.slideImage4 : ''));
			// this.$slideImageFive.attr('src',(eldata.slideImage5 	? eldata.slideImage5 : ''));
			// this.$slideImageSix.attr('src',(eldata.slideImage6 		? eldata.slideImage6 : ''));
			// this.$slideImageSeven.attr('src',(eldata.slideImage7 	? eldata.slideImage7 : ''));
			// this.$slideImageEight.attr('src',(eldata.slideImage8 	? eldata.slideImage8 : ''));

			// GO AND LOAD THE OWL CAROUSEL IN
			this.PreviewGallery();
		},
		open : function() {

			setTimeout( $.proxy( function() {	
				// set the height for the preview and the item
				this.setHeights();
				// scroll to position the preview in the right place
				this.positionPreview();
			}, this ), 25 );

		},
		close : function() {
			var self = this,
				onEndFn = function() {
					if( support ) {
						$( this ).off( transEndEventName );
					}
					self.$item.removeClass( 'og-expanded' );
					self.$previewEl.remove();
				};

			setTimeout( $.proxy( function() {

				if( typeof this.$largeImg !== 'undefined' ) {
					this.$largeImg.fadeOut( 'fast' );
				}
				this.$previewEl.css( 'height', 0 );
				// the current expanded item (might be different from this.$item)
				var $expandedItem = $items.eq( this.expandedIdx );
				$expandedItem.css( 'height', $expandedItem.data( 'height' ) ).on( transEndEventName, onEndFn );

				if( !support ) {
					onEndFn.call();
				}
			}, this ), 25 );
			
			// GO AND DESTROY THE OWL CAROUSEL
			var owl = $("#oCarousel").data('owlCarousel');
			owl.destroy();
			return false;

		},
		calcHeight : function() {

			var heightPreview = winsize.height - this.$item.data( 'height' ) - marginExpanded,
				itemHeight = winsize.height;

			if( heightPreview < settings.minHeight ) {
				heightPreview = settings.minHeight;
				itemHeight = settings.minHeight + this.$item.data( 'height' ) + marginExpanded;
			}

			this.height = heightPreview;
			this.itemHeight = itemHeight;

		},
		setHeights : function() {

			var self = this,
				onEndFn = function() {
					if( support ) {
						self.$item.off( transEndEventName );
					}
					self.$item.addClass( 'og-expanded' );
				};
			this.calcHeight();
			this.$previewEl.css( 'height', this.height );
			this.$item.css( 'height', this.itemHeight ).on( transEndEventName, onEndFn );
			if( !support ) {
				onEndFn.call();
			}
		},
		positionPreview : function() {
			var position = this.$item.data( 'offsetTop' ),
				previewOffsetT = this.$previewEl.offset().top - scrollExtra,
				scrollVal = this.height + this.$item.data( 'height' ) + marginExpanded <= winsize.height ? position : this.height < winsize.height ? previewOffsetT - ( winsize.height - this.height ) : previewOffsetT;
			$body.animate( { scrollTop : scrollVal }, settings.speed );

		},
		setTransition  : function() {
			this.$previewEl.css( 'transition', 'height ' + settings.speed + 'ms ' + settings.easing );
			this.$item.css( 'transition', 'height ' + settings.speed + 'ms ' + settings.easing );
		},
		getEl : function() {
			return this.$previewEl;
		},
		// HAVE TO ACTIVATE THE GALLERY HERE ONCE THE PREVIEW WINDOW IS OPEN AND IMAGES ARE LOADED
		PreviewGallery : function() {
			$("#oCarousel").owlCarousel({
				navigation : true,
				slideSpeed : 300,
				paginationSpeed : 400,
				singleItem : true,
				paginationNumbers : true,
				navigationText : ''
			});
			this.$loading.remove();
		}
	}
	return { 
		init : init,
		addItems : addItems
	};

})();