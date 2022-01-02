---
title: 'Website rebuild'
date: '2021-12-30'
description: "I've rebuilt this site multiple times locally, but now it's in production. Here's what I've changed"
tags: ['Vue', 'Nuxt', 'Netlify', 'Markdown', 'Responsive', 'Front-end', 'CSS', 'HTML', 'JS']
category: 'Web Development'
---

This must be version 10 of my new site. I've been playing around with a new website for some time and I kept
putting it to a side, getting frustrated I didn't complete it, and then starting from scratch. I've finally settled down with a tech stack that I enjoy working with and using on a daily basis.

So, I've decided to deploy what I've done so far and I'm forcing myself to make sure my brand and work is up to date.

I'll be backdating some blog posts that I've had in draft for a whiel as well as publishing small tips-n-tricks. The aim is to be pushing up a blog post _atleast_ once a week 📝.

#### Tech stack
I've moved away from WordPress and now using the following:

- Nuxt
- NuxtContent
- TailwindCss
- Vue
- Sass
- BitBucket
- Netlify

#### Process
I write all my posts in [markdown](https://www.markdownguide.org). I've chosen Nuxt so I can use [Vue components](https://vuejs.org/v2/guide/components.html) within my markdown files to show working examples inline with code snippets.

To publish a post, I commit and push it up to my BitBucket repo & Netlify takes care of the rest. It'll run a command I've given `npm run generate` when it detects an update in my main repo branch. This triggers an NPM task that generates and publishes all the static files to their CDN.

All my content lives in a [GitRepo](https://bitbucket.org/KamBanwait/scriptedpixelsrebuild/src/master/), so it's version controlled and, most importantly, open for everyone and available for features like [Netlify hooks](https://docs.netlify.com/configure-builds/build-hooks/). This allows me to automatically deploy my site when a new change is pushed to a specific branch. A simple CI/CD setup.
