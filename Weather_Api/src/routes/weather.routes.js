const { Router } = require('express');
const { getWeather } = require('../controllers/weather.controller');

const router = Router();

// GET /api/weather/:city
router.get('/:city', getWeather);

module.exports = router;