const Modules = require('./modules');
const Server = require('./server');
const { flatObject } = require('./utils');

const init = (port, callback) => {
  const flattenModules = flatObject(Modules);

  Object.keys(flattenModules).forEach(key => {
    const { method, path, middlewares } = flattenModules[key];

    Server[method](path, ...middlewares);
  });

  setTimeout(() => {
    Server.listen(port, callback(Server));
  }, 0);
};

module.exports = init;
