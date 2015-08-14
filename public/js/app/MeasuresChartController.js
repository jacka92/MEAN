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
        type: $rootScope.chartType
      },
      xAxis: {
        categories: $rootScope.cats,
        labels: {
                         enabled:false,//default is true
                        }///array of dates
      },
      yAxis: {
        min: 0
      }
    },
    title: {
      text: $scope.currentView.text ///object also needs text for type of measure
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
  
  if($rootScope.xseries){ //////////Doesn't do anything. Something tried when cleaning up UI
    $scope.chartConfig.series = $rootScope.xseries;
  }else{
    $scope.chartConfig.series = [
      {
      name: "Stats",
      data: $scope.currentView.data //// measures array selected from object array
    }
   ];
  }
  
 $scope.toggleInj = function(){
    if ($scope.chartConfig.series.length > 1){
      $scope.chartConfig.series.pop();
      $scope.chartConfig.options.chart.type = 'line';
      $rootScope.chartType = 'line';
      
    }else{
      $scope.chartConfig.series.push(injD);
      $scope.chartConfig.options.chart.type = 'areaspline';
      $rootScope.chartType = 'areaspline';
      
    }
  };
  
  $scope.togglePeriod = function(){
    //Add weekly field to current view objects with weekly stats!
    //May have to change 52 val depending on number of entries for weekly
    ///May also want to set chart config series name appropriately (e.g. daily stats/weekly stats)
    /*
    
    //if data greater than 52 it must be days (and injuries off)
    if($scope.chartConfig.series.data > 52 && $scope.chartConfig.series.length === 1){
      $scope.chartConfig.series.pop();    
      $scope.chartConfig.series.push($scope.currentview.weeklydata);
      //If days data and injuries on
    }else if($scope.chartConfig.series.data > 52 && $scope.chartConfig.series.length > 1){
      $scope.chartConfig.series.pop();
      $scope.chartConfig.series.pop();
      $scope.chartConfig.series.push($scope.currentview.weeklydata);
      //weekly data
    }else{
       $scope.chartConfig.series.pop();
       $scope.chartConfig.series.push($scope.currentview.data);
    }
    
    
    
    
    */
    
    
  };
  

});