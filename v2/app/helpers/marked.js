var md = require('marked');
var path = require('path');
var fs = require('fs');

// res.marked(file, title | callback)
module.exports = function(file, title) {
  var res = this;
  var app = this.app;
  var callback = null;
  if (typeof title === 'function') {
    callback = title;
    title = null;
  }

  var fpath = file;
  if (fpath[0] !== '/') {
    fpath = path.join(app.get('views'), file);
  }
  fs.readFile(fpath, 'utf8', function (err, data) {
    if (err) {
      throw err;
    }

    var content = md(data);
    if (callback) {
      callback(content);
    } else {
      res.render('layouts/marked', {title: title, content: content});
    }
  });
};
