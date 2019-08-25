const config = require('./config');
const app = require('./src');

const port = config('port');

console.log(port);

app(port, server => {
  console.log('Server Info:', server.name, server.url);
});
