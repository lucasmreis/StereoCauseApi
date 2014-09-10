var hapi = require('hapi');

var server = hapi.createServer(8000);

server.route({
  method: 'GET',
  path: '/',
  handler: function (req, reply) {
    reply('Hello World from Stereo Cause!');
  }
});


server.start(function () {
    console.log('Server started at: ' + server.info.uri);
});