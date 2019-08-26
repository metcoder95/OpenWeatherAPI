const { Router } = require('express');

const Controllers = require('./controllers');
const Middlewares = require('./middlewares');

const routes = Router();

routes.get('/', Middlewares.checkLatLng, Controllers.getCities);
routes.get('/:city_id', Middlewares.checkCityID, Controllers.getCity);
routes.get(
  '/:city_id/weather',
  Middlewares.checkCityID,
  Controllers.getWeather
);

module.exports = { basePath: '/cities', routes };
