app.controller('PlayersController', function($scope, $http) {
  //load values for measures here and pass to scope

    $http.get('/players/playersId').success(function(response){
       return $scope.Ids = response;
    });
});