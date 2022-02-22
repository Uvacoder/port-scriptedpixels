---
title: 'React Weather Finder App'
date: '2019-01-18'
description: 'A React application that uses the Open Weathermap API for local weather informaiton.'
tags: ['API', 'JavaScript', 'React', 'Responsive', 'REST', 'Front-end', 'React']
category: 'Web Development'
---

<p class="introduction">A React application that uses the Open Weathermap API for local weather informaiton.</p>

My version of the "Weather Finder App", from [this tutorial](https://www.youtube.com/watch?v=204C9yNeOYI&t=2450s), can be used [here](https://scriptedpixels.co.uk/playground/weather-finder/).

I wanted to share the React app that I've created. I've found that going through tutorials is a good way to learn a framework **but** I feel that when you don't revisit, or review, what you've coded then you don't truly understand what you've built.

1 month later after coding this...

I've given myself a long break from this piece and come back to it today. I've actually broken down some of the tutorial in a [previous post](https://scriptedpixels.co.uk/stateless-functional-components-in-react/) already.

## Down to the details

What this app actually does is...

On Component Did Mount (a React lifecycle method) it checks if it can use the browser's location data:

```js
componentDidMount = () => {
  var that = this
  // check to see if we're allowed to get the users browsers location
  navigator.geolocation.watchPosition(
    function (position) {
      navigator.geolocation.getCurrentPosition((position) => {
        that.getBrowserLatLon(position)
      })
    },
    function (error) {
      if (error.code === error.PERMISSIONPERMISSION_DENIED) {
        that.setState({
          loading: false,
        })
      }
    },
  )
}
```

**If it can** it use the location data then it'll go ahead and make a call to Open Weather Map's API and populate the state with the relative weather information.

```js
getBrowserLatLon()

getBrowserLatLon = async pos => {
  this.setState({
    lat: pos.coords.latitude.toString(),
    lon: pos.coords.longitude.toString()
  });

  const lat = this.state.lat;
  const lon = this.state.lon;

  if (this.state.city === undefined && this.state.country === undefined) {
    try {
      const api_call = await fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`);

      const data = await api_call.json();

      // show's browser data
      console.info(`lat: ${lat}, lon: ${lon}, returned data:${JSON.stringify(data)}`);

      if (data.cod !== "404") {
        this.setState({
          temperature: data.main.temp,
          city: data.name,
          country: data.sys.country,
          humidity: data.main.humidity,
          description: data.weather[0].description,
          lat: lat,
          lon: lon,
          error: undefined,
          loading: false,
          icon: data.weather[0].icon + ".png"
        });
      } else {
        this.showError(data.message +", please check your spelling, and try again");
      }
    } catch (err) {
      this.showError(err);
    }
  }
};
```

**If it can't** (on error) have access to the browser' location data it'll show a form asking for the user's City and Country. When this form's been submitted it'll go ahead and make the API call and then populate the state with the relative weather information. getWeather()

```js
getWeather()
  // from the weather component
  getWeather = async e => {
    const city = e.target.elements.city.value;
    const country = e.target.elements.country.value;

    if (city && country) {
      try {
        const api_call = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city},${country}&appid=${API_KEY}&units=metric`);
        const data = await api_call.json();
        // show's data when location is provided
        console.info(`city: ${city}, country: ${country}, returned data:${JSON.stringify(data)}`);

        if (data.cod !== "404") {
          this.setState({
            temperature: data.main.temp,
            city: data.name,
            country: data.sys.country,
            humidity: data.main.humidity,
            description: data.weather[0].description,
            error: undefined,
            loading: false,
            icon: data.weather[0].icon + ".png"
          });
          // get the icon of the weather
        } else {
          this.showError(data.message + ", please check your spelling, and try again");
        }
      } catch (err) {
        this.showError(err);
      }
    } else {
      this.showError("Please enter values");
    }
  };
```

## Issues

I noticed a couple of issues with the App once I had finished the tutorial:

1. If you misspelt a City/Country then the app would fail and a user is presented with no error message(s)
2. If you were to submit empty fields then the App would show a generic error message

## The fix

I've added the following code to handle the error when a misspelt City or Country is submitted:

## Original code:

```js
getWeather = async e => {
    e.preventDefault();
    const city = e.target.elements.city.value;
    const country = e.target.elements.country.value;
    const api_call = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city},${country}&appid=${API_KEY}&units=metric`);
    const data = await api_call.json();
    if (city && country) {
        this.setState({
            temperature: data.main.temp,
            city: data.name,
            country: data.sys.country,
            humidity: data.main.humidity,
            description: data.weather[0].description,
            error: ""
        });
    } else {
        this.setState({
            temperature: undefined,
            city: undefined,
            country: undefined,
            humidity: undefined,
            description: undefined,
            error: "Please enter the values."
        });
    }
};
```

## My fix:

```js
getWeather = async e => {
  e.preventDefault();

  const city = e.target.elements.city.value;
  const country = e.target.elements.country.value;

  if (city && country) {
    try {
      const api_call = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city},${country}&appid=${API_KEY}&units=metric`);

      const data = await api_call.json();

      if (data.cod !== "404") {
        this.setState({
          tempreture: data.main.temp,
          city: data.name,
          country: data.sys.country,
          humidity: data.main.humidity,
          description: data.weather[0].description,
          error: undefined
        });
      } else {
        this.showError(data.message + ", please check your spelling, and try again");
      }
    } catch (err) {
      this.showError(err);
    }
  } else {
    this.showError("Please enter values");
  }
};
```

There's not much different here. I've wrapped the `await` with a `try` incase we get any error messages. I've got a small function below to show error messages on the front-end:

```js
showError = (errmsg) => {
  this.setState({
    temperature: undefined,
    city: undefined,
    country: undefined,
    humidity: undefined,
    description: undefined,
    lat: undefined,
    lon: undefined,
    error: errmsg,
    loading: false,
    icon: undefined,
  })
}
```

Not too sure what else I can break down here. I've got a [link to my repo](https://bitbucket.org/KamBanwait/weather-finder/src/master/) here for you to clone and try it out yourself 👍🏽
