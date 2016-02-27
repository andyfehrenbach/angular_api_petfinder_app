myApp.factory('DataFactory', ['$http', function($http) {
    // PRIVATE
    var animal == undefined;

    var getData = function() {
        console.log('getting data from server');
        var promise = $http.get('/data').then(function(response) {
            animal = response.data;
            console.log('Async data response:', animal);
        });

        return promise;
    };



    //PUBLIC
    var publicApi = {
        animalData: function() {
            return animal;
        },
        retrieveData: function() {
            return getData();
        }
    };

    return publicApi;
}]);
