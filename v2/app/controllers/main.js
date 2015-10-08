exports.index = function(req, res) {
  var models = req.app.models;
  models.news.all(function (err, news) {
    res.render('main/index', {news: news});
  });
};

exports.about = function(req, res) {
  res.marked('main/about.md');
};

exports.downloads = function(req, res) {
  var models = req.app.models;
  models.version.all(function (err, versions) {
    if (err) {
      throw err;
    }

    var vls = {};
    var last_vl = null;
    versions.forEach(function(v, k) {
      var vl = v.linux_version_line;
      last_vl = last_vl || vl;
      vls[vl] = vls[vl] || {};
      vls[vl][v.linux_version_short] = v;
    });

    var current_version_line = req.query.vl || last_vl;

    res.render('main/downloads', {versions: versions, version_lines: vls, current_version_line: current_version_line});
  });
};

exports.faq = function(req, res) {
  var models = req.app.models;
  models.faq.all(function (err, faqs) {
    if (err) {
      throw err;
    }

    res.render('main/faq', {faqs: faqs});
  });
};

exports.helpus = function(req, res) {
  res.marked('main/helpus.md', 'Help us');
};

exports.development = function(req, res) {
  var models = req.app.models;
  models.language.all(function (err, langs) {
    if (err) {
      throw err;
    }

    res.render('main/development', {langs: langs});
  });
};

exports.donate = function(req, res) {
  res.marked('main/donate.md', 'Help us');
};

exports.distribution = function(req, res) {
  res.marked('main/distribution.md');
};

exports.license = function(req, res) {
  res.marked('main/license.md');
};
