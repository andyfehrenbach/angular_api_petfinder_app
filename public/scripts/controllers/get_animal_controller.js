myApp.controller('getAnimalController', ['$scope', '$http', function($scope, $http) {

    console.log('the controller is working');
    $scope.data = {};
    $scope.animal = 'horse';
    console.log($scope.animal);


    function getAnimal() {
        // API key
        var key = 'aeae1463b9ce72e46a418089c2b8c21f';

        var baseURL = 'http://api.petfinder.com/';
        var query = 'pet.getRandom';
        query += '?key=' + key;
        query += '&animal='+ $scope.animal;
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

    getAnimal();
}]);
