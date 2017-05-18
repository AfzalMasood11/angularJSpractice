'use strict';

// Declare app level module which depends on views, and components
angular.module('myApp', [
  'ngRoute',
  'myApp.view1',
  'myApp.view2',
  'myApp.champions',
  'myApp.championsService',
  'myApp.version'
])
.config(['$locationProvider', '$routeProvider', function($locationProvider, $routeProvider) {
  $routeProvider
  .when('/champions', {templateUrl: 'champions/champions.html', controller: 'championsCtrl'})
  .when('/champions/:id', {templateUrl: 'champions/champion.html', controller: 'championCtrl'})
  .otherwise({redirectTo: '/view1'});
}]);
