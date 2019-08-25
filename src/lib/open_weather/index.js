const axios = require('axios');

const config = require('../../../config');
const { substractWeather } = require('./utils');

const baseURL = config('openWeather');
const getCityURL = cityID => `/?id=${cityID}`;

const API = axios.create({ baseURL });

const getCityWeather = async id => {
  const cityURL = getCityURL(id);
  const { data, status } = await API.get(cityURL);

  if (status !== 200)
    throw { status, code: 'NotFoundError', message: 'city not found' };

  const weather = substractWeather(data);

  return weather;
};

module.exports = { getCityWeather };
