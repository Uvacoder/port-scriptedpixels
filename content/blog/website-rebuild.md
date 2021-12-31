---
title: 'Website rebuild'
date: '2021-12-30'
description: "I've rebuilt this site multiple times locally, but now it's in production. Here's what I've changed"
tags: ['Vue', 'Nuxt', 'Netlify', 'Markdown', 'Responsive', 'Front-end', 'CSS', 'HTML', 'JS']
category: 'Web Development'
---

This is version 10, I think, of my new site. I've been playing around with a new "design" for some time and kept
putting it to a side and starting from scratch... several times.

I've had a holding page up for the last 2 months - I didn't want to pay hosting for a site that was not being
utilised.

#### Tech stack
I've moved away from WordPress, hooray!

- Nuxt
- NuxtContent
- Netlify
- Vue
- BitBucket
- Sass
- TailwindCss

All my content lives in a [GitRepo](https://bitbucket.org/KamBanwait/scriptedpixelsrebuild/src/master/), so it's version controlled and, most importantly, open for everyone and available for features like [Netlify hooks](https://docs.netlify.com/configure-builds/build-hooks/). This allows me to automatically deploy my site when a new change is pushed to a specific branch. A simple CI/CD setup.
