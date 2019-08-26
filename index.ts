import config from './config';
import app from './src';

const port: number = config('port');

app.init(port, (): void => {
  console.log('Server Info:', `http://localhost:${port}`);
});
