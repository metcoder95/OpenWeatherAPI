const errors = require('http-errors');

const { getCityByID, getCityWeather } = require('./actions');

const getCities = (req, res, next) => {
  console.log('Get cities');
  return res.json({ message: 'Im Here' });
};

const getCity = (req, res, next) => {
  const {
    params: { city_id }
  } = req;

  console.log('Getting City...');
  console.log('City ID:', city_id);

  const city = getCityByID(city_id);

  if (!city) return next(errors(404, 'City not found'));

  return res.json(city);
};

const getWeather = async (req, res, next) => {
  const {
    params: { city_id }
  } = req;

  try {
    const weather = await getCityWeather(city_id);

    return res.json(weather);
  } catch (error) {
    const { status, message } = error;

    return next(errors(status || 500, message));
  }
};

module.exports = {
  getCities,
  getCity,
  getWeather
};
