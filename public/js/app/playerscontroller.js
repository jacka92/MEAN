app.controller('PlayersController', function($scope, $http, $rootScope, $routeParams) {
  //load values for measures here and pass to scope

    $http.get('/players/playersId').success(function(response){
        $scope.Ids = response;
    });
});