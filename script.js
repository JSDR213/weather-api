const apiKey = 'dd026f059d6a4f90af5220509230504'
const button = document.querySelector('button')
const input = document.querySelector('input')

const cityName = document.getElementById('cityName')
const cityTemp = document.getElementById('temp')
const cityCondition = document.getElementById('condition')
const cityIcon = document.getElementById('icon')
const cityTime = document.getElementById('cityTime')


// This code will let the user search by hitting the Enter key instead of having to click
input.addEventListener('keypress', function onEvent(event) {
    if (event.key === 'Enter') {
        document.getElementById('submitButton').click()
    }
})

// This code controls the API call, which activates on click (or when Enter is pressed)
button.addEventListener('click', async () => {
    let cityInput = input.value
    let response = await axios.get(`http://api.weatherapi.com/v1/current.json?key=${apiKey}%20&q=${cityInput}&aqi=no`)
    console.log(response)
    let responseCityName = response.data.location.name
    let responseRegion = response.data.location.region  //Region for overseas kind of sucks, but is state for US. how to remove for overseas?
    let responseCountry = response.data.location.country

    let responseCityTemp = response.data.current.temp_c
    let responseCityTime = response.data.location.localtime
    let responseCityIcon = response.data.current.condition.icon
    let responseConditions = response.data.current.condition.text

    if (responseRegion === '') {
        cityName.innerText = `${responseCityName}, ${responseCountry}`
    } else {
        cityName.innerText = `${responseCityName}, ${responseRegion}, ${responseCountry}`
    }
    cityTemp.innerHTML = `Current Temperature: ${responseCityTemp}° Celsius`
    cityTime.innerText = `Local Time: ${responseCityTime}`
    cityCondition.innerText = `Current Weather Conditions: ${responseConditions}`
    cityIcon.innerHTML = `<image src=${responseCityIcon}>`    
})