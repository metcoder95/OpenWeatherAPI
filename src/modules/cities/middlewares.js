const errors = require('http-errors');

const checkLatLng = (req, res, next) => {
  console.log('Im Checking LatLng');
  const { query } = req;
  const { lat, lng } = query;

  if (!lat || !lng) return next(errors(400, 'lat/lng required'));

  return next();
};

const checkCityID = (req, res, next) => {
  console.log('Im checking CityID');
  const { params } = req;
  const { city_id } = params;

  if (!city_id) return next(errors(400, 'city_id required'));

  return next();
};

module.exports = { checkCityID, checkLatLng };
