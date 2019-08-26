import http from 'http';

import Modules from './modules';
import Server from './server';
import { ExpressConfig } from './lib';

const init = (port: number, callback: Function) => {
  Object.keys(Modules).forEach(key => {
    const { basePath, routes } = Modules[key];
    Server.use(basePath, routes);
  });

  Server.use(ExpressConfig.ErrorHandler);

  setImmediate(() => {
    //@ts-ignore
    http.createServer(Server).listen(port, callback);
  });
};

export default { init };
