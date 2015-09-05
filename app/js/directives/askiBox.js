/**
 * Created by kuddai on 17.05.2015.
 */
angular.module('EstateAgency').directive('askiBox',  function() {
    return {
        restrict: 'E',
        transclude: true,
        replace: true,
        templateUrl: '/EstateAgency/app/partials/templates/askiBox.html'
    };
});