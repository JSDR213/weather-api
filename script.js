const apiKey = '3b93936521db4d49921220323230504'
const button = document.querySelector("#submitButton")

http://api.weatherapi.com/v1/current.json?key=3b93936521db4d49921220323230504&q=austin&aqi=yes2

button.addEventListener('click', async (event) => {
    event.preventDefault()
    const searchInput = document.querySelector("#textInput").value
    let city = document.querySelector("#cityName")
    let temp = document.querySelector("#temperature")
    let location = document.querySelector("#latlong")
    let dateTime = document.querySelector("#datetime")
    let locationCondition = document.querySelector("#condition")
    let iconCondition = document.querySelector("#conditionIcon")
    let locationWind = document.querySelector("#wind")
    let locationwindGusts = document.querySelector("#windgusts")
    let locationPrecipitation = document.querySelector("#precip")
    let response = await axios.get(`http://api.weatherapi.com/v1/current.json?key=${apiKey}&q=${searchInput}&aqi=yes2`)
    let place = response.data.location.name
    let cityTemp = response.data.current.temp_f
    let feelTemp = response.data.current.feelslike_f
    let region = response.data.location.region
    let condition = response.data.current.condition.text
    let lat = response.data.location.lat
    let long = response.data.location.lon
    let time = response.data.location.localtime
    let icon = response.data.current.condition.icon
    let wind = response.data.current.wind_mph
    let windGust = response.data.current.gust_mph
    let windDir = response.data.current.wind_dir
    let precipitation = response.data.current.precip_in
    let visibility = response.data.current.vis_miles
    let sun = response.data.current.uv
    let humid = response.data.current.humidity
    
    //found the code below to convert the date and time to something more friendly
    const dateTimeString = time;    // Set the date and time as a string
    const [dateString, timeString] = dateTimeString.split(' '); // Split the date and time into separate variables
    const [year, month, day] = dateString.split('-'); // Split the date into year, month, and day components
    const [hour, minute] = timeString.split(':'); // Split the time into hour and minute components
    const dateObj = new Date(year, month - 1, day, hour, minute); // Create a new Date object with the components
    const formattedDateTime = dateObj.toLocaleString('en-US', { // Format the date and time
    hour: 'numeric',
    minute: 'numeric',
    second: 'numeric',
    hour12: true,
    year: 'numeric',
    month: 'long',
    day: 'numeric'
    });

    //found the code below to convert the latitude and longitude from decimal degrees to degrees minutes seconds
    function truncate(n) {
        return n > 0 ? Math.floor(n) : Math.ceil(n);
    }
    
    function getDMS(dd, longOrLat) {
        let hemisphere = /^[WE]|(?:lon)/i.test(longOrLat)
        ? dd < 0
          ? "W"
          : "E"
        : dd < 0
          ? "S"
          : "N";
    
        const absDD = Math.abs(dd);
        const degrees = truncate(absDD);
        const minutes = truncate((absDD - degrees) * 60);
        const seconds = ((absDD - degrees - minutes / 60) * Math.pow(60, 2)).toFixed(2);
    
        let dmsArray = [degrees, minutes, seconds, hemisphere];
        return `${dmsArray[0]}°${dmsArray[1]}'${dmsArray[2]}" ${dmsArray[3]}`;
    }
    
    var latDMS = getDMS(lat, 'lat'); 
    var lonDMS = getDMS(long, 'long');
    
    city.innerHTML = `Current condition for <br> ${place}, ${region}`
    location.innerHTML = `Located at ${latDMS} lattitude and ${lonDMS} longitude.`
    dateTime.innerHTML = `Current local date and time is ${formattedDateTime}`
    temp.innerHTML = `Temperature is ${cityTemp}\u00B0F, RealFeel temp is ${feelTemp}\u00B0F`
    iconCondition.innerHTML = `<img src=${icon}>`
    locationCondition.innerHTML = `Current conditions are ${condition}.<br> Humidity is at ${humid}% and the sun has a uv index of ${sun}.`
    locationWind.innerHTML = `Wind speed ${wind}MPH from a ${windDir} direction`
    locationwindGusts.innerHTML = `Wind gusts up to ${windGust}MPH`
    locationPrecipitation.innerHTML = `Current rain is ${precipitation} inches and there is a visibility of ${visibility} miles`
})

