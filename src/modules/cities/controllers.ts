import errors from 'http-errors';
import { Request, Response, NextFunction } from 'express';

import { getCityByID, getCityWeather } from './actions';
import { IWeather } from '../../lib';
import { ICity } from './cities';

export const getCities = (req: Request, res: Response): Response => {
  console.log('Get cities');
  return res.json({ message: 'Im Here' });
};

export const getCity = (
  req: Request,
  res: Response,
  next: NextFunction
): void | Response => {
  const {
    params: { city_id }
  } = req;

  console.log('City ID:', city_id);
  console.log('Getting City...');

  try {
    const city: ICity = getCityByID(city_id);

    if (!city) return next(errors(404, 'City not found'));
    return res.json(city);
  } catch (error) {
    console.log('/cities/:city_id - error:', error);
    return next(errors(500, error.message));
  }
};

export const getWeather = async (
  req: Request,
  res: Response,
  next: NextFunction
): Promise<void | Response> => {
  const {
    params: { city_id }
  } = req;

  try {
    const weather: IWeather = await getCityWeather(city_id);

    return res.json(weather);
  } catch (error) {
    console.log('/cities/:city_id/weather - error:', error);
    const { message } = error;

    return next(errors(500, message));
  }
};
