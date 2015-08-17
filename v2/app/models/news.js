var config = require('../../config');

var NEWS_DIR = config.root.repo + '/data/news';

var fs = require('fs');
var jsyaml = require('js-yaml');

var cache = [];

exports.prepare = function(done) {
  var files = fs.readdirSync(NEWS_DIR);
  files.forEach(function(fname) {
    if (fname.match(/\.news$/)) {
      var cont = fs.readFileSync(NEWS_DIR + '/' + fname).toString();
      var parts = cont.split(/====+\n/);
      var body = '<p>' + parts[1].split(/\n\n+/).join('</p><p>') + '</p>';
      cache.unshift({title: parts[0], body: body});
    } else if (fname.match(/\.yaml$/)) {
      var x = jsyaml.load(fs.readFileSync(NEWS_DIR + '/' + fname));
      x.body = '<p>' + x.body.split(/\n\n+/).join('</p><p>') + '</p>';
      cache.unshift(x);
    }
  });
};

exports.all = function(done) {
  done(null, cache);
};
