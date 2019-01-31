'use strict';

angular.module('home').factory('HomeFactory', [ '$http', '$q', function($http, $q) {

	return {
		getItems : getItems
	};

	function getItems() {

		return $q(function(resolve, reject) {

			$http.get('/api/items').then(function(response, httpStatus) {
				
				resolve(response.data);
				
			}).catch(function(response, httpStatus) {
				
				reject(response);
				
			});
		});
	}
} ]);