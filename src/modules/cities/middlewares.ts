import errors from 'http-errors';
import { Request, Response, NextFunction } from 'express';

export const checkLatLng = (
  req: Request,
  res: Response,
  next: NextFunction
): void => {
  console.log('Im Checking LatLng');
  const { query } = req;
  const { lat, lng } = query;

  if (!lat || !lng) return next(errors(400, 'lat/lng required'));

  return next();
};

export const checkCityID = (
  req: Request,
  res: Response,
  next: NextFunction
): void => {
  console.log('Im checking CityID');
  const { params } = req;
  const { city_id } = params;

  if (!city_id) return next(errors(400, 'city_id required'));

  return next();
};
