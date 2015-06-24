/*(function() {
  'use strict';

  angular
    .module('app')
    .config(config)

  config.$inject = ['$routeProvider'];

  function config($routeProvider) {
    $routeProvider
      .when('/players', {
        templateUrl: '/js/app/players/players.html',
        controller: 'PlayersController',
        controllerAs: 'vm'
      });
  }
}());*/