/**
 * WDB - WebDevDB
 * @type {module|*|test.module|details.module|.location.module|b.angular.module}
 */
var WDB = angular.module('WDB', []);

WDB.config(function($locationProvider, $routeProvider) {
	"use strict";

	//$locationProvider.html5Mode(true);
//
//	$routeProvider.when('/', {
//		templateUrl: 'cards/video-cards.html',
//		name: 'popular',
//		controller: 'PopularCtrl'
//	})
//	// Channels are renamed to: "My Subscriptions"
//	.when('/channels', {
//		templateUrl: 'cards/video-cards.html',
//		name: 'channels',
//		controller: 'ChannelsCtrl'
//	})
//
//	// Thers is no menu refrance for this - you can get to it only when opening a contextual video from AO.
//	.when('/contextual', {
//		templateUrl: 'cards/video-cards.html',
//		name: 'contextual',
//		controller: 'ContextualVideoCtrl'
//	})
//	.otherwise({
//		redirectTo: '/'
//	});

});