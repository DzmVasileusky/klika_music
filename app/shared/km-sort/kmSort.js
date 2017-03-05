/*********************************************** 
  Component to sort asc/desc by model property
***********************************************/
angular.module('Shared').component('kmSort', {
  templateUrl: 'app/shared/km-sort/km-sort.html',
  transclude: true,
  bindings: {
    value: '@',
    current: '<currentState',
    onSet: '&'
  },
  controller: ['$scope', '$element', '$attrs', function($scope, $element, $attrs) {
    var ctrl = this,
        order = false;

    ctrl.onClick = function() {
      if (ctrl.value === ctrl.current.sortProperty) {
        order = ctrl.current.sortReverse ? false : true;
      }

      ctrl.onSet( {args: { sortProperty: ctrl.value, sortReverse: order } } );
    };

    $element.on('click', ctrl.onClick);
  }]
});