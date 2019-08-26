import dotenv from 'dotenv';

import { IEnvVariable } from './config';

dotenv.config();

const ENV_VARIABLES: IEnvVariable = {
  openWeather: {
    baseURL: process.env['OPEN_WEATHER_URL'],
    apiKey: process.env['OPEN_WEATHER_KEY']
  },
  port: process.env.PORT
};

export default (envName: string): any => ENV_VARIABLES[envName];
