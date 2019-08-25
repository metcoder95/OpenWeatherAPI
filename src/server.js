const restify = require('restify');

const { plugins } = restify;

const server = restify.createServer();

server.use(plugins.queryParser);

module.exports = server;
