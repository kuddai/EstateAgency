/**
 * Created by kuddai on 17.05.2015.
 */
angular.module('EstateAgency').directive('askBox',  function() {
    return {
        restrict: 'E',
        transclude: true,
        replace: true,
        templateUrl: 'js/directives/askBox.html'
    };
});