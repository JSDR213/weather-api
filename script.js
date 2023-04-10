const apiKey = 'cf208495165446d390c161013230804'

let button = document.querySelector("#searchButton")
let forImgArray = document.querySelectorAll('.foreimg')
let forDayArray = document.querySelectorAll('.foreday')
const d = new Date();
let day = d.getDay()

console.log(forImgArray)

button.addEventListener('click', async () => {

    let textInput = document.querySelector("#inputBar").value
    let cityName = document.querySelector("#cityName")
    let todImage = document.querySelector("#todImage")
    const imageDiv = document.querySelector("#currentImg")
    const umbrellaAnswer = document.querySelector("#umbrellaAnswer")
    const currentFore = document.querySelector("#currentFore")
    const looksLike = document.querySelector("#looksLike")
    const sevenDay = document.querySelector("#sevenDay")

    let response = await axios.get(`http://api.weatherapi.com/v1/forecast.json?key=cf208495165446d390c161013230804&q=${textInput}&days=7&aqi=no&alerts=no`)
    let citName = response.data.location.name
    let todImg = response.data.current.condition.icon
    
   // let umbAnswer
    let grabUmbrellaCode = response.data.current.condition.code
    let curFore = response.data.current.condition.text

    console.log(response)

   if (grabUmbrellaCode > 1029){
        umbrellaAnswer.innerText = "You should probably grab an umbrella if you are currently in"
   } else {
        umbrellaAnswer.innerText = "Ballin Oates says that you shouldn't need an umbrella if you in"
   }

    

    looksLike.innerText = "The forecast looks like:"
    //console.log(forecastArray)
    cityName.innerText = citName
    imageDiv.innerHTML = `<img src=${todImg}>`
    currentFore.innerText = curFore
    sevenDay.innerText = 'The 7 day Forecast:'

    for (let i = 0; i < 7; i++){
        let forecastArray = response.data.forecast.forecastday[i].day.condition.icon
        forImgArray[i].innerHTML = `<img src=${forecastArray}>`
    }
   
    for (let i = 0; i < 7; i++){
        const dayArray = ['sun', 'mon', 'tues', 'wed', 'thurs', 'fri', 'sat', 'sun', 'mon', 'tues', 'wed', 'thurs', 'fri', 'sat', 'sun']
        forDayArray[i].innerText = dayArray[day]
        day ++
    }

})