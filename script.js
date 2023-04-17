const apiKey = "2181667f57e545ee8c1220624230504";

const searchButton = document.getElementById("searchButton");
const aqiAnswer = "yes";
const input = document.getElementById("textInput");
const weatherElement = document.getElementById("weather");
const airQuality = document.getElementById("airQuality").checked;

const getWeather = async () => {
  const weatherLog = await axios.get(
    `http://api.weatherapi.com/v1/current.json?key=2181667f57e545ee8c1220624230504&q=Jacksonville&aqi=yes`
  );
  console.log(weatherLog);
};

// Functions & Event Listeners - Search Input to Find Current Weather Data
searchButton.addEventListener("click", async () => {
  let searchInput = input.value;

  // Get the value of the 'checked' attribute of the 'airQuality' element
  const airQuality = document.getElementById("airQuality").checked;

  axios
    .get(
      `https://api.weatherapi.com/v1/current.json?key=${apiKey}&q=${searchInput}&aqi=${aqiAnswer}`
    )
    .then((searchResponse) => {
      console.log(searchResponse);

      const weatherData = {
        city: searchResponse.data.location.name,
        state: searchResponse.data.location.region,
        country: searchResponse.data.location.country,
        localTime: searchResponse.data.location.localtime,
        timezone: searchResponse.data.location.tz_id,
        temperature: searchResponse.data.current.temp_f,
        feelsliketemp: searchResponse.data.current.feelslike_f,
        conditionIcon: searchResponse.data.current.condition.icon,
        conditionText: searchResponse.data.current.condition.text,
        airQuality: Math.round(searchResponse.data.current.air_quality.co),
      };

      weatherElement.innerHTML = `
          <p>City: ${weatherData.city}</p>
          <p>Region: ${weatherData.state}</p>
          <p>Country: ${weatherData.country}</p>
          <p>Local Time: ${weatherData.localTime}</p>
          <p>Timezone: ${weatherData.timezone}</p>
          <p>Temperature: ${weatherData.temperature}°F | Feels Like ${
        weatherData.feelsliketemp
      }°F</p>
          <p><img src = https:${weatherData.conditionIcon}></p>
          <p>${weatherData.conditionText} ${
        airQuality ? `<p>Air quality (co): ${weatherData.airQuality}</p>` : ""
      }`;
    })
    .catch((error) => {
      console.error(error);
      alert("Unable to fetch weather data. Please try again later.");
    });
});
