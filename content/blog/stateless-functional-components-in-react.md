---
title: "Stateless, functional, components in React"
date: "2018-11-03"
---

I've been learning [React](https://reactjs.org) for the past year and have found many projects, and tutorials, that use class components when a stateless/functional component would be ideal.

I decided I wanted to update my **very, very,** outdated blog with what I'm currently currently working on, and what better way to do it than brain dump some new learnings.

The difference between the two, to me, is simple.

A `Class` component is used when we're dealing with the `state` of a component and a `stateless` component, is well, used when we don't need to deal with the `state` of the App. I know there's more to it than that but if you keep that in mind when building a new component to your app then it'll help you write a cleaner, leaner, and simpler component.

Does the component have any sort of `state` involved? If not, it's a functional, a dumb, component that's pretty much just going to display the data that's been passed to it through `props`.

An example, taken from a "[Find what the weather is](https://www.youtube.com/watch?v=204C9yNeOYI&t=2450s)" tutorial I followed recently:

A classic React, `class`, component:

```js
import React, { Component } from "react";

export default class Forms extends Component {
  render() {
    return (
      <form onSubmit={this.props.getWeather}>
        <input type="text" name="city" placeholder="City" />
        <input type="text" name="country" placeholder="Country" />
        <button>Get weather</button>
      </form>
    );
  }
}
```

The example above has no state management and has a a `prop` of `getWeather` being passed down from `App.js`. This prop is a function that's used to make an API call to [https://www.openweathermap.org.](https://www.openweathermap.org)

The above can easily be changed to a functional React component. See below:

```js
import React from "react";

const Forms = props => (
  <form onSubmit={props.getWeather}>
    <input type="text" name="city" placeholder="City" />
    <input type="text" name="country" placeholder="Country" />
    <button>Get weather</button>
  </form>
);

export default Forms;
```

We don't need to import the `Component` from React here as we won't be making use of the methods it supplies, such as `ComponentDidMount()` or `ComponentWillUpdate()`.

Turning this in to a functional component, using ES6, also gives us some nice little features. We use an arrow function and pass in `props` : `Const Forms = props =>()`. This allows us to drop the word "`this`" from the component. All annoying quirks with JavasScripts `this` word are avoided. Making larger components easier to navigate. See the `onSubmit`

```js
// Class
<form onSubmit={this.props.getWeather}>

// Functional
<form onSubmit={props.getWeather}>
```

We can also drop the bind keyword! 🙏🏽

What I really like about this is that it means these components become presentational components where we focus purely on displaying data to the user. The data being passed through is handled by a higher-level component, or by flux/redux.

Other benefits are that it's' much easier to test and you get a performance increase. We no longer need to worry bout lifecycles or state and we know what data to expect and what should be rendered on the page.

 

I'll be adding more to this post if I find I've missed out any other key pieces of information
