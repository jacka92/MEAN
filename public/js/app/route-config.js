app.config(['$routeProvider',
  
  function($routeProvider) {
    $routeProvider
      .when('/players', {
        templateUrl: '/js/app/players/players.html',
        controller: 'PlayersController',
        controllerAs: 'vm'
      })
      .when('/hml', {
        templateUrl: '/js/app/players/hml.html',
        controller: 'HMLController',
        controllerAs: 'vm'
      })
      .when('/accelerations', {
        templateUrl: '/js/app/players/acc.html',
        controller: 'accController',
        controllerAs: 'vm'
      })
      .when('/decelerations', {
        templateUrl: '/js/app/players/dec.html',
        controller: 'decController',
        controllerAs: 'vm'
      })
      .when('/distanceTotal', {
        templateUrl: '/js/app/players/dist.html',
        controller: 'distController',
        controllerAs: 'vm'
      })
      .when('/highSpeedRunning', {
        templateUrl: '/js/app/players/hsr.html',
        controller: 'hsrController',
        controllerAs: 'vm'
      })
      .when('/:playerId/',{
        templateUrl:'/js/app/players/players.html',
        controller:'ChartController'
      })
      .otherwise({
        redirectTo: '/players'
      });
  }
]);