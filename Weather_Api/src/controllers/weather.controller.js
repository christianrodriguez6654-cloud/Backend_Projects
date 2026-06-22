const { getWeatherByCity } = require('../services/weather.service');

async function getWeather(req, res, next) {
  try {
    const { city } = req.params; // extrae 'London' de /weather/London
    const weather = await getWeatherByCity(city);
    res.json({ data: weather });
  } catch (error) {
    // Si la ciudad no existe, OpenWeatherMap devuelve 404
    if (error.response?.status === 404) {
      return next({ status: 404, message: `City '${req.params.city}' not found` });
    }
    next(error); // cualquier otro error va al errorHandler global
  }
}

module.exports = { getWeather };