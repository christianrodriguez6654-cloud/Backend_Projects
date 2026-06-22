const axios = require('axios');
const config = require('../config/env');

// URL base de OpenWeatherMap
const BASE_URL = 'https://api.openweathermap.org/data/2.5/weather';

async function getWeatherByCity(city) {
  const response = await axios.get(BASE_URL, {
    params: {
      q: city,           // nombre de la ciudad
      appid: config.openWeatherApiKey,
      units: 'metric',   // temperatura en Celsius
      lang: 'es',        // descripción en español
    },
  });

  // Extraemos solo lo que nos interesa del JSON gigante que devuelve la API
  const data = response.data;

  return {
    city: data.name,
    country: data.sys.country,
    temperature: data.main.temp,
    feels_like: data.main.feels_like,
    humidity: data.main.humidity,
    description: data.weather[0].description,
    wind_speed: data.wind.speed,
  };
}

module.exports = { getWeatherByCity };