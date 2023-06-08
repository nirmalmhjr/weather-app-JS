/**
 * Weather App
 * TODO: Complete getWeatherData() to return json response Promise
 * TODO: Complete searchCity() to get user input and get data using getWeatherData()
 * TODO: Complete showWeatherData() to set the data in the the html file from response
 */

// API_KEY for maps api
let API_KEY = '1f33f71431db9424d14e4d035b6f2c51'

/**
 * Retrieve weather data from openweathermap
 * HINT: Use fetch()
 * HINT: URL should look like this: 
 * https://api.openweathermap.org/data/2.5/weather?q=detroit&appid=a8e71c9932b20c4ceb0aed183e6a83bb&units=imperial
 */
getWeatherData = (city) => {
  const URL = "https://api.openweathermap.org/data/2.5/weather";
  //HINT: Use template literals to create a url with input and an API key
  // let FULL_URL = `${URL}?q=${city}&appid=${API_KEY}&units=metric`
  let FULL_URL = `${URL}?q=${city}&APPID=${API_KEY}&units=metric`
  //CODE GOES HERE
  
  
  let weatherPromise  = fetch(FULL_URL)

   return weatherPromise.then((response)=>{
    return response.json()
  })
  }
  

getWeatherData('kathmandu')

/**
 * Retrieve city input and get the weather data
 * HINT: Use the promise returned from getWeatherData()
 */
searchCity = () => {
  const city = document.getElementById('city-input').value;
  // CODE GOES HERE
  getWeatherData(city).then((response)=>{
    showWeatherData(response)
  }).catch((error)=>{
    console.log(error)
  })
}

// searchCity()
/**
 * Show the weather data in HTML
 * HINT: make sure to console log the weatherData to see how the data looks like
 */
showWeatherData = (weatherData) => {
  //CODE GOES HERE
  document.querySelector('#city-name').innerHTML = weatherData.name;

  document.querySelector('#weather-type').innerHTML = weatherData.weather[0].description

  document.querySelector('#temp').innerHTML = weatherData.main.feels_like
  document.querySelector('#min-temp').innerHTML = weatherData.main.temp_min
  document.querySelector('#max-temp').innerHTML = weatherData.main.temp_max
  
}
