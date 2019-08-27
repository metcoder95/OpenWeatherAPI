const database = require('../../../database/city.list.json');
import { ICity, IFilterDistanceArgs } from './cities';
import { getDistances, filterCities } from './utils';

import { OpenWeather, IWeather } from '../../lib';

// @ts-ignore
const cities: ICity[] = database as ICity;

export const getCities = (lat: number, lon: number): ICity[] => {
  const distances: IFilterDistanceArgs = getDistances(lat, lon);

  console.log(distances);

  const citiesTenKmAround: ICity[] = cities.filter(filterCities(distances));

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
