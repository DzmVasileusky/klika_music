/*********************************************** 
  Component to navigate through pagination
***********************************************/
angular.module('Shared').component('kmPagination', {
  templateUrl: 'app/shared/km-pagination/km-pagination.html',
  bindings: {
    per: '<itemsPerPage',
    total: '<itemsTotal',
    page: '<itemsPage',
    onChangePage: '&',
    onChangePerPage: '&'
  },
  controller: ['$scope', '$element', '$attrs', function($scope, $element, $attrs) {
    var ctrl = this;
        

    ctrl.pagesCount = 0;
    ctrl.$onChanges = updatePagination;
    ctrl.$onDestroy = updatePagination;

    ctrl.setPage = function(page) {
      if (ctrl.page === page || page < 1 || page > ctrl.pagesCount) return;
      ctrl.onChangePage({page: page});
    };

    ctrl.setPerPage = function(perPage) {
      if (ctrl.per === perPage) return;
      ctrl.onChangePerPage({per: perPage});
    };

    function updatePagination(changes) {
      if (!(changes.total || changes.per)) return;

      ctrl.pages = [];
      ctrl.pagesCount = Math.ceil( ctrl.total / ctrl.per );

      for (var i = 1; i < ctrl.pagesCount + 1; i++) {
        ctrl.pages.push(i);
      }

      ctrl.setPage(1);
    };
  }]
});