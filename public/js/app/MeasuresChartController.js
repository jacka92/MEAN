app.controller('MeasuresChartController', function($scope, $rootScope, $routeParams) {

  $scope.name = $rootScope.playerName;

  var views = [{
    'data': $rootScope.hml,
    'hmlHidden': true,
    'text': 'High Metabolic Load Distance',
    'weekly': $rootScope.wHml
  }, {
    'data': $rootScope.acc,
    'accHidden': true,
    'text': 'Accelerations',
    'weekly': $rootScope.wAcc
  }, {
    'data': $rootScope.dec,
    'decHidden': true,
    'text': 'Decelerations',
    'weekly': $rootScope.wDec
  }, {
    'data': $rootScope.dist,
    'distHidden': true,
    'text': 'Distance Total',
    'weekly': $rootScope.wDist
  }, {
    'data': $rootScope.hsr,
    'hsrHidden': true,
    'text': 'High Speed Running',
    'weekly': $rootScope.wHsr
  }, {
    'data': $rootScope.spIntensity,
    'spHidden': true,
    'text': 'Speed Intensity',
    'weekly': $rootScope.wSpIntensity
  }, {
    'data': $rootScope.dsl,
    'dslHidden': true,
    'text': 'Dynamic Stress Load',
    'weekly': $rootScope.wDsl
  }, {
    'data': $rootScope.fatigue,
    'fatigueHidden': true,
    'text': 'Fatigue Index',
    'weekly': $rootScope.wFatigue
  }];

  $scope.currentView = views[$routeParams.viewId];

  $scope.period = "Daily";
  $scope.perDisplay = "visible";

  $scope.chartConfig = {
    series: [{
      name: "Stats",
      data: $scope.currentView.data
    }],
    options: {
      chart: {
        type: $rootScope.chartType
      },
      xAxis: {
        categories: $rootScope.cats,
        labels: {
          enabled: false,
        }
      },
      yAxis: {
        min: 0
      }
    },
    title: {
      text: $scope.currentView.text
    },

    loading: false
  };

  var injD = {
    name: "Injury",
    color: '#FF66FF',
    data: $rootScope.injuries,
    connectNulls: false,
    id: "Injuries"
  };

  $scope.toggleInj = function() {
    if ($scope.chartConfig.series.length > 1) {
      $scope.chartConfig.series.pop();
      $scope.chartConfig.options.chart.type = 'line';
      $rootScope.chartType = 'line';

    }
    else {
      $scope.chartConfig.series.push(injD);
      $scope.chartConfig.options.chart.type = 'areaspline';
      $rootScope.chartType = 'areaspline';

    }
  };

  var weekly = {
    name: "Weekly",
    data: $scope.currentView.weekly
  };

  var daily = {
    name: "Daily",
    data: $scope.currentView.data
  };

  $scope.togglePeriod = function() {

    //if daily stats (and injuries off)
    if ($scope.chartConfig.options.xAxis.categories === $rootScope.cats && $scope.chartConfig.series.length === 1) {
      $scope.perDisplay = "hidden";
      $scope.chartConfig.series.pop();
      $scope.chartConfig.series.push(weekly);
      $scope.chartConfig.options.xAxis.categories = $rootScope.wCats;
      $scope.period = "Weekly";
    }
    //If days data and injuries on
    else if ($scope.chartConfig.options.xAxis.categories === $rootScope.cats && $scope.chartConfig.series.length > 1) {
      $scope.perDisplay = "hidden";
      $scope.chartConfig.series.pop();
      $scope.chartConfig.series.pop();
      $scope.chartConfig.series.push(weekly);
      $scope.chartConfig.options.xAxis.categories = $rootScope.wCats;
      $scope.period = "Weekly";
      //weekly data
    }
    else {
      $scope.chartConfig.series.pop();
      $scope.chartConfig.series.push(daily);
      $scope.chartConfig.options.xAxis.categories = $rootScope.cats;
      $scope.period = "Daily";
      $scope.perDisplay = "visible";
    }

  };


});