const Controllers = require('./controllers');
const Middlewares = require('./middlewares');

module.exports = {
  cities: {
    method: 'get',
    path: '/cities',
    middlewares: [Middlewares.checkLatLng, Controllers.getCities]
  },
  city: {
    method: 'get',
    path: '/cities/:city_id',
    middlewares: [Middlewares.checkCityID, Controllers.getCity]
  },
  weather: {
    method: 'get',
    path: '/cities/:city_id/weather',
    middlewares: [Middlewares.checkCityID, Controllers.getWeather]
  }
};
