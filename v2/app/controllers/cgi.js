var cgi = require('serve-cgi');

exports.forum = cgi({
  root: __dirname + '/../../../root/forum',
  roles: {
    '.php': '/usr/bin/php5-cgi'
  },
  indexes: ['index.php']
});
