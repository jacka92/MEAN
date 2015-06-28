'use strict';

var app = angular.module('app', ['ngResource', 'ngRoute','highcharts-ng']);

//app = angular.module('myapp', ["highcharts-ng"]); //install highcharts with bower!

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

app.factory('api', ['$resource', function($resource) {
  return $resource('/orders/api/players', {}, {
    get: {
      isArray: true
    }
  });
}]);


/*app.controller('PlayersController', ['$scope', 'api', '$rootScope', function($scope, api, $rootScope) {
  api.get(function(data) {
    $scope.players = data;
  });
  
}]);*/

app.controller('PlayersController', function($scope, $http) {
    $http.get("/orders/api/players")
    .success(function(response) {$scope.players = response;});
});


app.controller('ChartController', function($scope, $http) {

$http.get("/orders/api/players")
    .success(function(response) {
      $scope.players = response;
     var cats = [];
var players = $scope.players;
      for(var i=0;i<players.length;i++){
  var string = '';
  string = players[i].Session_Date;
  cats.push(string);
}

$scope.chartConfig = {
        options: {
            chart: {
                type: 'line'
            }, xAxis: {
            categories: cats ///array of dates
        },
        },
        series: [{
            data: [10,11]
        }],
        title: {
            text: 'Hello'
        },

        loading: false
    };
      
    });
 


$scope.logText = function(){
  console.log($scope.players);
};


  
});
