import { Router } from 'express';

import * as Controllers from './controllers';
import * as Middlewares from './middlewares';

const routes = Router();

routes.get('/', Middlewares.checkLatLng, Controllers.getCities);
routes.get('/:city_id', Middlewares.checkCityID, Controllers.getCity);
routes.get(
  '/:city_id/weather',
  Middlewares.checkCityID,
  Controllers.getWeather
);

export default { basePath: '/cities', routes };
