/*(function() {
  'use strict';
  
  angular
    .module('app')
    .controller('PlayersController', PlayersController);
    
    PlayersController.$inject = ['api'];
    
    function PlayersController(api) {
      var vm = this;
      
      api.getRestaurants()
        .then(function(data) {
          vm.players = data;
        });
    }
}());*/



/*var app = angular.module('app', []);

app.controller('PlayersController', ['$scope', 'api', function($scope, api){
  $scope.players = [];
  api.get(function(data){
    $scope.players = data;
  });
}]);*/



