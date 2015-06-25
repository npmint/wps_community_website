var config = require('./config');
var Express = require('express');

var app = Express();

// options
app.set('view engine', 'jade');
app.set('views', __dirname + '/app/views');

// middlewares
app.use(require('express-domain-middleware'));
app.use(Express.static('public'));

// helper
app.locals.basedir = __dirname + '/app/views';

// debug
if (app.get('env') == 'development') {
  require('express-debug')(app);
}

// router
app.use(require('./app/router'));

app.prepare = function(done) {
  require('./app/models')(app, done);
};

// export
module.exports = app;
