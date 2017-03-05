/*********************************************** 
  REST Singer
***********************************************/
angular.module('KMusic').factory('Singer', ['Restangular', function(Restangular) {
  
  function getAll() {
    return Restangular.all('singers').getList();
  };

  return {
    all: getAll
  }
}]);