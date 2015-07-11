var config = require('../../config');

var ST_FILE = config.root.repo + '/var/wps_mui.st';

var fs = require('fs');

exports.all = function(done) {
  fs.readFile(ST_FILE, 'utf8', function(err, data) {
    if (err) {
      throw err;
    }

    var lines = data.toString().split('\n');
    var langs = []
    lines.forEach(function(line) {
      var m = line.match(/^([a-zA-Z_]+)\s+(\d+)\s+\/\s+(\d+)\s*$/);
      if (m) {
        langs.push({
          locale: m[1],
          done: m[2],
          total: m[3],
          percent: m[3] ? m[2] / m[3] : 0
        });
      }
    });

    langs.sort(function (a, b) {
      return b.percent - a.percent;
    });

    done(null, langs);
  });
};
