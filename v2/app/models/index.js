var models = {};

models.version = require('./version.js');

module.exports = function(app, done) {
  app.models = models;
  done();
};
