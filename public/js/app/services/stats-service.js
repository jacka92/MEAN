    angular.module('app')
        .factory('stats', function($http){
            return{
                getStats: function(path) {
          return $http.get(path);
        }
            };
        });