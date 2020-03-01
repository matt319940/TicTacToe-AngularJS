'use strict';
// Declare app level module which depends on views, and core components
angular.module('ticTacToeApp').
    config(['$locationProvider', '$routeProvider', function ($locationProvider, $routeProvider) {
        $locationProvider.hashPrefix('!');
        $routeProvider.
            when('/', {
            template: '<game-board/>'
        }).
            when('/about', {
            template: '<about/>'
        }).
            otherwise({ redirectTo: '/' });
    }
]);
