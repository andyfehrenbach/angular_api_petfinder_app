myApp.controller('getAnimalController', ['$scope', '$http', function($scope, $http) {
    console.log('the controller is working');

    $scope.data = {};
    $scope.search = false;
        $scope.animalName = '';




  $scope.animalSearch = function() {
    // check option value
    if($scope.animal != '') {
        // valid selection, do something
        $scope.search = true;
    } else {
      // invalid, reset bool
      $scope.search = false;
      $scope.text = 'add to favorites';
    }
    console.log($scope.search);

  };


    $scope.getAnimal = function() {


        // API key
        console.log('function firing');
        console.log($scope.animalName);

        var key = 'aeae1463b9ce72e46a418089c2b8c21f';

        var baseURL = 'http://api.petfinder.com/';
        var query = 'pet.getRandom';
        query += '?key=' + key;
        query += '&animal='+ $scope.animalName;
        query += '&output=basic';
        query += '&format=json';

        var request = baseURL + encodeURI(query) + '&callback=JSON_CALLBACK';
        console.log(request);

        $http.jsonp(request).then(
            function(response) {
                $scope.animalRetrieved = response.data.petfinder.pet;
                console.log($scope.animalRetrieved);
            }
        );
    };

    $scope.addFavorite = function() {

      console.log('favorite function firing');


    };

    // getAnimal();
}]);
