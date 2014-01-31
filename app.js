/**
 * Module dependencies.
 */
var express = require('express'),
//	routes = require('./routes'),
	http = require('http'),
	path = require('path'),
	ejs = require('ejs');

var app = express();

app.configure(function () {
	app.set('port', process.env.PORT || 3000);
	app.set('views', __dirname + '/views');
	// app.set('view engine', 'jade');

	/**
	 * Embeded js:
	 * GitHub: https://github.com/visionmedia/ejs
	 * read more here: http://embeddedjs.com/index.html
	 */
	app.engine('html', ejs.renderFile);

	app.use(express.favicon());
	app.use(express.logger('dev'));
	app.use(express.bodyParser());
	app.use(express.methodOverride());
	app.use(app.router);
	app.use(express.static(path.join(__dirname, 'public')));
});

app.configure('development', function () {
	app.use(express.errorHandler());
});

//app.get('/', routes.index);
//app.get('/about', function (req, res) {
//	res.render('about.html');
//});

app.get('/(about)?', function(req, res){
	res.render('index.html');
});

app.get('/(new)?', function(req, res){
	res.render('index.html');
});

app.get('/search', function(req, res){
	var items = [
		{name:"A"},
		{name:"B"},
		{name:"C"},
		{name:"D"},
		{name:"E"},
		{name:"F"},
	];
	res.json(items);
});

//app.get('/about', function (req, res) {
//	res.render('about.html');
//});



http.createServer(app).listen(app.get('port'), function () {
	console.log("Express server listening on port " + app.get('port'));
});
