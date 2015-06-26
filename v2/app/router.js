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
router.get('/download', action('main.download'));
router.get('/faq', action('main.faq'));
router.get('/helpus', action('main.helpus'));

router.get('/download.html', action('main.download'));
router.get('/faq.html', action('main.faq'));
router.get('/helpus.md', action('main.helpus'));

module.exports = router;
