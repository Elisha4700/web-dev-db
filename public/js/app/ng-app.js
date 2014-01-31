/**
 * WDB - WebDevDB
 * @type {module|*|test.module|details.module|.location.module|b.angular.module}
 */
var WDB = angular.module('WDB', ['ngRoute']);

WDB.config(function($locationProvider, $routeProvider) {
	'use strict';

	var templ = CONFIG.NG_TEMPLATES_DIR;

	$locationProvider.html5Mode(CONFIG.HTML_5_MODE);

	$routeProvider.when('/', {
		templateUrl: templ + 'home.html'
//		name: 'popular',
//		controller: 'PopularCtrl'
	})
	// Channels are renamed to: "My Subscriptions"
	.when('/about', {
		templateUrl: templ + 'about.html',
		controller: 'AboutCtrl'
	})
//
//	// Thers is no menu refrance for this - you can get to it only when opening a contextual video from AO.
//	.when('/contextual', {
//		templateUrl: 'cards/video-cards.html',
//		name: 'contextual',
//		controller: 'ContextualVideoCtrl'
//	})
	.otherwise({
		redirectTo: '/'
	});

});