/*********************************************** 
  REST Genre
***********************************************/
angular.module('KMusic').factory('Genre', ['Restangular', function(Restangular) {
  
  function getAll() {
    return Restangular.all('genres').getList();
  };

  return {
    all: getAll
  }
}]);