
const apiKey = '19ae3f4e8e7548f3bb3220314230504'
const button = document.querySelector('#submitButton')

button.addEventListener('click', async () => {

const input = document.querySelector('#textInput').value
let city = document.querySelector('h1')
let temp = document.querySelector('h2')
let humid = document.querySelector('h3')


let response = await axios.get(`http://api.weatherapi.com/v1/current.json?key=${apiKey}&q=${input}&aqi=no`)
let cityName = response.data.location.name
let cityRegion = response.data.location.region
let cityTemp = response.data.current.temp_f 
let cityCondition = response.data.current.condition.text
let cityConditionIcon = response.data.current.condition.icon
let humidity = response.data.current.humidity
let wind = response.data.current.gust_mph


console.log(cityName);
console.log(response);

city.innerHTML = `${cityName}, ${cityRegion}`
temp.innerHTML = `It is currently ${cityTemp} degrees fahrenheit and the weather conditions consist of ${cityCondition} <img src=${cityConditionIcon}>`
humid.innerHTML = `There is ${humidity}% humidity and we will have wind gusts up to ${wind}MPH`

});