var path = require('path');

exports.index = function(req, res) {
  var root = req.app.root;
  res.send(root);
};
