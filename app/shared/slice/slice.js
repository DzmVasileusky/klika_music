/*********************************************** 
  Slice collection filter
***********************************************/
angular.module('Shared').filter('slice', function() {
  return function(input, start, end) {
    return (input || []).slice(start, end);
  };
});