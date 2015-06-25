'use strict';

var app = angular.module('app', ['ngResource', 'ngRoute']);

app.config(['$routeProvider',
  function($routeProvider) {
    $routeProvider
      .when('/players', {
        templateUrl: '/js/app/players/players.html',
        controller: 'PlayersController',
        controllerAs: 'vm'
      })
      .when('/chart', {
        templateUrl: '/js/app/players/chart.html',
        controller: 'ChartController',
        controllerAs: 'vm'
      })
      .otherwise({
        redirectTo: '/players'
      });
  }
]);

app.controller('PlayersController', ['$scope', 'api', '$rootScope', function($scope, api, $rootScope) {
  api.get(function(data) {
    $scope.players = data;
  });
}]);

app.controller('ChartController',['$scope', 'api', '$rootScope', function($scope, api, $rootScope) {
  api.get(function(data) {
    $scope.players = data;
  });
}]);


app.factory('api', ['$resource', function($resource) {
  return $resource('/orders/api/players', {}, {
    get: {
      isArray: true
    }
  });
}]);

/*function getPlayers() {
      return $http.get('/orders/players')
        .then(function(response) {
          return response.data;
        });*/

/*
  
$routeProvider.when('/view/:playerId', {
  templateUrl : ''/js/app/players/players.html',
  controller : 'PlayersController'
});
  
  
  
*/