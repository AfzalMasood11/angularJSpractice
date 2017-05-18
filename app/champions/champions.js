'use strict';

angular.module('myApp.champions', ['ngRoute'])
  .controller('championsCtrl', ['$scope', 'ergastAPIservice', function($scope, ergastAPIservice) {
    $scope.nameFilter = null;
    $scope.driversList = [];

    ergastAPIservice.getDrivers().success(function(response) {
      //Dig into the responde to get the relevant data
      $scope.driversList = response.MRData.StandingsTable.StandingsLists[0].DriverStandings;
    });

    $scope.searchField = function (driver) {
      var keyword = new RegExp($scope.nameFilter, 'i');
      return !$scope.nameFilter || keyword.test(driver.Driver.givenName) || keyword.test(driver.Driver.familyName)
    }

  }]);
