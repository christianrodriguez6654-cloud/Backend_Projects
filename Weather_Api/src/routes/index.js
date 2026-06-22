const { Router } = require('express');
const weatherRoutes = require('./weather.routes');
const tasksRoutes = require('./tasks.routes');

const router = Router();

router.use('/weather', weatherRoutes);
router.use('/tasks', tasksRoutes);

module.exports = router;