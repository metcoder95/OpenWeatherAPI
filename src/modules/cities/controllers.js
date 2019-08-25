const restifyErrors = require('restify-errors');

const { getCityByID, getCityWeather } = require('./actions');

const getCities = (req, res, next) => {};

const getCity = (req, res, next) => {
  const {
    params: { city_id }
  } = req;

  console.log('Getting City...');
  console.log('City ID:', city_id);
  const city = getCityByID(city_id);

  if (!city) return res.send(new restifyErrors.NotFoundError('city not found'));

  return res.send(city);
};

const getWeather = async (req, res, next) => {
  const {
    params: { city_id }
  } = req;

  try {
    const weather = await getCityWeather(city_id);

    return weather;
  } catch (error) {
    return res.send(new restifyErrors.NotFoundError('City not found'));
  }
};

module.exports = {
  getCities,
  getCity,
  getWeather
};
