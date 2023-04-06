const apiKey = "288ddf51280c492b9cd221023230504"
const button = document.querySelector("#submitButton")
const input = document.querySelector("#textInput")
let cityName = document.querySelector("#cityName")
let cityTemp = document.querySelector("#temp")


button.addEventListener('click', async () => {
    let city = input.value.toLowerCase();
    let response = await axios.get(`http://api.weatherapi.com/v1/current.json?key=${apiKey}&q=${city}&aqi=no`)
    let temp = response.data.current.temp_f
    let feels_like = response.data.current.feelslike_f
    let condition = response.data.current.condition.text
    let country = response.data.location.country
    
    cityName.innerText = `${city.toUpperCase()} \n ${country}`
    cityTemp.innerText = `${condition} \n\n ${temp} °F \n\n Feels like: ${feels_like} °F`
})


document.querySelector('#textInput').addEventListener('keydown', function (e) {
    if (e.key === 'Enter') {
        button.click()
    }
})
