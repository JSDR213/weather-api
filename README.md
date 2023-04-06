# JSDR 213 - April 5, 2023

### Open Weather API

Lets take our API call functionality up a notch by working with an API that requires a (free) password known as an API key.

First, create an account at https://www.weatherapi.com/

Lets look at the documentation for the API together. Once you get a key, enter it into the input, enter a city in, and hit the response button. You should see your call, and the data. The url should look something like this

```
`http://api.weatherapi.com/v1/current.json?key=${key}&q=${city}&aqi=no`
```

We're going to use the app Insomnia (or Postman, if you are already familar with that) to test our cities, and our key. We can see how single worded cities like London, Paris, or Boston will work. How can we make a call for a city like New York, Los Angeles, or Rio de Janero? Let's plug a few of these different cities into the app to see what the call looks like, and to see what kind of data we are working with.



We test out our API calls with these apps because we can check to see if the URL will work before start attaching the Axios functionality to it. If it doesn't work on Insomnia, its not going to work on our app!

We can do our usual HTML set up creating a text input, a button, and some empty text elements, and then using DOM manipulation to populate them:

```html

<input id="textInput" type="text" placeholder="enter city here" />
<button id="submitButton"> Click Here </button>

<h1 id="cityName"> </h1>
<h2 id="temp"> </h2>

```

and populate with as much data as you would like, based off of the API's response


Remember, we'll need to add our Axios and JS files in the head of our HTML before we can do anything

```html
```

Now we can get working on our JS, which may look something like this 

```js

const apiKey = your api key
const button = document.querySelector(The Button!)
const input = document.querySelector(The Input!).value
```
Though obviously the Button and Input name's aren't correct there, and your api key ****probably**** isn't 'your api key' (it'd be pretty wild if it was) so make sure to update those with your information. Hey we can't give you all the answers for this!

Next lets add a Click event to our button that calls a function to make the Axios call to the url provided.

Test your API call by logging your data into the console, then render it on screen to see your live information on screen! You may need to drill down through your data to get the information that you want!

We've already seen that using city names with spaces could be an issue, make sure to to console.log our url that we are calling as well to make sure it matches our correct Insomnia calls. 

Will ...q=sanfrancisco... in the url work?
 
Once you have your data logged, add in some style through a CSS file. It looks like our Weather has an icon as well, can we have that image rendered on screen?


This lab/HW will be due 4/12/23 at the beginning of class 
