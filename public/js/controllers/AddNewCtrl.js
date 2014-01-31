WDB.controller('AddNewCtrl', ['$scope', function ($scope) {
	"use strict";

	$scope.save = function() {
		console.debug("Save item on the server: ", $scope.newItem);
	};

}]);