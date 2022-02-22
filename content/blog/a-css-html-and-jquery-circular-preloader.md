---
title: 'A CSS, HTML and jQuery circular preloader'
date: '2013-09-05'
description: 'How I designed and created a circular loading indicator'
tags: ['Responsive', 'Front-end', 'CSS', 'HTML', 'JavaScript']
category: 'Web Development'
---

<p class="introduction">How I designed and created a circular loading indicator</p>

After getting frustrated with some code not working how I wanted it to work, I decided to do a little sketching on my iPad mini on the way in to work.

This is what I drew:
<article-image src="blog/IMG_4981-1024x1024.jpg" alt="Sketch on iPad mini" ></article-image>

What is this all about? I wanted to get my mind off the other work so I looked at creating a minimal preloader, using only CSS, HTML and little jQuery. I started with taking on the traditional "straight line" preloader and playing with the thickness of lines and their opacity. This was looking great, but I wanted to create something a little more exciting for the visitor - who wants to wait to view a site anyway? I wanted to make that wait a little more bearable.

I looked at creating a circular pre-loader, yes this is traditional again, but making this in CSS-only would prove to be a challenge and something that I know that could be re-used in an upcoming project.

<article-image src="blog/Screen-Shot-2013-09-05-at-08.58.372.png" alt="final version in code" ></article-image>


<article-image src="blog/Screen-Shot-2013-09-05-at-08.58.371.png" alt="The final design made in Photoshop after importing the image from the iPad so I could get that red/orange background color_" ></article-image>

Lets get started, shall we:

**All credit goes to this [website](https://blakek.us/labs/jquery/css3-pie-graph-timer 'css pie graph and timer') which I used to make all of the animation.**

The html

```html
<div class="container">
	<div class="loader">
		<div class="loader-bg">
			<div class="text"></div>
		</div>
		<div class="spiner-holder-one animate-0-25-a">
			<div class="spiner-holder-two animate-0-25-b">
				<div class="loader-spiner" </div>
			</div>
		</div>
		<div class="spiner-holder-one animate-25-50-a">
			<div class="spiner-holder-two animate-25-50-b">
				<div class="loader-spiner"></div>
			</div>
		</div>
		<div class="spiner-holder-one animate-50-75-a">
			<div class="spiner-holder-two animate-50-75-b">
				<div class="loader-spiner"></div>
			</div>
		</div>
		<div class="spiner-holder-one animate-75-100-a">
			<div class="spiner-holder-two animate-75-100-b">
				<div class="loader-spiner"></div>
			</div>
		</div>
	</div>
</div>
```

The circle is split in to four squares, I'm not totally sure why but I'm guessing it's to do with the math and transformations occurring in the background when the jQuery rotates the inner, loading, circle - I'm experimenting with this and getting some very funky shapes!

The CSS

```css
.text {
  color: rgba(255, 255, 255, 1);
  font-weight: lighter;
  text-align: center;
  padding-top: 30%;
  font-size: 6em;
}

.loader {
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  box-sizing: border-box;
  margin: 50px auto 0;
  position: relative;
  user-select: none;
  height: 300px;
  width: 300px;
}

.loader-bg {
  border: 2px solid rgba(255, 255, 255, 0.2);
  box-sizing: border-box;
  border-radius: 50%;
  height: 100%;
  width: 100%;
}

.spiner-holder-one {
  background: transparent;
  box-sizing: border-box;
  position: absolute;
  overflow: hidden;
  height: 50%;
  width: 50%;
  left: 0;
  top: 0;
}

.spiner-holder-two {
  background: transparent;
  box-sizing: border-box;
  position: absolute;
  overflow: hidden;
  height: 100%;
  width: 100%;
  left: 0;
  top: 0;
}

.loader-spiner {
  border: 2px solid rgba(255, 255, 255, 0.9);
  box-sizing: border-box;
  border-radius: 50%;
  height: 200%;
  width: 200%;
}

.animate-0-25-a {
  transform-origin: 100% 100%;
  transform: rotate(90deg);
}

.animate-0-25-b {
  transform-origin: 100% 100%;
  transform: rotate(-90deg);
}

.animate-25-50-a {
  transform-origin: 100% 100%;
  transform: rotate(180deg);
}

.animate-25-50-b {
  transform-origin: 100% 100%;
  transform: rotate(-90deg);
}

.animate-50-75-a {
  transform-origin: 100% 100%;
  transform: rotate(270deg);
}

.animate-50-75-b {
  transform-origin: 100% 100%;
  transform: rotate(-90deg);
}

.animate-75-100-a {
  transform-origin: 100% 100%;
  transform: rotate(0deg);
}

.animate-75-100-b {
  transform-origin: 100% 100%;
  transform: rotate(-90deg);
}
```

WOW - where do I even start with this lot. I understand all of this but explaining it here is going to be difficult!

The jQuery

```js
<script>
	function renderProgress(progress) {
		progress = Math.floor(progress);

		if(progress<25){
			var angle = -90 + (progress/100) * 360;
			$(".animate-0-25-b").css("transform","rotate("+angle+"deg)");
		} else if(progress>=25 && progress<50){
			var angle = -90 + ((progress-25)/100)* 360;
			$(".animate-0-25-b").css("transform","rotate(0deg)");
			$(".animate-25-50-b").css("transform","rotate("+angle+"deg)");
		} else if(progress>=50 && progress<75){
			var angle = -90 + ((progress-50)/100)* 360;
			$(".animate-25-50-b, .animate-0-25-b").css("transform","rotate(0deg)");
			$(".animate-50-75-b").css("transform","rotate("+angle+"deg)");
		} else if(progress>=75 && progress<=100){
			var angle = -90 + ((progress-75)/100)* 360;
			$(".animate-50-75-b, .animate-25-50-b, .animate-0-25-b").css("transform","rotate(0deg)");
			$(".animate-75-100-b").css("transform","rotate("+angle+"deg)");
		}

		if(progress==100){
			$(".text").html(progress+"%");
		}
	}

	function clearProgress() {
		$(".animate-75-100-b, .animate-50-75-b, .animate-25-50-b, .animate-0-25-b").css("transform","rotate(90deg)");
	}

	var i 			=0;
	var times 		= 0;

	var interval 	= setInterval(function (){
		i++;
		times += 1;

		if( times >= 100 ) {
			// clearProgress();
			width = '4px';
			clearInterval(interval);

			$('.text').animate({
				opacity : 0.5
			}, 'slow');
			$('.loader-spiner').animate({
				borderLeftWidth: width,
				borderTopWidth: width,
				borderRightWidth: width,
				borderBottomWidth: width
			}, 100 );
		}
		renderProgress(i);
	},60);
</script>
```

Here it is in action via instagram: video.instagram, img.instagram {width: 100% !important; height: auto !important;}
_#webdev #html #css #jquery Circular loading animation. Started from an iPad idea. by @[scriptedpixels](https://instagram.com/scriptedpixels)_

and via [JSFiddle](https://jsfiddle.net/scriptedpixels/LKBnx/light/):

```html
<iframe
  width="100%"
  height="600"
  src="https://jsfiddle.net/scriptedpixels/LKBnx/embedded/result,js,html,css/"
  allowfullscreen="allowfullscreen"
  frameborder="0"
></iframe>
```

Just to get this out the door I'm going to end this post here. I'll figure out a way to annotate all the code in a nice legible and logical way as I'd like to highlight what I've done.

Please, ask questions, highlight issues, complain or provide some constructive feedback below - everything is welcome!
