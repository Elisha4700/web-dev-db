/**
 * Module dependencies.
 */

var express = require('express')
	, routes = require('./routes')
	, user = require('./routes/user')
	, http = require('http')
	, path = require('path')
	, ejs = require('ejs');

var app = express();

app.configure(function () {
	app.set('port', process.env.PORT || 3000);
	app.set('views', __dirname + '/views');

	// default with express...
	// app.set('view engine', 'jade');

	// read more about ejs: http://embeddedjs.com/index.html
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

app.get("/list", function (req, res) {
//	res.send("Hello RESPONSE!");
	res.json({ok: true});
});

app.get("/about", function (req, res) {
	res.render('about.html');
});

app.configure('development', function () {
	app.use(express.errorHandler());
});

app.get('/', routes.index);
app.get('/users', user.list);

http.createServer(app).listen(app.get('port'), function () {
	console.log("Express server listening on port " + app.get('port'));
});



// Google passport setup
//var GoogleStrategy = require('passport-google-oauth').OAuthStrategy;
//passport.use(new GoogleStrategy({
//		consumerKey: GOOGLE_CONSUMER_KEY,
//		consumerSecret: GOOGLE_CONSUMER_SECRET,
//		callbackURL: "http://localhost:3000/auth/google/callback"
//	},
//	function(token, tokenSecret, profile, done) {
//		User.findOrCreate({ googleId: profile.id }, function (err, user) {
//			return done(err, user);
//		});
//	}
//));
//
//app.get('/auth/google', passport.authenticate('google', { scope: 'https://www.google.com/m8/feeds' }));
//
//app.get('/auth/google/callback',
//	passport.authenticate('google', { failureRedirect: '/login' }),
//	function(req, res) {
//		// Successful authentication, redirect home.
//		res.redirect('/');
//	});
