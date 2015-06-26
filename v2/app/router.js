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

var redirect = function(url) {
  return function(req, res) {
    res.redirect(url);
  };
};

router.get('/', action('main.index'));
router.get('/about', action('main.about'));
router.get('/download', action('main.download'));
router.get('/faq', action('main.faq'));
router.get('/helpus', action('main.helpus'));
router.get('/development', action('main.development'));
router.get('/donate', action('main.donate'));
router.get('/about', action('main.about'));
router.get('/distribution', action('main.distribution'));
router.get('/forum/**', action('cgi.forum'));

// redirect
router.get('/forum', redirect('/forum/'));

// legacy
router.get('/download.html', action('main.download'));
router.get('/faq.html', action('main.faq'));
router.get('/helpus.md', action('main.helpus'));
router.get('/dev.html', action('main.development'));
router.get('/donate.md', action('main.donate'));
router.get('/aboutus.html', action('main.about'));
router.get('/distribution.md', action('main.distribution'));

module.exports = router;
