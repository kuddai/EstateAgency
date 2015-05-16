'use strict';

// Declare app level module which depends on views, and components
var app = angular.module('EstateAgency', [
  'ngRoute'
]).
config(['$routeProvider', function($routeProvider) {
  /*$routeProvider
      .when('/view1', {
        templateUrl: 'view1/view1.html',
        controller: 'View1Ctrl'
      })
      .otherwise({redirectTo: '/view1'});*/
}]);
