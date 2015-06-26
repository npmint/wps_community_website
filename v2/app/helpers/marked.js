var md = require('marked');
var path = require('path');
var fs = require('fs');

module.exports = function(file, title) {
  var res = this;
  var app = this.app;
  var fpath = path.join(app.get('views'), file);
  fs.readFile(fpath, 'utf8', function (err, data) {
    if (err) {
      throw err;
    }

    var content = md(data);
    res.render('layouts/marked', {title: title, content: content});
  });
};
