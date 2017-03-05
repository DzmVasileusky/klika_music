/*********************************************** 
  Manage track list
***********************************************/
angular.module('KMusic').controller('TrackListController', ['Track', 'Genre', 'Singer', 'Year', '$scope', '$filter', function(Track, Genre, Singer, Year, $scope, $filter) {
  $scope.tracks = [];
  $scope.genres = [];
  $scope.singers = [];
  $scope.years = [];

  // global filtered tracks link
  $scope.filteredTracks = $scope.tracks;

  // filter comparison object
  $scope.filterComparator = { genre: '', singer: '', year: '' };
  // update total items value
  $scope.$watch('filterComparator', function(newValue) {
    $scope.filteredTracks = $filter('filter')($scope.tracks, newValue);
    $scope.pageConfig.total = $scope.filteredTracks.length;
  }, true);

  // order
  $scope.sortConfig = {
    sortProperty: "singer",
    sortReverse: false
  };

  // paging
  $scope.pageConfig = {
    page: 1,
    per: 10
  };

  // update order
  $scope.sortBy = function(args) {
    $scope.sortConfig.sortProperty = args.sortProperty;
    $scope.sortConfig.sortReverse = args.sortReverse;
    $scope.$digest();
  };

  // go to page
  $scope.goPage = function(page) {
    $scope.pageConfig.page = page;
  };

  // update per page
  $scope.updatePerPage = function(per) {
    $scope.pageConfig.per = per;
  };
  
  Track.all().then(function(data) {
    $scope.tracks = data;
    $scope.filteredTracks = $scope.tracks;
    $scope.pageConfig.total = $scope.tracks.length;
  });
  
  Genre.all().then(function(data) {
    $scope.genres = data;
  });
  
  Singer.all().then(function(data) {
    $scope.singers = data;
  });
  
  Year.all().then(function(data) {
    $scope.years = data;
  });
}]);