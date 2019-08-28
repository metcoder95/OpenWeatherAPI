import { DistanceHelper } from '../../lib';
import { ICity } from './cities';

const isCloseToMainPoint = (distance: number) =>
  distance >= 0 && distance <= 10;

export const filterCities = (mainLat: number, mainLon: number) => (
  city: ICity
): ICity | void => {
  const { lat, lon } = city.coord;

  const distanceFromMainPoint: number = DistanceHelper.getDistanceBetweenCoordinates(
    mainLat,
    mainLon,
    lat,
    lon
  );

  if (isCloseToMainPoint(distanceFromMainPoint)) return city;
};
