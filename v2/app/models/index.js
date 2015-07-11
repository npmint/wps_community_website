var fs = require('fs');
var async = require('async');

var models = {};

module.exports = function(app, done) {
  app.models = models;

  var files = fs.readdirSync(__dirname);
  async.each(files, function (file, done) {
    var m = file.match(/(.*)\.js$/);
    if (m && m[1] != 'index') {
      var name = m[1];
      models[name] = require('./' + name);
      if (models[name].prepare) {
        models[name].prepare(done);
      } else {
        done();
      }
    } else {
      done();
    }
  });

  done();
};
