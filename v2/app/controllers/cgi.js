var config = require('../../config');
var path = require('path');
var express = require('express');
var cgi = require('serve-cgi');

var forum_decorator = function(res, headers, body, done) {
  if (headers['content-type'].match(/^text\/html/)) {
    var locals = {};
    var regex = /<!-- NODE-CGI-SERG-([A-Z]+) -->([\s\S]*?)<!-- NODE-CGI-SERG-\1-END -->/g
    var ms = body.replace(regex, function() {
      locals[arguments[1].toLowerCase()] = arguments[2];
    });
    if (locals.body) {
      res.render('cgi/forum', locals, function(err, cont) {
        if (err) {
          throw err;
        }

        done(res, headers, cont);
      });
    } else {
      done(res, headers, body);
    }
  } else {
    done(res, headers, body);
  }
}

var forum_router = express.Router();
forum_router.use(cgi({
  mount: '/',
  root: config.root.v2,
  cwd: config.root.v2,
  roles: {
    '.php': '/usr/bin/php5-cgi'
  },
  indexes: ['index.php'],
  decorator: forum_decorator
}));
forum_router.use(express.static(config.root.v2 + '/forum', {maxage: 86400000}));

exports.forum = forum_router;

exports.bin = cgi({
  root: config.root.v1 + '/bin',
  roles: {
    '': '/usr/bin/env'
  },
});
