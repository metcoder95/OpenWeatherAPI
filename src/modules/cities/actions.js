const cities = require('../../../database/city.list.json');
const { OpenWeather } = require('../../lib');

const getCityByID = id => {
  const city = cities
    .filter(cityInArray => cityInArray.id === id)
    .reduce((obj, cityFounded) => (cityFounded ? cityFounded : false));

  return city;
};

const getCityWeather = async id => {
  const cityWeather = await OpenWeather.getCityWeather(id);

  return cityWeather;
};

module.exports = { getCityByID, getCityWeather };
