'use strict';

var app = angular.module('app', ['ngResource', 'ngRoute', 'highcharts-ng', 'ui.bootstrap', 'nya.bootstrap.select']);

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

  $scope.indices = [{
    'viewId': 0,
    'buttonText': 'HML Distance'
  }, {
    'viewId': 1,
    'buttonText': 'Accelerations'
  }, {
    'viewId': 2,
    'buttonText': 'Decelerations'
  }, {
    'viewId': 3,
    'buttonText': 'Total Distance'
  }, {
    'viewId': 4,
    'buttonText': 'High Speed Running'
  }, {
    'viewId': 5,
    'buttonText': 'Speed Intensity'
  }, {
    'viewId': 6,
    'buttonText': 'Dynamic Stress Load'
  }, {
    'viewId': 7,
    'buttonText': 'Fatigue Index'
  }];

});

app.controller('MeasuresChartController', function($scope, $rootScope, $routeParams) {

  $scope.name = $rootScope.playerName;

  var views = [{
    'data': $rootScope.hml,
    'hmlHidden': true,
    'text': 'High Metabolic Load Distance'
  }, {
    'data': $rootScope.acc,
    'accHidden': true,
    'text': 'Accelerations'
  }, {
    'data': $rootScope.dec,
    'decHidden': true,
    'text': 'Decelerations'
  }, {
    'data': $rootScope.dist,
    'distHidden': true,
    'text': 'Distance Total'
  }, {
    'data': $rootScope.hsr,
    'hsrHidden': true,
    'text': 'High Speed Running'
  }, {
    'data': $rootScope.spIntensity,
    'spHidden': true,
    'text': 'Speed Intensity'
  }, {
    'data': $rootScope.dsl,
    'dslHidden': true,
    'text': 'Dynamic Stress Load'
  }, {
    'data': $rootScope.fatigue,
    'fatigueHidden': true,
    'text': 'Fatigue Index'
  }];

  $scope.currentView = views[$routeParams.viewId]; //might have to append .viewId to routeparams. Could use scope here if not working

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
      data: $scope.currentView.data //// measures array selected from object array
    }],
    title: {
      text: $scope.currentView.text ///object also needs text for type of measure
    },

    loading: false
  };

});