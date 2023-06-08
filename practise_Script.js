let API_KEY = "a8e71c9932b20c4ceb0aed183e6a83bb";

 getWeatherData = (city) => {
    let URL = "https://api.openweathermap.org/data/2.5/weather";
    // https://api.openweathermap.org/data/2.5/weather?q=detroit&appid=a8e71c9932b20c4ceb0aed183e6a83bb&units=imperial
    
    let FULL_URL = `${URL}?q=${city}&appid=${API_KEY}&units=metric`

// console.log(FULL_URL)
let weatherPromise = fetch(FULL_URL)
// console.log(weatherPromise)
return weatherPromise.then((response)=>{
    // console.log(response.json());
    return response.json()
})
}

// getWeatherData('kathmandu')


searchCity = () =>{
    let city = document.getElementById('city-input').value;
    
    getWeatherData(city).then((response)=>{
        console.log(response)
        showWeatherData(response)
    }).catch((error)=>{
        console.log(error)
    })

}

showWeatherData = (weatherData) =>{
    document.getElementById('city-name').innerHTML = weatherData.name
    document.getElementById('weather-type').innerHTML = weatherData.weather[0].description;
    document.getElementById('temp').innerHTML = weatherData.main.temp
    document.getElementById('min-temp').innerHTML = weatherData.main.temp_min
    document.getElementById('max-temp').innerHTML = weatherData.main.temp_max
    
} 