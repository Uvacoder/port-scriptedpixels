---
title: 'DaisyUI, Tailwind, Vue and Vite'
description: "How to setup DaisyUI, a component library based on tailwindcss, with Vue and Vite"
date: '2022-08-21'
tags: ['Vue', 'Vite', 'DaisyUI', 'tailwindcss', 'JavaScript']
category: 'Web Development'
---

<p class="introduction">I've decided to document how to set-up and use DaisyUI, with Vue and Tailwind, having used it recently in a client project. I added DaisyUI to ensure there was some consistency in the application I was building. It was initially being developed by myself but then it quickly grew to being developed by developers in multiple teams. Features and components were built without any wire-frames or base styleguides to follow. Some groundwork <strong>had</strong> to be introduced before the UI became too fragmented.</p>


## Prerequisites
1. You'll need [Node](https://nodejs.org/en/) installed globally on your machine.
1. See what [DaisyUI](https://daisyui.com) offers


## Initial setup
We'll be using [Vite](http://vitejs.dev/) as our development server. It's now the standard, over Webpack, for developing JS applications. I highly recommend moving your existing web app builds over to Vite. The speed increase is worth the migration process.

Pop open your terminal of choice and run the following commands:
- Run `npm init vite projectName`, where `projectName` will be the name of a new folder for your application
  - select `vue` using the arrow keys and press enter to select
  - select `vue` again
- Once that has completed, you should see a prompt to `cd` into your new project directory
  - run `npm install` to install the base dependencies
  - run `npm run dev` if you want to see the base Vue app. You can also experience how fast Vite is at getting your dev server running
  - If you've ran the last command, exit out of it so we can install the remaining dependencies
- Run `npm install -D tailwindcss postcss autoprefixer` to get [tailwind](https://tailwindcss.com), [postcss](https://postcss.org/) and [autoprefixer](https://autoprefixer.github.io/) installed as Dev dependencies
  - run `npx tailwindcss init -p` to generate config files for Tailwind and PostCss
- Open your new project directory in your IDE
  - In `tailwind.config.js` we need to update `content: []` with `content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}",]` to tell Tailwind to look at our `index.html` and our `Vue.js` files where we'll be using Tailwind classes
  - In `./src/` we need to create a new CSS file. It can be called anything you like. I call it `index.css`. Within this file we need to add the following to import Tailwind's directives for each of its layers:
    ```css
    @tailwind base;
    @tailwind components;
    @tailwind utilities;
    ```
  - In your `./src/main.js` add the following line `import './index.css'`, under `import App from './App.vue'` to import the new stylesheet. You should have:
    ```js
    import { createApp } from 'vue'
    import App from './App.vue'
    import './index.css'

    createApp(App).mount('#app')
    ```
  - Empty the contents of `./src/App.vue` and add the below with Tailwind's classes:
    ```js
    <template>
      <h1 class="text-3xl font-bold underline mb-10">Hello Vue!</h1>
    </template>
    ```
  - Back in your terminal, run `npm run dev` and go to the URL Vite has provided, e.g: `http://localhost:3000`
    - You should see a plain white page with `Hello vue!` in large bold text with an underline:
    - <article-image src="blog/tailwindVueDaisy/plain-hello-vue.png" alt="Plain helo Vue! text" ></article-image>
    - You can now exit this as we need to add [DaisyUI](https://daisyui.com/) to the application
  - In your terminal, run the following to install DaisyUI: `npm i daisyui`
    - In the `tailwind.config.js` file we need to add `require("daisyui")` within the `plugins` array. You should have the following in your `tailwind.config.js` file:
    ```js
    /** @type {import('tailwindcss').Config} */
    module.exports = {
      content: [
        "./index.html",
        "./src/**/*.{vue,js,ts,jsx,tsx}",
      ],
      theme: {
        extend: {},
      },
      plugins: [require("daisyui")],
    }
    ```
  - Back in your `./src/App.vue` file we can start adding some DaisyUI classes, e.g:
    ```js
    <template>
      <h1 class="text-3xl font-bold underline mb-10">Hello Vue!</h1>
      <button class="btn btn-primary">Hello Daisy button</button>
    </template>
    ```
  - In your terminal, run the following to see the changes `npm run dev`. You should now see an updated page with a theme and styled button:
    - <article-image src="blog/tailwindVueDaisy/daisyui-hello-vue.png" alt="Styled Hello Vue text and Button" ></article-image>
- That's it! We've now got access to all of [DaisyUI's components](https://daisyui.com/components/) throughout our application


### Taking it a step further for future applications

I feel like the following steps are important to create a template for any new applications you feel like building:

- Delete the contents of the following directories:
  - `./src/components/`
  - `./src/assets/`

That's it, You can now commit this to a repo and use it when you're starting new projects. I've created my version [here](https://bitbucket.org/scriptedpixels/basedaisyuitailwindvuevite/src/main) for you to clone if you'd like.
