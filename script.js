const apiKey = "288ddf51280c492b9cd221023230504"
const button = document.querySelector("#submitButton")
const input = document.querySelector("#textInput")
let cityName = document.querySelector("#cityName")
let countryName = document.querySelector("#countryName")
let cityTemp = document.querySelector("#temp")

let convertToC = false

const toggle = () => {
    let toggle = document.querySelector('.toggle')
    let text = document.querySelector('.text')
    convertToC = !convertToC
    if (convertToC) {
        toggle.classList.add('active')
        text.innerHTML = '°C'
        button.click()
    } else {
        toggle.classList.remove('active')
        text.innerHTML = '°F'
        button.click()
    }
}

button.addEventListener('click', async () => {
    let city = input.value.toLowerCase();
    let response = await axios.get(`http://api.weatherapi.com/v1/current.json?key=${apiKey}&q=${city}&aqi=no`)
    let temp = response.data.current.temp_f
    let tempC = response.data.current.temp_c
    let feelsLike = response.data.current.feelslike_f
    let feelsLikeC = response.data.current.feelslike_c
    let condition = response.data.current.condition.text
    let country = response.data.location.country
    
    cityName.innerText = `${city.toUpperCase()}`
    countryName.innerText = `(${country})`

    if (convertToC == true){
        cityTemp.innerText = `${condition} \n\n ${tempC} °C \n\n Feels like: ${feelsLikeC} °C`
        }
    else {
        cityTemp.innerText = `${condition} \n\n ${temp} °F \n\n Feels like: ${feelsLike} °F`
    }
})


document.querySelector('#textInput').addEventListener('keydown', function (e) {
    if (e.key === 'Enter') {
        button.click()
    }
})
