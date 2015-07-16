var moment = require('moment');

exports.e404 = function(req, res) {
  console.log(moment().format(), req.headers.host + req.originalUrl);
  var info = 'Domain: ' + req.headers.host + '\nRequest URI: ' + req.originalUrl;
  res.render('layouts/e404.jade', {info: info});
};
