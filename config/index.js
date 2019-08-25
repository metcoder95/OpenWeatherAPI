const dotenv = require('dotenv');

dotenv.config();

const ENV_VARIABLES = {
  openWeather: process.env['OPEN_WEATHER_URL'],
  port: process.env.PORT
};

module.exports = envName => ENV_VARIABLES[envName];
