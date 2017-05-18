'use strict';

angular.module('myApp.championsService', [])

  .factory('ergastAPIservice', function ($http) {
    var ergastAPI = {};
    ergastAPI.getDrivers = function () {
      return $http({
        method: 'JSONP',
        url:  'http://ergast.com/api/f1/2013/driverStandings.json?callback=JSON_CALLBACK'
      });
    }

    ergastAPI.getDriverDetail = function (id) {
      return $http({
        method: 'JSONP',
        url:  'http://ergast.com/api/f1/2013/drivers/'+ id +'/driverStandings.json?callback=JSON_CALLBACK'
      });
    }

    ergastAPI.getDriverRaces = function(id) {
      return $http({
        method: 'JSONP',
        url: 'http://ergast.com/api/f1/2013/drivers/'+ id +'/results.json?callback=JSON_CALLBACK'
      });
    }

    return ergastAPI;
  });
