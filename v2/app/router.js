var router = require('express').Router();

var action = function(act) {
  var x = act.split('.');
  var t = require('./controllers/' + x[0]);
  for (var i = 1; i < x.length; ++i) {
    t = t[x[i]];
  }
  return function(req, res) {
    res.locals.controller = x[0];
    res.locals.action = act;
    return t.apply(this, arguments);
  };
};

router.get('/', action('main.index'));
router.get('/about', action('main.about'));

module.exports = router;
