const database = require('../../../database/city.list.json');
import { ICity } from './cities';
import { filterCities } from './utils';

import { OpenWeather, IWeather } from '../../lib';

// @ts-ignore
const cities: ICity[] = database as ICity;

export const getCities = (lat: number, lon: number): ICity[] => {
  const citiesTenKmAround: ICity[] = cities.filter(filterCities(lat, lon));

  return citiesTenKmAround;
};

export const getCityByID = (id: string): ICity => {
  const city = cities
    .filter(cityInArray => cityInArray.id === parseInt(id))
    .reduce((obj, cityFounded) => cityFounded);

  return city;
};

export const getCityWeather = async (id: string): Promise<IWeather> => {
  const cityWeather: IWeather = await OpenWeather.getWeather(id);

  return cityWeather;
};
