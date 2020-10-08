---
title: "Simple animated underline"
date: "2015-06-05"
---

I've mainly used this effect for highlighting navigation links when a page is currently being used, or when another navigation link is being hovered over.

You can see it in action here:

\[embed\]https://instagram.com/p/2qtfslI6rf/?taken-by=scriptedpixels\[/embed\]

The CSS behind this is pretty straightforwards but the trick is to ensure that you have a border, with no height, set to begin with to ensure the animation is shown when hovering on and off the link. Without this 0px border in place the effect will jump to the hovered state.

I've used a bottom border in the example code below:

@mixin Transition( $values...) {
  $transitions: ();
  @each $declaration in $values {
    $prop: nth($declaration, 1);
    $prop-opts: ();
    $length: length($declaration);
    @for $i from 1 through $length {
      $prop-opts: append($prop-opts, nth($declaration, $i));
    }
    $trans: ($prop, $prop-opts);
    $transitions: append($transitions, $trans, comma);
  }
  -webkit-transition: trans-prefix($transitions, webkit);
  -moz-transition: trans-prefix($transitions, moz);
  -ms-transition: trans-prefix($transitions, ms);
  -o-transition: trans-prefix($transitions, o);
  transition: $values;
}

ul.navigation {
      float: left;
      margin: 0;
      li {
        @include Transition (border-bottom 0.15s ease-in);
        border-bottom: 0px solid transparent;
        height: 50px;
        padding: 0 5px;
        margin: 0 10px;
        &.active {
          border-bottom: 3px solid $DCBlue;
        }
        &:hover {
          border-bottom: 3px solid rgba($DCBlue,0.5);
        }
        a {
          line-height: 50px;
          @include font-size(1.6);
          display: block;
          height: 100%;
        }
      }
}

The Sass mixin creates vendor prefixes for the CSS output as well as taking care of all other transitions used at a later date with different values.

You should be able to see that it's a pretty simple and straightforward effect to created. The key is to have the 0px border already set to ensure the animation works.

See it in action on CodePen here:

<p class="codepen" data-height="147" data-theme-id="0" data-slug-hash="mJmyBe" data-default-tab="result" data-user="kambanwait">See the Pen <a href="https://codepen.io/kambanwait/pen/mJmyBe/">Animate underline</a> by Scripted Pixels Ltd (<a href="https://codepen.io/kambanwait">@kambanwait</a>) on <a href="https://codepen.io">CodePen</a>.</p>
<script src="//assets.codepen.io/assets/embed/ei.js" async></script>

 

Please, ask questions, highlight issues, complain or provide some constructive feedback below – everything is welcome!
