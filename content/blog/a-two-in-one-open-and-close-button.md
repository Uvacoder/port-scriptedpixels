---
title: "A two in one open and close button"
date: "2013-09-30"
---

A quick post showing a concept I had in mind about a HTML/CSS button that controls the opening and closing of a accordion element. I wanted to make this with pure HTML/CSS to eliminate the use of images or sprites for buttons. This was purely just for fun and I've not tested on IE, we know what may happen!

The Demo:

<iframe width="100%" height="300" src="https://jsfiddle.net/scriptedpixels/GvAtx/embedded/result,js,html,css/" allowfullscreen="allowfullscreen" frameborder="0"></iframe>

HTML:
```html
	<div class="container">
		<div id="SlidingDown">
			<div id="buttonWrap">
				<h3>Click Me &rarr;</h3>
				<div id="button"><span class="animate">&#43;</span></div>
			</div>
			<div id="content" class="animate">
				<p>Integer posuere erat a ante venenatis dapibus posuere velit aliquet. Cras justo odio, dapibus ac facilisis in, egestas eget quam. Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor. Nulla vitae elit libero, a pharetra augue. Donec id elit non mi porta gravida at eget metus.</p>
			</div>
		</div>
	</div>
```

CSS:
``css
	body {
		text-align:center;
		font-family:'Helvetica Neue';
		font-weight: lighter;
		font-size: 16px;
		background: #e7e7e7;
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
		width: 100%;
		height: 9000px;
		position: relative;
	}

	// ANIMATIONS
	.animate {
		transition: all 0.35s ease-out;
	}

	#SlidingDown {
		width: 500px;
		min-height: 60px;
		display: block;
		margin: 0 auto;
		overflow: hidden;
		border: 1px solid rgba(255, 255, 255,1);
	}

	#content {
		display: block;
		overflow: hidden;
		height: 0;
	}

	#content.open {
		min-height: 100px;
	}

	#content p {
		width: 95%;
		margin:0 auto;
		text-align: left;
		margin: 10px 5px;
		display: inline-block;
	}

	#buttonWrap {
		margin: 0 auto;
		width: 100%;
		height: 60px;
	}

	#buttonWrap h3 {
		margin: 15px 10px 0;
		text-align: left;
		width: 420px;
		float: left;
		font-weight: 100;
		font-size: 25px;
		text-align: right;
	}

	#buttonWrap #button {
		width: 50px;
		height: 50px;
		float: right;
		display: block;
		background: #4789e1;
		border-radius: 50%;
		position: relative;
		line-height: 36px;
		cursor: pointer;
		margin: 5px 5px 0 0;
		display: inline-block;
	}

	#buttonWrap #button.open {
		box-shadow:0px 0px 5px rgba(0,0,0,0.2);
	}

	#buttonWrap span {
		position: relative;
		color: rgba(255, 255, 255, 1);
		font-size: 4em;
		text-align: center;
		font-weight: 100;
		display: block;
		margin: 0;
		padding: 0;
		width: 100%;
		height: 100%;
	}

	#buttonWrap .open span {
		transform: rotate(135deg);
	}
```

JavaScript:
```js
<script>
	$("#button").click(function() {
		$("#button, #content").toggleClass('open');
	});
</script>
```

I think it's quite clear to see what's happening here. When the #button is clicked a class called "open" is added to the #button and a DIV called with the ID of "content".

When this class is added to the DOM elements the CSS style, above, is applied. This is where the magic happens. When they get given the class 'open' they're also taking on the new heights and rotation values. These are accompanied with the "transition" property that allows the animation to occur. The good thing with this is that if a browser doesn't support the animation then it'll just 'jump open' instead of smoothly animating open.

Please, ask questions, highlight issues, complain or provide some constructive feedback below – everything is welcome!
