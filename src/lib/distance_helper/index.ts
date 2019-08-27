import { toRadians } from './utils';

const LAT_IN_KM: number = 110574;
const LON_IN_KM = (lat: number): number => 111320 * Math.cos(toRadians(lat));

let TEN_KM_LAT: number = (10 * 1) / LAT_IN_KM;
let TEN_KM_LON: number = (10 * 1) / LON_IN_KM(1);

console.log(TEN_KM_LAT);
console.log(TEN_KM_LON);

export default { tenKmLat: TEN_KM_LAT, tenKmLon: TEN_KM_LON };
