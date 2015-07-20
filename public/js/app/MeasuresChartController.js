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

  $scope.currentView = views[$routeParams.viewId]; 

  $scope.chartConfig = {
    options: {
      chart: {
        type: 'areaspline'
      },
      xAxis: {
        categories: $rootScope.cats, ///array of dates
      },
      yAxis: {
        min: 0
      }
    },
    series: [
      {
      name: "Stats",
      data: $scope.currentView.data //// measures array selected from object array
    },
    {
      name: "Injury",
      color: '#FF66FF',
      data: $rootScope.injuries,
      connectNulls: false,
      id: "Injuries"
    }],
    title: {
      text: $scope.currentView.text ///object also needs text for type of measure
    },
    
    loading: false
  };

});