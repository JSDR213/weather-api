const apiKey = "fb24dfeacb134b2f96c220226230504";
const button = document.querySelector('button');
const cityInput = document.querySelector('input');
const cityName = document.querySelector('#cityName');
const cityTemp = document.querySelector('#cityTemp');
const weatherIcon = document.querySelector('#weatherIcon')

button.addEventListener('click', 
    async ()=>{
        console.log('button clicked')
        let city = cityInput.value;
        let response = await axios.get(
            `http://api.weatherapi.com/v1/current.json?key=${apiKey}&q=${city}&aqi=no`
        )
        let temp = response.data.current.temp_f;
        let icon = response.data.current.condition.icon;
        cityName.textContent = `The temperture in ${city} is:`;
        // cityName.textContent = `Is:`;
        cityTemp.textContent = `${temp}ºF`;
        weatherIcon.setAttribute('src', icon)
        // console.log(response.data.error.message)
        // if (response.data.error.message = "No matching location found."){
        // cityName.textContent = response.data.error.message 
        // }
    }

)