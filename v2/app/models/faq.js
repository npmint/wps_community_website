var FAQ_FILE = __dirname + '/../../../data/faqs.yaml';

var fs = require('fs');
var jsyaml = require('js-yaml');

var cache;

exports.prepare = function(done) {
  cache = jsyaml.load(fs.readFileSync(FAQ_FILE));
};

exports.all = function(done) {
  done(null, cache);
};
