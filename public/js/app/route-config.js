app.config(['$routeProvider',
  
  function($routeProvider) {
    $routeProvider
      .when('/players', {
        templateUrl: '/js/app/pages/players.html',
        controller: 'PlayersController',
        
      })
      .when('/hml', {
        templateUrl: '/js/app/pages/hml.html',
        controller: 'HMLController',
        
      })
      .when('/accelerations', {
        templateUrl: '/js/app/pages/acc.html',
        controller: 'accController',
        
      })
      .when('/decelerations', {
        templateUrl: '/js/app/pages/dec.html',
        controller: 'decController',
        
      })
      .when('/distanceTotal', {
        templateUrl: '/js/app/pages/dist.html',
        controller: 'distController',
        
      })
      .when('/highSpeedRunning', {
        templateUrl: '/js/app/pages/hsr.html',
        controller: 'hsrController',
        
      })
      .when('/fatigue', {
        templateUrl: '/js/app/pages/fatigue.html',
        controller: 'fatigueController',
        
      })
      .when('/dsl', {
        templateUrl: '/js/app/pages/dsl.html',
        controller: 'dslController',
        
      })
      .when('/spIntensity', {
        templateUrl: '/js/app/pages/spIntensity.html',
        controller: 'spIntensityController',
        
      })
      .when('/:playerId/',{
        templateUrl:'/js/app/pages/playerSelected.html',
        controller:'ChartController'
      })
      .otherwise({
        redirectTo: '/players'
      });
  }
]);