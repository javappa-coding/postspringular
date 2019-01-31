'use strict';

angular.module('Appa').controller('AppCtrl',
        [ '$scope', '$rootScope', '$state', '$http', function($scope, $rootScope, $state, $http) {

            $scope.rootScopeLabel = "root scope";
        } ]);