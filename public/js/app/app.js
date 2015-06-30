'use strict';

var app = angular.module('app', ['ngResource', 'ngRoute', 'highcharts-ng']);

app.config(['$routeProvider',
  function($routeProvider) {
    $routeProvider
      .when('/players', {
        templateUrl: '/js/app/players/players.html',
        controller: 'PlayersController',
        controllerAs: 'vm'
      })
      .when('/hml', {
        templateUrl: '/js/app/players/hml.html',
        controller: 'HMLController',
        controllerAs: 'vm'
      })
      .when('/accelerations', {
        templateUrl: '/js/app/players/acc.html',
        controller: 'accController',
        controllerAs: 'vm'
      })
      .when('/decelerations', {
        templateUrl: '/js/app/players/dec.html',
        controller: 'decController',
        controllerAs: 'vm'
      })
      .when('/distanceTotal', {
        templateUrl: '/js/app/players/dist.html',
        controller: 'distController',
        controllerAs: 'vm'
      })
      .when('/highSpeedRunning', {
        templateUrl: '/js/app/players/hsr.html',
        controller: 'hsrController',
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


app.controller('PlayersController', function($scope, $http) {
  $http.get("/orders/api/players")
    .success(function(response) {
      $scope.players = response;
    });
});


app.controller('HMLController', function($scope, $http) {

  $http.get("/orders/api/players")
    .success(function(response) {
      $scope.players = response;
      var cats = [];
      var HML = [];
      var players = $scope.players;
      
      for (var i = 0; i < players.length; i++) {
        var string = '';
        string = players[i].Session_Date;
        cats.push(string);
        var j = parseInt(players[i].HML_Distance);
        HML.push(j);
      }

      $scope.chartConfig = {
        options: {
          chart: {
            type: 'line'
          },
          xAxis: {
            categories: cats ///array of dates
          },
        },
        series: [{
          data: HML
        }],
        title: {
          text: 'HML Distance'
        },

        loading: false
      };

    });

});

app.controller('accController', function($scope, $http) {

  $http.get("/orders/api/players")
    .success(function(response) {
      $scope.players = response;
      var cats = [];
      var HML = [];
      var players = $scope.players;
      
      for (var i = 0; i < players.length; i++) {
        var string = '';
        string = players[i].Session_Date;
        cats.push(string);
        var j = parseInt(players[i].MEAN_of_Accelerations);
        HML.push(j);
      }

      $scope.chartConfig = {
        options: {
          chart: {
            type: 'line'
          },
          xAxis: {
            categories: cats ///array of dates
          },
        },
        series: [{
          data: HML
        }],
        title: {
          text: 'Accelerations'
        },

        loading: false
      };

    });

});

app.controller('decController', function($scope, $http) {

  $http.get("/orders/api/players")
    .success(function(response) {
      $scope.players = response;
      var cats = [];
      var HML = [];
      var players = $scope.players;
      
      for (var i = 0; i < players.length; i++) {
        var string = '';
        string = players[i].Session_Date;
        cats.push(string);
        var j = parseInt(players[i].Decelerations);
        HML.push(j);
      }

      $scope.chartConfig = {
        options: {
          chart: {
            type: 'line'
          },
          xAxis: {
            categories: cats ///array of dates
          },
        },
        series: [{
          data: HML
        }],
        title: {
          text: 'Decelerations'
        },

        loading: false
      };

    });

});

app.controller('distController', function($scope, $http) {

  $http.get("/orders/api/players")
    .success(function(response) {
      $scope.players = response;
      var cats = [];
      var HML = [];
      var players = $scope.players;
      
      for (var i = 0; i < players.length; i++) {
        var string = '';
        string = players[i].Session_Date;
        cats.push(string);
        var j = parseInt(players[i].Distance_Total);
        HML.push(j);
      }

      $scope.chartConfig = {
        options: {
          chart: {
            type: 'line'
          },
          xAxis: {
            categories: cats ///array of dates
          },
        },
        series: [{
          data: HML
        }],
        title: {
          text: 'Distance Total'
        },

        loading: false
      };

    });

});

app.controller('hsrController', function($scope, $http) {

  $http.get("/orders/api/players")
    .success(function(response) {
      $scope.players = response;
      var cats = [];
      var HML = [];
      var players = $scope.players;
      
      for (var i = 0; i < players.length; i++) {
        var string = '';
        string = players[i].Session_Date;
        cats.push(string);
        var j = parseInt(players[i].High_Speed_Running);
        HML.push(j);
      }

      $scope.chartConfig = {
        options: {
          chart: {
            type: 'line'
          },
          xAxis: {
            categories: cats ///array of dates
          },
        },
        series: [{
          data: HML
        }],
        title: {
          text: 'High Speed Running'
        },

        loading: false
      };

    });

});

