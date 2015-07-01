'use strict';

var app = angular.module('app', ['ngResource', 'ngRoute', 'highcharts-ng','ui.bootstrap']);





app.controller('HMLController', function($scope, $http, $rootScope) {

  $scope.chartConfig = {
    options: {
      chart: {
        type: "areaspline"
      },
       xAxis: {
        categories: $rootScope.cats ///array of dates
      },
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


  $scope.chartConfig = {
    options: {
      chart: {
        type: 'line'
      },
      xAxis: {
        categories: $rootScope.cats ///array of dates
      },
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


  $scope.chartConfig = {
    options: {
      chart: {
        type: 'line'
      },
      xAxis: {
        categories: $rootScope.cats ///array of dates
      },
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

  $scope.chartConfig = {
    options: {
      chart: {
        type: 'line'
      },
      xAxis: {
        categories: $rootScope.cats ///array of dates
      },
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

  $scope.chartConfig = {
    options: {
      chart: {
        type: 'line'
      },
      xAxis: {
        categories: $rootScope.cats ///array of dates
      },
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
