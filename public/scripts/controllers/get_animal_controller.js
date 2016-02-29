myApp.controller('getAnimalController', ['$scope', '$http', function($scope, $http) {
    console.log('the controller is working');

    $scope.data = {};
    $scope.search = false;
    $scope.animalName = '';


///handle the select form

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
    // console.log($scope.search);

  };

////

    $scope.getAnimal = function() {


        // API key
        console.log('function firing');
        // console.log($scope.animalName);

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
                //this line will add "favorited" poperty of FALSE
                $scope.animalRetrieved.favorited = false;
                console.log($scope.animalRetrieved);
            }
        );
    };

    $scope.addFavorite = function() {

      console.log('favorite function firing');
      ///addd to favorites function will eventually go here
      $scope.animalRetrieved.favorited = true;
      console.log($scope.animalRetrieved);
          //POST to server
          $http.post('/favorites', $scope.animalRetrieved).then(function(response){
              console.log ('data sent to server');
              // console.log('Async data response:', animal);

          });

          //SERVER POST route will query the DB


    };

    // getAnimal();


    $scope.showFavorites = function () {
        // console.log('the favorites controller is working');
        $scope.favoriteAnimals = [];
        $http.get('/favorites').then(function(response){
            var animal = response.data;
            // console.log('Async data response:', animal);
            $scope.favoriteAnimals.push(animal);
            console.log($scope.favoriteAnimals);
        });

    };
}]);


// $scope.people = [];
//     $scope.dataFactory = DataFactory;
//     $scope.message = 'People!';
//     $scope.formName = '';
//
//     if($scope.dataFactory.peopleData() === undefined) {
//         // initial load
//         $scope.dataFactory.retrieveData().then(function() {
//             $scope.people = $scope.dataFactory.peopleData();
//         });
//     } else {
//         $scope.people = $scope.dataFactory.peopleData();
//     }
//
//     $scope.addPerson = function() {
//         $scope.dataFactory.addName($scope.formName);
//         $scope.formName = '';
//     };
