const database = require('../../../database/city.list.json');
import { OpenWeather, IWeather } from '../../lib';
import { ICity } from './cities';

// @ts-ignore
const cities: ICity[] = database as ICity;

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
