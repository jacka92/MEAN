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

  var path = "/players/players/" + $routeParams.playerId;

  $http.get("/players/playersId/" + $routeParams.playerId).success(function(response){ ////////setup new route for returning a single player name
       $scope.name = response[0].Player_First_Name + " " + response[0].Player_Last_Name;

    $rootScope.playerName = response[0].Player_First_Name + " " + response[0].Player_Last_Name;                        //////from playerId
    });

  
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
    
    
      $http.get('/players/injuries/' + $routeParams.playerId).success(function(res) {

      for (var i = 0; i < res.length; i++) {
        injuries.push(parseInt(res[i].Injury));
      }
      $rootScope.injuries = injuries;
      return;
    });
    
  });

  return;

}]);