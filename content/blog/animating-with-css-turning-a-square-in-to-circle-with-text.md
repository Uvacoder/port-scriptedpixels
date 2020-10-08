---
title: "Animating with CSS, turning a Square in to a Circle, with text."
date: "2013-08-22"
---

Just having some fun with some CSS3 animation and HTML. No jQuery or JavaScript used.

The example below shows how to use the `transform: rotate(xxxdeg);` in CSS when an object has been hovered, `:hover`. I've used `transition: all 0.35s ease-in-out;` to set the time and easing of the animation too. Clicking the "CSS" tab will reveal all, as well as the prefixes for browser support.

Each square had to be held in a container as the "A link" text was also rotating when inside the main square `DIV`. This was a good "fault" as it gave me more control over the animations for the text. The text is set to be 100%, height and width, inside the containing DIV so that the whole square becomes a target. The opacity and absolute positioning of the text is animated with:

_when not hovered_ `.ObjectContainer a { position: absolute; bottom: -200px; left: 0; opacity: 0; width: 100%; line-height: 0px; text-align: center; vertical-align: middle; }`

_when hovered_ `ObjectContainer:hover a { opacity: 1; bottom: 0; line-height: 200px;}`

The `-200px` would need to change to match the height of the square or this could be set with %'s.

<iframe width="100%" height="500" src="https://jsfiddle.net/scriptedpixels/LRUNx/3/embedded/result,html,css" allowfullscreen="allowfullscreen" frameborder="0"></iframe>

The example above has some flaws, you'll notice that there's some white space under the squares. This is actually the anchor block/text hidden away, waiting to be animated up over the squares.

The example below removes the rotation of the squares. They now just animate in to a circle with the use of `border-radius: 100px;`. The radius is set to half the width and height to ensure there is, in simple terms, no clashing corners.

<iframe width="100%" height="500" src="https://jsfiddle.net/scriptedpixels/LRUNx/2/embedded/result,html,css" allowfullscreen="allowfullscreen" frameborder="0"></iframe>

For both examples you'll notice that I've used classes - you may already know this - but it helps use less code and having less code means this is more maintainable.
