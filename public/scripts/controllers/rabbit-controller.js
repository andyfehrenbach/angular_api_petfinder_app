//API Key
// aeae1463b9ce72e46a418089c2b8c21f
// API Secret
// 094e9a0062463956fd1ed6997d8bafca


myApp.controller('rabbitController', ['$scope', '$http', function($scope, $http) {
    $scope.data = {};

    function rabbitFinder() {
        // API key
        var key = 'aeae1463b9ce72e46a418089c2b8c21f';

        var baseURL = 'http://api.petfinder.com/';
        var query = 'pet.getRandom';
        query += '?key=' + key;
        query += '&animal=rabbit';
        query += '&output=basic';
        query += '&format=json';

        var request = baseURL + encodeURI(query) + '&callback=JSON_CALLBACK';
        console.log(request);

        $http.jsonp(request).then(
            function(response) {
                $scope.animal = response.data.petfinder.pet;
                console.log($scope.animal);
            }
        );
    }

    rabbitFinder();
}]);
