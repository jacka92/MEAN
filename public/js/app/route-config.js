app.config(['$routeProvider',
  
  function($routeProvider) {
    $routeProvider
      .when('/dashboard', {
        templateUrl: '/js/app/pages/dash.html',
        controller: 'MainController',
      })
      .when('/1/',{
        templateUrl:'/js/app/pages/page1.html',
        controller:'MainController'
      })
      .when('/2/',{
        templateUrl:'/js/app/pages/page2.html',
        controller:'MainController'
      })
      .otherwise({
        redirectTo: '/dashboard'
      });
  }
]);