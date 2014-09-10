var hapi = require('hapi');

var bands = require('./models/bands');

var server = hapi.createServer(process.env.PORT || 5000);

server.route({
  method: 'GET',
  path: '/',
  handler: function (req, reply) {
    reply(bands());
  }
});


server.start(function () {
    console.log('Server started at: ' + server.info.uri);
});