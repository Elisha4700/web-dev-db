WDB.controller('MainCtrl', ['$scope', function ($scope) {
	"use strict";

	$scope.addStuff = function() {
		console.debug("Open Add more stuff Dialog");
	};

	$scope.onSearching = function() {
		console.debug("Searching for: ", $scope.search.value);
	};

}]);