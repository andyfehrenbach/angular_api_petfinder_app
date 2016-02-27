var myApp = angular.module('myApp', ['ngRoute']);

myApp.config(['$routeProvider', function($routeProvider) {

    $routeProvider
        .when('/header', {
            templateUrl: '/views/templates/header.html',
            controller: 'getAnimalController'

        })

        .when('/home', {
            templateUrl: '/views/templates/home.html',

        })

        .when('/favorites', {
            templateUrl: '/views/templates/favorites.html'
        })

        .when('/results', {
            templateUrl: '/views/templates/results.html'
        })

        .otherwise({
            redirectTo: 'home'
        });
}]);
