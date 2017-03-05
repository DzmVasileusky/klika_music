/*********************************************** 
  REST Track
***********************************************/
angular.module('KMusic').factory('Track', ['Restangular', function(Restangular) {
  
  function getAll() {
    return Restangular.all('tracks').getList();
  };

  return {
    all: getAll
  }
}]);