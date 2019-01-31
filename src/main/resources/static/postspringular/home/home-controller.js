'use strict';

angular.module('home').controller(
		'HomeCtrl',
		[
				'$scope',
				'$rootScope',
				'$state',				
				'$stateParams',
				'HomeFactory',
				function($scope, $rootScope, $state, $stateParams, HomeFactory) {				

					$scope.homeScopeLabel = "home scope";
					$scope.loadCompleted = false;
					$scope.loadItems = function() {

						$scope.items = [];
						HomeFactory.getItems().then(function(items) {
							
							angular.forEach(items, function(item, key) {
								this.push(item);
							}, $scope.items);														
							$scope.loadCompleted = true;
							
						}).catch(function(response) {													
							
							$scope.status = "Getting items failed";
							$scope.loadCompleted = true;
						});
					};
					
					$scope.isLoadCompleted = function() {
						return $scope.loadCompleted;
					}					
				} ]);