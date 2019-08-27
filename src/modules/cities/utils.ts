import { DistanceHelper } from '../../lib';
import { IFilterDistanceArgs, ICity } from './cities';

const isInsideLat = (
  lat: number,
  latMinusTenKm: number,
  latPlusTenKm: number
): boolean => lat >= latMinusTenKm && lat <= latPlusTenKm;

const isInsideLon = (
  lon: number,
  lonMinusTenKm: number,
  lonPlusTenKm: number
): boolean => lon >= lonMinusTenKm && lon <= lonPlusTenKm;

export const getDistances = (lat: number, lon: number) => {
  const latPlusTenKm: number = lat + DistanceHelper.tenKmLat;
  const lonPlusTenKm: number = lon + DistanceHelper.tenKmLon;
  const latMinusTenKm: number = lat - DistanceHelper.tenKmLat;
  const lonMinusTenKm: number = lon - DistanceHelper.tenKmLon;

  return {
    latPlusTenKm,
    lonPlusTenKm,
    latMinusTenKm,
    lonMinusTenKm
  } as IFilterDistanceArgs;
};

export const filterCities = (distances: IFilterDistanceArgs) => (
  city: ICity
): ICity | void => {
  const {
    latMinusTenKm,
    latPlusTenKm,
    lonMinusTenKm,
    lonPlusTenKm
  } = distances;

  const { lat, lon } = city.coord;

  console.log(
    `Lat Minus  Ten: ${latMinusTenKm}, Lat Plus Ten: ${latPlusTenKm}`
  );
  console.log(
    `Lon Minus  Ten: ${lonMinusTenKm}, Lon Plus Ten: ${lonPlusTenKm}`
  );
  console.log(`Lat of City: ${lat}, Lon of City: ${lon}`);

  console.log(
    'Is inside the zone?',
    isInsideLat(lat, latMinusTenKm, latPlusTenKm) &&
      isInsideLon(lon, lonMinusTenKm, lonPlusTenKm)
  );

  if (
    isInsideLat(lat, latMinusTenKm, latPlusTenKm) &&
    isInsideLon(lon, lonMinusTenKm, lonPlusTenKm)
  )
    return city;
};
