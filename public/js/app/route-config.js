app.config(['$routeProvider',
  
  function($routeProvider) {
    $routeProvider
      .when('/players', {
        templateUrl: '/js/app/pages/players.html',
        controller: 'PlayersController',
        controllerAs: 'vm'
      })
      .when('/hml', {
        templateUrl: '/js/app/pages/hml.html',
        controller: 'HMLController',
        controllerAs: 'vm'
      })
      .when('/accelerations', {
        templateUrl: '/js/app/pages/acc.html',
        controller: 'accController',
        controllerAs: 'vm'
      })
      .when('/decelerations', {
        templateUrl: '/js/app/pages/dec.html',
        controller: 'decController',
        controllerAs: 'vm'
      })
      .when('/distanceTotal', {
        templateUrl: '/js/app/pages/dist.html',
        controller: 'distController',
        controllerAs: 'vm'
      })
      .when('/highSpeedRunning', {
        templateUrl: '/js/app/pages/hsr.html',
        controller: 'hsrController',
        controllerAs: 'vm'
      })
      .when('/:playerId/',{
        templateUrl:'/js/app/pages/players.html',
        controller:'ChartController'
      })
      .otherwise({
        redirectTo: '/players'
      });
  }
]);