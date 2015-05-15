'use strict';

// Declare app level module which depends on views, and components
angular.module('myApp', [
  'ngRoute'
]).
config(['$routeProvider', function($routeProvider) {
  $routeProvider
      .when('/view1', {
        templateUrl: 'view1/view1.html',
        controller: 'View1Ctrl'
      })
      .otherwise({redirectTo: '/view1'});
}]);
