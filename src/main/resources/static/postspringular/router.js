'use strict';

angular.module('Appa').config([ '$stateProvider', '$urlRouterProvider', function($stateProvider, $urlRouterProvider) {

    $stateProvider.state('home', {
        url : '/',
        templateUrl : 'postspringular/home/home.html',
        controller : 'HomeCtrl'
    });
    $urlRouterProvider.otherwise('/');

} ]).run([ '$rootScope', '$state', function($rootScope, $state) {
    $rootScope.$on('$stateChangeStart', function(event, nextState, nextParams) {
        console.log("$stateChangeStart...");
    });
} ]);