---
title: 'Getting started with Vue'
date: '2022-02-13'
description: 'How to get started with using Vue via a CDN, the options API, and no build tools...'
tags: ['Vue', 'Front-end', 'Javascript']
category: 'Web Development'
---

<p class="introduction">
This post is for anyone that wants to play around with Vue without having to faff around with build tools. It's also a great way to start introducting Vue in to your exsting site/application - this has been the reason why I've loved using Vue and have implemented it in many companies I've worked in.
</p>

## Prerequisites
- You'll need to setup a new blank `index.html` file with the following:
```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">

  <!-- Vue framework loaded -->
  <script src="https://unpkg.com/vue@3"></script>

  <title>Vue basic setup</title>
</head>
<body>

</body>
</html>
```
- Note `<script src="https://unpkg.com/vue@3"></script>` requesting the latest version of Vue _(3 is now the new default)_
- Use your favourite IDE, I'm using VSCode with the [LiveServer extension](https://marketplace.visualstudio.com/items?itemName=ritwickdey.LiveServer) to run a simple local development server with live reload features
- Install the [VueDevTools](https://addons.mozilla.org/en-US/firefox/addon/vue-js-devtools/) extension in your browser of choice. I'm using FireFox and the beta version of the dev tools
- Optional: install the [Volar](https://marketplace.visualstudio.com/items?itemName=MisterJ.vue-volar-extention-pack) extension pack for all your Vue linting etc


## Initiating Vue
We've requested the Vue framework from `https://www.unpkg.com/vue@3` and we now have a `Vue` object in our global scope. You can check this by opening the `index.html` file with LiveServer and opening the dev-tools & the console tab. Type `Vue` and press the enter key. You should see something like this being returned:

<article-image src="blog/getting-started-with-vue/vue-global-object.png" alt="the Vue global object in the browser's dev-tools console tab" ><template v-slot:caption>_This is very much like how we load jQuery_</template></article-image>


To start using Vue we have to tell it where to work its magic. Lets add some HTML to the document. The ID we use here will be used later.

```html
<div id="vueApp">
  <!-- Vue is going to work with whatever we insert here -->
</div>
```

We also want to add a `<script>` tag to the bottom of the page, under this HTML before the closing `body` tag:

```html
...
<script>
  // our Vue JS will be added here
</script>

</body>
</html>
```

Within this new `<script>` tag we want to access the `createApp` method on the Vue global object. The method is expecting an object to be passed in, so we'll provide an empty object for now with `{}`. We'll look at that object after the next step:

```js
// our Vue JS will be added here - we can remove this now
// Capital V is important here
Vue.createApp({})
```

Now we've initiated a new instance of an application we want to tell Vue to `mount` this application within our HTML.

We do this by using another method from Vue called `mount()` and we pass this method the ID we used earlier: `#vueApp`. This mount method has to be chained to `createApp({})`:

```js
Vue.createApp({}).mount('#vueApp')
```

**Great!** We've added Vue to the page and initiated our application. If you've installed the Vue DevTools browser extension then you should see that it's acknowledged Vue on the page by showing a coloured icon.


### Show me something in the page

Now we've got the basics setup, lets get something rendered in the page.

We want to add some default data, called **state**, in the empty object we've passed in to the `createApp` method. This object is actaully a **component**.

We add state to this new component by adding a function called `data` that doesn't take in any parameters and returns an object. This data function is called a **component option**, hence this type of setup is called the `options API` in Vue:

```js
Vue.createApp({
  data() {
    return {
      // data returned in this returned object
    }
  }
}).mount('#vueApp')
```

Now, this object will contain our application state (our data) that we want to display on the page within our new component. To do this we simply create a `key : value` pair and set the key to something we will later reference in the HTML. The value can be an empty string, **Object**, **Integer**, **Array**, and even a **function**. For the purpose of this post I'll set it to some string:

```js
Vue.createApp({
  data() {
    return {
      message: 'Hello you!'
    }
  }
}).mount('#vueApp')
```

This state, `message`, is now acessible within our HTML. We use Vue's template syntax, mustaches, `{{ }}` to access this returned data in our HTML by adding the following within the `<div>` we created earlier:

```html
<div id="vueApp">
  {{ message }}
</div>
```

Your index.html document should now look like:

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">

  <!-- Vue framework loaded -->
  <script src="https://unpkg.com/vue@3"></script>

  <title>Vue basic setup</title>
</head>
<body>

  <div id="vueApp">
    {{ message }}
  </div>


  <script>
    Vue.createApp({
      data() {
        return {
          message: 'Hello you!'
        }
      }
    }).mount('#vueApp ')
  </script>

</body>
</html>
```

You should now see the rendered message, "Hello you!" ! 🎉 🥳

### 2-way data binding

What we've done so far is pretty basic but it's very exciting when you start to think about what we can do next!

The core feature of Vue is declarative rendering - we describe how the HTML will look based on the JavaScript state. When the state is changed, the HTML will update automatically. State changes triggers the updates and we consider this as **reactive**.

We'll look at binding our state to a text input field and use that to update our state.

Within the #vueApp HTML lets add the following:

```html
<div id="vueApp">
  {{ message }}

  <!-- Just to put the input below the message -->
  <br />

  <input type="text" v-model="message" />
</div>
```

`v-model` is a special HTML attribute, in Vue it's called a directive, that we add to regular HTML. It tells Vue to bind something from the component's state, in this case `message`, to the HTML node. This is used by Vue and it won't effect our HTML. It's similar to how you can use `data-attribute-name="some value"` on any HTML node and you make use of that how you wish with JavaScript's queryselector.

In the browser you'll see the message is rendered in the input field and above it. As you start to type in the input field, you will see Vue automatically update the text above it. This is called 2-way binding.

<article-image src="blog/getting-started-with-vue/Hello-You.png" alt="Hello You! rendered in the browser with Dev Tools open" ></article-image>

Vue is handling the input change events in the background and updating the HTML with the newly entered text! This takes away the manual JS we would usually write to set-up event listeners and then update the HTML. I've managed to half the size of a vanialla JS file using Vue instead. It also made the code a lot easier to read.

It's best to look at this as **"Vue is updating the HTML as the state is being updated"**.

I hope this short intro and setup to Vue is useful. I'll following this up with a basic 'counter' app soon to show how we can listen to DOM events within Vue.
