myApp.controller('FavoritesController', ['$scope', '$http', 'DataFactory', function($scope, $http, DataFactory) {

  $scope.favoriteAnimals = [];
  $scope.dataFactory = DataFactory;

  if($scope.dataFactory.favoriteAnimalData() === undefined) {
          // initial load
          $scope.dataFactory.retrieveFavorites().then(function() {
              $scope.favoriteAnimals = $scope.dataFactory.favoriteAnimalData();
          });
      } else {
          $scope.favoriteAnimals = $scope.dataFactory.favoriteAnimalData();
      }

  $scope.addFavorite = function() {
    ///addd to favorites function will eventually go here
    $scope.animalRetrieved.favorited = true;
        //POST to server
        $http.post('/favorites', $scope.animalRetrieved).then(function(response){
            console.log ('data sent to server');
            // console.log('Async data response:', animal);
        });

        //SERVER POST route will query the DB
  };

//////




}]);
