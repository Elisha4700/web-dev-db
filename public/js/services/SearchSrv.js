WDB.factory('SearchSrv', ['$http', '$q', function ($http, $q) {
	'use strict';

	var service = {};

	function sendAjax(url) {
		var deferred = $q.defer();
		$http({url: url, method: "GET"}).then(
			function (response) {
				if (typeof callback === "function") {
					return deferred.resolve(callback(response));
				} else {
					return deferred.resolve(response);
				}
			},
			function (response) {
				return deferred.reject(response);
			}
		);

		return deferred.promise;
	}

	service.getEverything = function () {
		var url = [
			CONFIG.API_URL,
			"search/"
		];
		return sendAjax(url.join(""));
	};

	return service;
}]);