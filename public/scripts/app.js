var myApp = angular.module('myApp', ['ngRoute']);

myApp.config(['$routeProvider', function($routeProvider) {

    $routeProvider

        .when('/cat', {
            templateUrl: '/views/templates/cat.html',
            controller: 'catController'
        })
        .when('/rabbit', {
            templateUrl: '/views/templates/rabbit.html',
            controller: 'rabbitController'
        })
        .when('/dog', {
            templateUrl: '/views/templates/dog.html',
            controller: 'dogController'
        })
        .otherwise({
            redirectTo: 'dog'
        });
}]);
