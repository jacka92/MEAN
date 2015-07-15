'use strict';

var app = angular.module('app', ['ngResource', 'ngRoute', 'highcharts-ng','ui.bootstrap','nya.bootstrap.select']);

app.controller('HMLController', function($scope, $http, $rootScope) {
$scope.name = $rootScope.playerName;
  $scope.chartConfig = {
    options: {
      chart: {
        type: "areaspline"
      },
       xAxis: {
        categories: $rootScope.cats ///array of dates
      },
      yAxis: {
        min: 0
      }
    },
    series: [{
      name: "Injury",
       color: '#FF66FF',
      data: [1250, 1250, null, 1250, 2],
      connectNulls: false,
      id: "series-1"
    }, {
      name: "HML",
      data: $rootScope.hml,
      id: "series-2"
    }],
    title: {
      text: "HML Distance"
    },
    loading: false,
    size: {}
  };

});

app.controller('accController', function($scope, $http, $rootScope) {

$scope.name = $rootScope.playerName;
  $scope.chartConfig = {
    options: {
      chart: {
        type: 'line'
      },
      xAxis: {
        categories: $rootScope.cats ///array of dates
      },
       yAxis: {
        min: 0
      }
    },
    series: [{
      data: $rootScope.acc
    }],
    title: {
      text: 'Accelerations'
    },

    loading: false
  };
});

app.controller('decController', function($scope, $http, $rootScope) {

$scope.name = $rootScope.playerName;
  $scope.chartConfig = {
    options: {
      chart: {
        type: 'line'
      },
      xAxis: {
        categories: $rootScope.cats ///array of dates
      },
       yAxis: {
        min: 0
      }
    },
    series: [{
      data: $rootScope.dec
    }],
    title: {
      text: 'Decelerations'
    },

    loading: false
  };

});

app.controller('distController', function($scope, $http, $rootScope) {

$scope.name = $rootScope.playerName;

  $scope.chartConfig = {
    options: {
      chart: {
        type: 'line'
      },
      xAxis: {
        categories: $rootScope.cats ///array of dates
      },
       yAxis: {
        min: 0
      }
    },
    series: [{
      data: $rootScope.dist
    }],
    title: {
      text: 'Distance Total'
    },

    loading: false
  };

});

app.controller('hsrController', function($scope, $http, $rootScope) {

  $scope.name = $rootScope.playerName;

  $scope.chartConfig = {
    options: {
      chart: {
        type: 'line'
      },
      xAxis: {
        categories: $rootScope.cats ///array of dates
      },
       yAxis: {
        min: 0
      }
    },
    series: [{
      data: $rootScope.hsr
    }],
    title: {
      text: 'High Speed Running'
    },

    loading: false
  };

});

app.controller('fatigueController', function($scope, $http, $rootScope) {

  $scope.name = $rootScope.playerName;

  $scope.chartConfig = {
    options: {
      chart: {
        type: 'line'
      },
      xAxis: {
        categories: $rootScope.cats ///array of dates
      },
       yAxis: {
        min: 0
      }
    },
    series: [{
      data: $rootScope.fatigue
    }],
    title: {
      text: 'Fatigue Index'
    },

    loading: false
  };

});

app.controller('spIntensityController', function($scope, $http, $rootScope) {

  $scope.name = $rootScope.playerName;

  $scope.chartConfig = {
    options: {
      chart: {
        type: 'line'
      },
      xAxis: {
        categories: $rootScope.cats ///array of dates
      },
       yAxis: {
        min: 0
      }
    },
    series: [{
      data: $rootScope.spIntensity
    }],
    title: {
      text: 'Speed Intensity'
    },

    loading: false
  };

});

app.controller('dslController', function($scope, $http, $rootScope) {

  $scope.name = $rootScope.playerName;

  $scope.chartConfig = {
    options: {
      chart: {
        type: 'line'
      },
      xAxis: {
        categories: $rootScope.cats ///array of dates
      },
       yAxis: {
        min: 0
      }
    },
    series: [{
      data: $rootScope.dsl
    }],
    title: {
      text: 'Dynamic Stress Load'
    },

    loading: false
  };

});

app.controller('ChartController', function($scope, $http, $rootScope, $routeParams) {
  
    var cats = [];
   
      var hml = [];
      var acc = [];
      var dec = [];
      var hsr = [];
      var dist = [];
      var fatigue = [];
      var spIntensity = [];
      var dsl = [];
      
      var players;
    
      $http.get("/players/players/" + $routeParams.playerId)
        
    .success(function(response) {
      
      players = response;
      
      $rootScope.playerName = players[0].Player_First_Name + " " + players[0].Player_Last_Name;
      $scope.name = $rootScope.playerName;
      
      for (var i = 0; i < players.length; i++) {
        //push dates for each document
        var string = '';
        string = players[i].Session_Date;
        cats.push(string);
        
        console.log(string);
        console.log(players[i].Accelerations);
        
        //push data here
        hml.push(parseInt(players[i].HML_Distance));
        acc.push(parseInt(players[i].Accelerations));
        dec.push(parseInt(players[i].Decelerations));
        hsr.push(parseInt(players[i].High_Speed_Running));
        dist.push(parseFloat(players[i].Distance_Total));
        
        fatigue.push(parseFloat(players[i].Fatigue_Index));
        spIntensity.push(parseInt(players[i].Speed_Intensity));
        dsl.push(parseInt(players[i].Dynamic_Stress_Load)); 
      }
      
     
    });
      
      $rootScope.cats = cats;
      $rootScope.hml = hml;
      $rootScope.acc = acc;
      $rootScope.dec = dec;
      $rootScope.hsr = hsr;
      $rootScope.dist = dist;
      $rootScope.fatigue = fatigue;
      $rootScope.spIntensity = spIntensity;
      $rootScope.dsl = dsl;
  
});