const apiKey = '298f3c5d10d141d5843153415230404';
const button = document.getElementById('submitButton');
const input = document.getElementById('textInput')
const weatherImg = document.getElementById('weatherImg');
const cityNameDisplay = document.getElementById('cityName');
const weatherTemperature = document.getElementById('temp');
const weatherCondition = document.getElementById('weatherText');

button.addEventListener('click', async () => {
    let cityName = input.value;
    let response = await axios.get(
        `http://api.weatherapi.com/v1/forecast.json?key=${apiKey}&q=${cityName}&days=1&aqi=no&alerts=no`
)
    let todaysWeather = response.data.current.temp_f
    
    let weatherText = response.data.current.condition.text
    let weatherIcon = response.data.current.condition.icon
    
    weatherCondition.innerHTML = weatherText;
    weatherImg.src = weatherIcon;

    cityNameDisplay.innerHTML = cityName.toUpperCase();
    weatherTemperature.innerHTML = `${todaysWeather}ºF`
    console.log(response)
    console.log(cityName)
    console.log(todaysWeather)
});