var cluster = require('cluster');
var config = require('./config');

if (config.cluster && cluster.isMaster) {
  var nCpu = require('os').cpus().length;

  for (var i = 0; i < nCpu; ++i) {
    cluster.fork();
  }
} else {
  var server = require('./server');
  var C = require('continue.js');

  C().then(function(c) {
    server.prepare ? server.prepare(c) : c();
  }).then(function(c) {
    c.locals.server = server.listen(process.env.PORT || 3000, c);
  }).then(function(c) {
    var addr = c.locals.server.address();
    console.log('Listening at http://%s:%s', addr.address, addr.port);
  }).end();
}
