import { toRadians } from './utils';

const getDistanceBetweenCoordinates = (
  latP1: number,
  lonP1: number,
  latP2: number,
  lonP2: number
): number => {
  const R = 6371;
  const latP1InRadians = toRadians(latP1);
  const latP2InRadians = toRadians(latP2);
  const dLat = toRadians(latP2 - latP1);
  const dLon = toRadians(lonP2 - lonP1);

  const a =
    Math.sin(dLat / 2) * Math.sin(dLat / 2) +
    Math.cos(latP1InRadians) *
      Math.cos(latP2InRadians) *
      Math.sin(dLon / 2) *
      Math.sin(dLon / 2);

  const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
  const distance = R * c;

  return distance;
};

export default {
  getDistanceBetweenCoordinates
};
