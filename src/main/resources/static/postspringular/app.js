'use strict';

angular.module('Appa', [ 'home', 'mgcrea.ngStrap', 'ui.router', 'ui.bootstrap' ]).config(
        [ '$httpProvider', function($httpProvider) {

        } ]).config(function($logProvider) {

    $logProvider.debugEnabled(true);
});