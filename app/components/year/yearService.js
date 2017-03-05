/*********************************************** 
  REST Year
***********************************************/
angular.module('KMusic').factory('Year', ['Restangular', function(Restangular) {
  
  function getAll() {
    return Restangular.all('years').getList();
  };

  return {
    all: getAll
  }
}]);