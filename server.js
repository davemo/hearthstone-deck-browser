var cards = require('./data/cards.js'),
express = require('express'),
path = require('path'),
serveStatic = require('serve-static');
secret  = 'ASECRET';

var csrfValue = function(req) {
  var token = (req.body && req.body._csrf)
  || (req.query && req.query._csrf)
  || (req.headers['x-csrf-token'])
  || (req.headers['x-xsrf-token']);
  return token;
};

var app = express();
app.use(serveStatic('dist', {'index': ['index.html']}))
app.use(express.cookieParser(secret));
app.use(express.cookieSession());
app.use(express.json({ limit: '50mb' })); 
app.use(express.urlencoded({ limit: '50mb' }));
app.use(express.csrf({value: csrfValue}));
app.use(function(req, res, next) {
  res.cookie('XSRF-TOKEN', req.csrfToken());
  next();
});

app.get('/api/cards', function (req, res) {
  res.json(cards);
});

app.get('/cards', function (req, res) {
  res.redirect('/');
});

app.get('/expire-my-session', function(req, res) {
  res.json({error: { message: 'Session Expired' }}, 403);
});

app.use(express.logger('dev'));

app.listen(3000, function () {
  console.log('server process listening on port 3000!');
});