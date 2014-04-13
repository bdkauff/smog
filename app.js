
/**
 * Module dependencies.
 */

var express = require('express');
var routes = require('./routes');
var http = require('http');
var path = require('path');

var app = express();

// all environments
app.set('port', process.env.PORT || 3000);
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');
app.use(express.favicon(__dirname + 'favicon.ico'));
app.use(express.logger('dev'));
app.use(express.json());
app.use(express.urlencoded());
app.use(express.methodOverride());
app.use(app.router);
app.use(express.static(path.join(__dirname, 'public')));

// development only
if ('development' == app.get('env')) {
  app.use(express.errorHandler());
}

app.get('/', routes.smogIssue);
app.get('/smog', routes.smog);
app.get('/adam_mann', routes.adam_mann);
app.get('/seth_maxon', routes.seth_maxon);
app.get('/kelsa_trom', routes.kelsa_trom);
app.get('/sophia_lefraga', routes.sophia_lefraga);
app.get('/andrea_b_scott', routes.andrea_b_scott);
app.get('/travis_korte', routes.travis_korte);
app.get('/anita_pan', routes.anita_pan);
app.get('/marina_zurkow', routes.marina_zurkow);
app.get('/polluted_provisions', routes.polluted_provisions);
app.get('/jay_z', routes.jay_z);
app.get('/about', routes.about);
app.get('/contact', routes.contact);


http.createServer(app).listen(app.get('port'), function(){
  console.log('Express server listening on port ' + app.get('port'));
});
