myApp.controller('getAnimalController', ['$scope', 'DataFactory', function($scope, DataFactory) {

    $scope.getAnimal = function () {
            console.log('get animal controller');
    };


    // $scope.dataFactory = DataFactory;
    // $scope.message = 'People!';
    // $scope.formName = '';
    //
    // if($scope.dataFactory.peopleData() === undefined) {
    //     // initial load
    //     $scope.dataFactory.retrieveData().then(function() {
    //         $scope.people = $scope.dataFactory.peopleData();
    //     });
    // } else {
    //     $scope.people = $scope.dataFactory.peopleData();
    // }
    //
    // $scope.addPerson = function() {
    //     $scope.dataFactory.addName($scope.formName);
    //     $scope.formName = '';
    // }

}]);
