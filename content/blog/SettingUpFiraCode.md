---
title: 'Fira Code as the IDE font'
date: '2022-01-04'
description: "FiraCode is a font that supports ligatures, using this in your IDE makes reading code a lot easier & cleaner."
tags: ['IDE', 'Front-end', 'ligatures', 'CSS', 'HTML', 'JS']
category: 'Web Development'
---

<style>
  @import url(https://cdn.jsdelivr.net/npm/firacode@6.2.0/distr/fira_code.css);
  code, code[class*="language-"], pre[class*="language-"] {
    font-family: 'Fira Code';
  }
</style>

Download the [Font here](https://github.com/tonsky/FiraCode) and install.

I use both VSCode and WebStorm as my daily IDE's. For both of these I have Fira Code set as the font for the text editor. The advantages of using ligatures are shown below.

How map array looks with ligatures enabled:
<article-image src="blog/ligatures-example.png" alt="Ligatures examples" class="mt-5 mb-10"></article-image>

How map array looks with ligatures disabled:
<article-image src="blog/ligatures-example-disabled.png" alt="Ligatures examples" class="mt-5 mb-10"></article-image>

How ligatures look with common JS:
```js
// Equality:
== ===

// Scope:
=> -> __

// Comparison:
<= >= != !==
```

Best thing with this font is that it works with more than one language. It has support for PHP, Swift, Ruby, and Go.

Example from GitRepo:
<article-image src="blog/ligatures.png" alt="Ligatures examples" class="mt-5 mb-10"></article-image>


You'll need to enable font-ligatures in the IDE settings:

VScode:

<article-image src="blog/font-ligatures-vscode.png" alt="VSCode ligatures settings" class="mb-10"></article-image>

WebStorm:

<article-image src="blog/font-ligatures-webstorm.png" alt="WebStorm ligatures settings" class="mb-10"></article-image>
