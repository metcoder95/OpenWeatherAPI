const restifyErrors = require('restify-errors');

const checkLatLng = (req, res, next) => {
  const { query } = req;
  const { lat, lng } = query;

  if (!lat || !lng)
    return res.send(new restifyErrors.BadRequestError('lat/lng required'));

  return next();
};

const checkCityID = (req, res, next) => {
  const { params } = req;
  const { city_id } = params;

  if (!city_id)
    return res.send(new restifyErrors.BadRequestError('id required'));

  return next();
};

module.exports = { checkCityID, checkLatLng };
