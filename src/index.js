const http = require('http');

const Modules = require('./modules');
const Server = require('./server');
const { ExpressMiddlewares } = require('./lib');

const init = (port, callback) => {
  Object.keys(Modules).forEach(key => {
    const { basePath, routes } = Modules[key];
    Server.use(basePath, routes);
  });

  Server.use(ExpressMiddlewares.errorHandler);

  setImmediate(() => {
    http.createServer(Server).listen(port, callback);
  });
};

module.exports = { init };
