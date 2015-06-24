/*(function() {
  'use strict';
  
  angular
    .module('app')
    .factory('api', apiFactory);
    
  apiFactory.$inject = ['$http'];
  
  function apiFactory($http) {
    return {
      getPlayers: getPlayers,
      
    };
    
    function getPlayers() {
      return $http.get('/orders/players')
        .then(function(response) {
          return response.data;
        });
    }
    
    
  }
}());*/

///line 31 in book: return $resource('/players/:playerId', {}, {

/*var app = angular.module('app',['ngResource']);
app.factory('api' ,['$resource', function($resource){
  return $resource('/orders/api/players', {}, {
  get: {
  isArray : true}
  });
}]);*/


