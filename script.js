console.log('working')

const apiKey= "bac5eaf259d34f8d92e220047230504"
const button = document.querySelector("#submitButton")
const nameH1 = document.querySelector("#cityName")
const tempH2 = document.querySelector("#temp")
const imageDiv = document.querySelector("#image")


button.addEventListener('click', async () => {
    const input = document.querySelector("#textInput").value
    let response = await axios.get(`http://api.weatherapi.com/v1/current.json?key=${apiKey}&q=${input}&aqi=yes`)
    let locationName = response.data.location.name
    console.log(locationName)
    let locationRegion = response.data.location.region
    let locationCountry = response.data.location.country
    let locationTempF = response.data.current.temp_f
    console.log(locationTempF)
    nameH1.innerHTML = `${locationName}, ${locationRegion}, ${locationCountry}`
    tempH2.innerHTML = `${locationTempF}°F`
    let tempImage = response.data.current.condition.icon
    imageDiv.innerHTML = `<image src = ${tempImage}>`
})


document.querySelector('#textInput').addEventListener('keypress', function (e) {
    if (e.key === 'Enter') {
        button.click()
    }
})