var express = require('express');
var cgi = require('serve-cgi');

var forum_decorator = function(res, headers, body, done) {
  if (headers['content-type'].match(/^text\/html/)) {
    var m = body.match(/^(([a-zA-Z_][a-zA-Z_0-9]*\s*=[^\n]*\n)*)([\w\W]*)$/);
    var arg_head = m[1];
    var body = m[3];
    var args = {};
    arg_head.split('\n').forEach(function(l) {
      var m2 = l.match(/([a-zA-Z_][a-zA-Z_0-9]*)\s*=(.*)/);
      if (m2) {
        args[m2[1]] = m2[2];
      }
    });
    args['body'] = body;
    res.render('cgi/forum', args, function(err, cont) {
      if (err) {
        throw err;
      }

      done(res, headers, cont);
    });
  } else {
    done(res, headers, body);
  }
}

var forum_router = express.Router();
forum_router.use(cgi({
  root: __dirname + '/../../forum',
  roles: {
    '.php': '/usr/bin/php5-cgi'
  },
  indexes: ['index.php'],
  decorator: forum_decorator
}));
forum_router.use(express.static(__dirname + '/../../forum'));

exports.forum = forum_router;
