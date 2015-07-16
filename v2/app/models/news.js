var config = require('../../config');

var NEWS_DIR = config.root.repo + '/data/news';

var fs = require('fs');

var cache = [];

exports.prepare = function(done) {
  var files = fs.readdirSync(NEWS_DIR);
  files.forEach(function(fname) {
    if (fname.match(/\.news$/)) {
      var cont = fs.readFileSync(NEWS_DIR + '/' + fname).toString();
      var parts = cont.split(/====+\n/);
      var body = '<p>' + parts[1].split(/\n\n+/).join('</p><p>') + '</p>';
      cache.unshift({title: parts[0], body: body});
    }
  });
};

exports.all = function(done) {
  done(null, cache);
};
