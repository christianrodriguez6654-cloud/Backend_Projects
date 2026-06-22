const express = require('express');
const config = require('./config/env');
const routes = require('./routes/index');
const errorHandler = require('./middlewares/errorHandler');
require('./config/database');

const app = express();

// Middleware global: parsea el body de las peticiones a JSON
app.use(express.json());

// Todas las rutas del proyecto bajo /api
app.use('/api', routes);

// Ruta de salud: para verificar que el servidor está vivo
app.get('/health', (req, res) => {
  res.json({ status: 'OK', message: 'Server running' });
});

// Middleware de errores (siempre al final)
app.use(errorHandler);

app.listen(config.port, () => {
  console.log(`🚀 Server running on http://localhost:${config.port}/`);
});