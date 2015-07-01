app.controller('PlayersController', function($scope, $http, $rootScope) {
  //load values for measures here and pass to scope

    $http.get('/orders/playersId').success(function(response){
        $scope.Ids = response;
        
    });

  ///Wrap in function initiated when a player from dropdown has been selected!

  $http.get("/orders/api/players") ///Ideally, get ("/orders/api/players:PlayerId")
    .success(function(response) {
      $scope.players = response;

      var cats = [];

      var hml = [];
      var acc = [];
      var dec = [];
      var hsr = [];
      var dist = [];

      var players = $scope.players;
      for (var i = 0; i < players.length; i++) {
        //push dates for each document
        var string = '';
        string = players[i].Session_Date;
        cats.push(string);
        //push data here
        hml.push(parseInt(players[i].HML_Distance));
        acc.push(parseInt(players[i].MEAN_of_Accelerations));
        dec.push(parseInt(players[i].Decelerations));
        hsr.push(parseInt(players[i].High_Speed_Running));
        dist.push(parseInt(players[i].Distance_Total));
      }

      $rootScope.cats = cats;
      $rootScope.hml = hml;
      $rootScope.acc = acc;
      $rootScope.dec = dec;
      $rootScope.hsr = hsr;
      $rootScope.dist = dist;
    });
});