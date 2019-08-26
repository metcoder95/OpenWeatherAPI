import axios, { AxiosInstance } from 'axios';
import { IWeather } from './open_weather';

import config from '../../../config';
import { substractWeather } from './utils';

const { baseURL, apiKey } = config('openWeather');

const API: AxiosInstance = axios.create({ baseURL });

const getWeather = async (id: string): Promise<IWeather> => {
  console.log('Retrieving weather from:', id);
  const { data } = await API.get('', { params: { id, APPID: apiKey } });

  const weather: IWeather = substractWeather(data);

  return weather;
};

export default { getWeather };
