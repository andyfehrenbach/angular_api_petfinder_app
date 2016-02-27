var myApp = angular.module('myApp', ['ngRoute']);

myApp.config(['$routeProvider', function($routeProvider) {

    $routeProvider

        .when('/home', {
            templateUrl: '/views/templates/home.html',
            controller: 'getAnimalController'

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
