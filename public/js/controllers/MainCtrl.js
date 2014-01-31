WDB.controller('MainCtrl', ['$scope', 'SearchSrv', function ($scope, SearchSrv) {
	"use strict";

	$scope.results = {
		items: []
	};

	$scope.addStuff = function() {
		console.debug("Open Add more stuff Dialog");
	};

	$scope.showEverything = function() {
		var q = SearchSrv.getEverything();
		q.then(
			function(result) {
				console.debug("Success: ", result);
				$scope.results.items = result.data;
			},
			function(result) {
				console.debug("Error: ", result);
			}
		)
	};

	$scope.onSearching = function() {
		console.debug("Searching for: ", $scope.search.value);
	};

}]);