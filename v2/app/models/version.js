var VERSION_DIR = __dirname + '/../../../data/versions/';

var glob = require('glob');
var C = require('continue.js');
var async = require('async');
var jsyaml = require('js-yaml');
var fs = require('fs');

var cache;

var readYamlFile = function(fpath, done) {
  C(function(c) {
    fs.readFile(fpath, c.assigner('err', 'content'));
  })(function(c) {
    c.obj = jsyaml.load(c.content);
    c();
  }).report('obj', done);
};

exports.prepare = function(done) {
  C(function(c) {
    glob(VERSION_DIR + '**/*.yaml', c.assigner('err', 'files'));
  })(function(c) {
    async.map(c.files, readYamlFile, c.assigner('err', 'versions'));
  })(function(c) {
    c.versions.sort(function(a, b) {
      if (a.version < b.version) {
        return 1;
      } else if (a.version > b.version) {
        return -1;
      } else {
        return 0;
      }
    });
    c();
  }).end(function (err, c) {
    if (err) {
      throw err;
    }
    cache = c.versions;
    done();
  });
};

exports.all = function(done) {
  done(null, cache);
};
