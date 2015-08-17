module.exports = function(req, res, next) {
  if (req.headers.host) {
    var host = req.headers.host;
    host = host.replace('wps-community.com', 'wps-community.org');
    host = host.replace('www.wps-community.org', 'wps-community.org');
    if (host !== req.headers.host) {
      res.redirect('http://' + host + req.originalUrl);
    } else {
      next();
    }
  } else {
    next();
  }
};
