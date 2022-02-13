---
title: 'Getting started with Vue'
date: '2022-02-13'
description: 'How to get started with using Vue via a CDN, the options API, and no build tools...'
tags: ['Vue', 'Front-end', 'Javascript']
category: 'Web Development'
---

This post is for anyone that wants to play around with Vue without having to faff around with build tools. It's also a great way to start introducting Vue in to your exsting site/application - this has been the reason why I've loved using Vue and have implemented it in many companies I've worked in.

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
We've called in the Vue framework from `unpkg.com/vue@3` so we now have `Vue` in our global scope. You can check this by opening the index.html file with liveserver and popping open the dev tools console. Type in the following and press the enter key:

``` js
// note the capital V here
Vue
```

You should see something like the below being returned:

<article-image src="blog/getting-started-with-vue/vue-global-object.png" alt="the Vue global objectin the browser devtools" class="mb-5" ></article-image>

To start using Vue we have to tell it where to work its magic. Lets add some HTML to the document:

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

We do this by using another method from Vue called `mount()` and we pass this method the HTML ID we created earlier: `#vueApp`. This mount method has to be chained to the end of `createApp({})`:

```js
Vue.createApp({}).mount('#vueApp')
```

Great! We've added Vue to the page and initiated our application. If you've installed Vue devtools then you should see that it's recognised we have Vue on the page by showing a coloured icon.



### Get something showing on the page

Now we've got the basics setup, lets get something on the page.

We want to add some default data, called state, in the empty object we've passed in to the `createApp`. This object is actaully a component!

We add state to this new component by creating adding function called `data`, that doesn't take in any parameters, and returns an object. This data function is called a component option, hence this type of setup is called the `options api` for Vue:

```js
Vue.createApp({
  data() {
    return {
      // data returned in this returned object
    }
  }
}).mount('#vueApp')
```

Now, this object will contain our application state (our data) that we want to display on the page within our new component. To do this we simply createa key : value pair and set the key to something we will later use in the HTML. The value can be an empty string, but for the purpose of this post we'll set some default state:

```js
Vue.createApp({
  data() {
    return {
      message: 'Hello you!'
    }
  }
}).mount('#vueApp')
```

This state, `message`, is now acessible within our HTML. We use Vue's template syntax, mustaches, `{{ }}` to access this returned data in our HTML by adding the following:

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

You should now see the rendered `{{ message }}`, "Hello you!" ! 🎉 🥳

### Get some of that 2-way input binding going

What we've done so far is pretty basic, but very exciting when you think about what we can do next.

The core feature of Vue is declarative rendering - we describe how the HTML will look based on JavaScript state. Whenthe state is changed, the HTML will update automatically. State triggers the updates when it's changed and we consider this as **reactive**

We'll look at binding our state to the HTML and updating it using an text input field. Within the #vueApp HTML lets add the following:

```html
<div id="vueApp">
  {{ message }}

  <br />

  <input type="text" v-model="message" />
</div>
```

`v-model` is a special HTML attribute, called a directive, that we add to our regular HTML to tell Vue to bind something from the components state, message is specified here, to the HTML node. This is something for Vue and it won't effect our HTML. Similar to how you can use `data-attribute-name="some value"`.

In the browser you'll see the message is rendered in the input field and above it. As you star to edit the text in the input field, you will see Vue automatically update the text above it. This is called 2-way binding.

Vue is handling the input change events in the background and updating the HTML with the newly entered text, stupidly fast! This takes away the manual JS we would usually write to set up event listeners and innerHTML updates.

I see this as **'Vue is updating the HTML as the state is being updated'**.


I hope this super simple setup and intro to Vue is useful and I'll be looking to follow this up with a basic 'counter' exmaple to show how we can listen to DOM events within Vue **but** looking at how they're more functional and upate the _state_.
