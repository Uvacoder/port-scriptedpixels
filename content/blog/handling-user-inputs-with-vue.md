---
title: 'Handling user input with Vue'
date: '2022-02-22'
description: 'Handling user input using the v-model and v-on directives.'
tags: ['Vue', 'JavaScript']
category: 'Web Development'
---

<p class="introduction">Handling user input using the v-model and v-on directives</p>

In the <nuxt-link to="rendering-lists-in-vue">last post</nuxt-link> we looked at rendering array data in HTML with the use of the `v-for` [directive](https://vuejs.org/api/built-in-directives.html#built-in-directives). We store an array of objects, called items, in the application state:

```js
const vueApp = Vue.createApp({
  data () {
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

We then render an `<li>` for each item in items with the value of label in a paragraph tag:
```html
<ul>
  <li v-for="item in items" :key="item.id">
    <p>{{ item.label }}</p>
  </li>
</ul>
```

## Adding items to the list

Lets update the HTML to allow a user to add items to the list:

We'll want the user to be able to type the name in to an input field. We'll add a `v-model` attribute to tell Vue to create a two-way bind between the input and the app's state, with a key called `newItem`. On page load, Vue will automatically populate the input with any data stored in this key. Vue will also update the state in the app when the user enters text in to the input.

_We can see this two-way binding in action by adding `{{ newItem }}` to the HTML below the input, or if you open the dev-tools and watch the state update. [We saw this on the 1st post](/blog/getting-started-with-vue)_

Next we need to add a button for the user to click so the item is added to the array of items. We'll use Vue's `v-on` directive that adds a click event listener. This is similar to setting up a `element.addEventListener()` in JavaScript.

```html
<input type="text" v-model="newItem" />

<button v-on:click="addNewItemToList">Add item</button>

<ul>
  <li v-for="item in items" :key="item.id">
    <p>{{ item.label }}</p>
  </li>
</ul>
```

The method we call with the `v-on:click` directive needs to be added to our Vue code. We have to create a `methods: {}` object, under our `data()` function, in our Vue code:

```js
const vueApp = Vue.createApp({
  data () {
    return {
      items: [
        {
          id: 1,
          label: 'Pack of eggs'
        },
        newItem: '',
        ...
      ]
    }
  },

  methods: {
    addNewItemToList () {

    }
  }
}).mount('#vueApp')
```

Functions in the methods object can be called from within the HTML using directives or from within the Vue app code. To call the function from within the Vue app itself, you would need to use `this.addNewItemToList()`.

We write regular JavaScript within these functions. We're simply going to check if there's any text in `newItem` and then push the value into the array of items with a random id. We'll then reset the value of `newItem` to an empty string, so the user can write their next item without having to delete their last entry:

```js
...
  methods: {
    addNewItemToList () {
      if (!this.newItem.length) return

      this.items.push({
        id: Math.floor(Math.random() * (100 - 1) + 1),
        label: this.newItem
      })
      // set newItem back to an empty string, clearing the input for the next item
      this.newItem = ''
    }
  }
...
```
I've also added a directive to the input to call the `addNewItemToList` method. This listens out for a keydown event with a modifier called `.enter` so it only fires when a user presses the enter key:

```html
<input
  v-model="newItem"
  type="text"
  aria-label="Type a new item to add to your list"
  class="text-black p-2"
  placeholder="Next item..."
  @keydown.enter="addNewItemToList"
/>
```

We can also use Vue to bind the state of `newItem` to a disabled properpty on the `<button>` We use the `:disabled="!newItem.length"` below to check if there's no length to the `newItem` string. This then enables the disabled attribute on the button, and then removes the attribute when `newItem` has a length greater than 0:

```html
<button
  class="py-2 px-4 border-r border-none bg-green-500"
  :disabled="!newItem.length"
  @click="addNewItemToList">
  Add item
</button>
```

We style the disabled button state with the following:

```css
button[disabled] {
  cursor: not-allowed;
  opacity: 0.5;
}
```

## Demo
A demo of what we've created is below:

<add-item></add-item>

The next post will look at how `methods: {}` can be used to fetch data and populate our list with data from an API.
