'use strict';

angular.module('myApp.champions')
  .controller('championCtrl', ['$scope', '$routeParams', 'ergastAPIservice', function ($scope, $routeParams, ergastAPIservice){
    $scope.name = "Afzal";
    $scope.id = $routeParams.id;
    $scope.races = [];
    $scope.driver = null;

    ergastAPIservice.getDriverDetail($scope.id).success(function (response) {
      $scope.driver = response.MRData.StandingsTable.StandingsLists[0].DriverStandings[0];
    });

    ergastAPIservice.getDriverRaces($scope.id).success(function (response) {
        $scope.races = response.MRData.RaceTable.Races;
    });

  }]);
