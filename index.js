const config = require('./config');
const app = require('./src');

const port = config('port');

app.init(port, () => {
  console.log('Server Info:', `http://localhost:${port}`);
});
