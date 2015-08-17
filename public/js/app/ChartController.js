app.controller('ChartController', ['$http', '$route', 'stats', '$scope', '$rootScope', '$routeParams', function($http, $route, stats, $scope, $rootScope, $routeParams) {

  var cats = [];
  var hml = [];
  var acc = [];
  var dec = [];
  var hsr = [];
  var dist = [];
  var fatigue = [];
  var spIntensity = [];
  var dsl = [];
  var injuries = [];
  
  
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

  var path = "/players/players/" + $routeParams.playerId;

  //Op 1: Get player name
  $http.get("/players/playersId/" + $routeParams.playerId).success(function(response) { 
    $scope.name = response[0].Player_First_Name + " " + response[0].Player_Last_Name;
    $rootScope.playerName = response[0].Player_First_Name + " " + response[0].Player_Last_Name; 
  });

  //Op 2: Get player daily stats
  stats.getStats(path).then(function(response) {

    var players = response.data;

    $rootScope.chartType = 'line';
    for (var i = 0; i < players.length; i++) {
      //push dates for each document
      var string = '';
      string = players[i].Session_Date;
      cats.push(string);
      hml.push(parseInt(players[i].HML_Distance));
      acc.push(parseInt(players[i].Accelerations));
      dec.push(parseInt(players[i].Decelerations));
      hsr.push(parseInt(players[i].High_Speed_Running));
      dist.push(parseFloat(players[i].Distance_Total));
      fatigue.push(parseFloat(players[i].Fatigue_Index));
      spIntensity.push(parseInt(players[i].Speed_Intensity));
      dsl.push(parseInt(players[i].Dynamic_Stress_Load));
    }

    $rootScope.cats = cats;
    $rootScope.hml = hml;
    $rootScope.acc = acc;
    $rootScope.dec = dec;
    $rootScope.hsr = hsr;
    $rootScope.dist = dist;
    $rootScope.fatigue = fatigue;
    $rootScope.spIntensity = spIntensity;
    $rootScope.dsl = dsl;

    //Op 3: Get injury stats
    $http.get('/players/injuries/' + $routeParams.playerId).success(function(res) {

      for (var i = 0; i < res.length; i++) {
        injuries.push(parseInt(res[i].Injury));
      }
      $rootScope.injuries = injuries;
      return;
    });

  });
  
  //Op 4: Call to get weekly stats - whatever is retuned from first then gts passed to next then
  $http.get('/players/weekly/' + $routeParams.playerId).then(function(response){
    return response.data;
  }).then(function(data){
    //Use better JS data structure
      $rootScope.wCats = [];
      $rootScope.wHml = [];
      $rootScope.wAcc = [];
      $rootScope.wDec = [];
      $rootScope.wHsr = [];
      $rootScope.wDist = [];
      $rootScope.wFatigue = [];
      $rootScope.wSpIntensity = [];
      $rootScope.wDsl = [];

      for (var i = 0; i < data.length; i++) {
        //push dates for each document
        var string = '';
        string = data[i].Session_Date;
        $rootScope.wCats.push(string);
        $rootScope.wHml.push(parseFloat(data[i].HML_Distance));
        $rootScope.wAcc.push(parseFloat(data[i].Accelerations));
        $rootScope.wDec.push(parseFloat(data[i].Decelerations));
        $rootScope.wHsr.push(parseFloat(data[i].High_Speed_Running));
        $rootScope.wDist.push(parseFloat(data[i].Distance_Total));
        $rootScope.wFatigue.push(parseFloat(data[i].Fatigue_Index));
        $rootScope.wSpIntensity.push(parseFloat(data[i].Speed_Intensity));
        $rootScope.wDsl.push(parseFloat(data[i].Dynamic_Stress_Load));
      }
    
  });
      

}]);