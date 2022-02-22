---
title: 'Rendering lists in Vue.js'
description: "Using v-for to render a list of items in HTML from the application state."
date: '2022-02-16'
tags: ['Vue', 'Front-end', 'JavaScript']
category: 'Web Development'
---

<p class="introduction">Using v-for to render a list of items in HTML from the application state</p>

Rendering a list of data is a pretty common task in a front-end developers role. Managing and updating the list is also quite common, Vue makes this very easy for us to do.

_I'd recommend reading my last post about <nuxt-link to="getting-started-with-vue">getting started with Vue</nuxt-link>, if you're new to Vue. The below is still using Vue as a CDN link in a regular HTML page._


## Rendering a list using v-for

Vue provides built-in directives for us to use in HTML to tell Vue to do something to the DOM element. One of them is `v-for`. It's used to loop over data, usaully an array or object.

Lets say we have the following data in our Vue app:

```js
const vueApp = Vue.createApp({
  data() {
    return {
      items: [
        {
          id: 1,
          label: 'Pack of eggs'
        },
        {
          id: 2,
          label: 'Bread'
        },
        {
          id: 3,
          label: 'Milk'
        },
        {
          id: 4,
          label: 'Cereal'
        },
      ]
    }
  }
}).mount('#vueApp')
```

With regular JavaScript we'd have to do something like:

```js
...
items.forEach((item) => {
  let li = document.createElement('li')
  ul.appendChild(li)
  li.innerHTML += item.label
})
...
```

With Vue we can write this in HTML with:

```html
<ul>
  <li v-for="item in items" :key="item.id">
    <p>{{ item.label }}</p>
  </li>
</ul>
```

In the code above we tell Vue to render an `<li>` for each `item` object in the `items` array. Each `<li>` has an attribute called `key` with the value of the relevant `id`. Within each `<li>` we want to render the value of `label`, within a `<p>` tag.

The `:key` here is important for Vue when working with manipulating the list. It's not really necessary for this example but it's good to know about this as you'll need it when you come to re-organising lists later. Vue uses this key to keep track of the changes in the DOM, you **have** to use something unique to that particular item. The example above uses an ID and we, the developer, would need to make sure that ID is unique. You may see something like the below in some code examples:

```html
<ul>
  <li v-for="(item, index) in items" :key="index">
    <p>{{ item.label }}</p>
  </li>
</ul>
```

Using the index isn't best practice and should be avoided, it'll keep code linters quiet but it's best you don't fall into the habit early on and ensure you use a unique key/id instead.

For larger objects in an array you can reduce the amount of repeated code you write by destructuring the object and pulling out the values you need:

Data:
```js
{
	"userId": 1,
	"id": 1,
	"title": "delectus aut autem",
	"completed": false
}
```

Vue:
```html
<ul>
  <li v-for="{userId, id, title, completed} in items" :key="id">
    <p>{{ userId }} : {{ title }}</p>
    <p>{{ completed }}</p>
  </li>
</ul>
```

### Updating the list using the dev console

To really show off Vue's reactivity magic we can use our browser devtools console and update the list with some new data as well as remove an item. Doing the below will show how the HTML reacts to the state/data we provide, without us having to write any additional JS to update the DOM:

```js
// add an item to the array and see the items update in the browser and wherever you have rendered the data
vueApp.items.push({id: 5, label: 'Jam'})

// remove an item and see the same
vueApp.items.pop()
```

The next post will look at how to add an item to the list 🤓
