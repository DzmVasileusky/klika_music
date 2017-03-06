angular.module('KMusic').config(['$stateProvider', '$urlRouterProvider', '$urlMatcherFactoryProvider', 'RestangularProvider', function($stateProvider, $urlRouterProvider, $urlMatcherFactoryProvider, RestangularProvider) {
  $urlMatcherFactoryProvider.strictMode(false);

  $stateProvider
    .state('tracks', {
      url: '/tracks',
      templateUrl: 'app/components/track/list.html',
      controller: 'TrackListController'
    });

  $urlRouterProvider.otherwise(function($injector) {
    var $state = $injector.get('$state');
    $state.go('tracks');
  });

  RestangularProvider.setBaseUrl('.');
}]);