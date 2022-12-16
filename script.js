const cityname =  document.getElementById('city-name')
const weathertype = document.getElementById('weather-type')
const temp = document.getElementById('temp')
const humidity = document.getElementById('humidity')

const getWeatherData = (city) => {
  const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '04771a00e7msh10ea88d6f2d37a9p190563jsnafa04595016b',
		'X-RapidAPI-Host': 'bestweather.p.rapidapi.com'
	}
};

 return fetch(`https://bestweather.p.rapidapi.com/weather/${city}/today?unitGroup=metric`, options)
	.then(response => response.json())
	.then(response => response)
	.catch(err => console.error(err));
   console.error(err));
}
const searchCity = async () => {
const city = document.getElementById('city-input').value; 
const data = await getWeatherData(city)
showWeatherData(data)
}
const showWeatherData = (weatherData) => {
   document.getElementById('weather-type').innerText = weatherData.currentConditions.conditions
   document.getElementById('city-name').innerText = weatherData.resolvedAddress
   document.getElementById('temp').innerText = weatherData.currentConditions.temp
   document.getElementById('humidity').innerText = weatherData.currentConditions.humidity
}

