app.config(['$routeProvider',
  
  function($routeProvider) {
    $routeProvider
      .when('/players', {
        templateUrl: '/js/app/pages/players.html',
        controller: 'PlayersController',
      })
      .when('/:playerId/',{
        templateUrl:'/js/app/pages/playerSelected.html',
        controller:'ChartController'
      })
      .when('/view/:viewId/',{
        templateUrl:'/js/app/pages/chart.html',
        controller:'MeasuresChartController'
      })
      .otherwise({
        redirectTo: '/players'
      });
  }
]);