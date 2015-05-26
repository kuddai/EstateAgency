/**
 * Created by kuddai on 27.05.2015.
 */
angular.module('EstateAgency').directive('askiOffer', function() {
    return {
        restrict: 'E',
        templateUrl: 'js/directives/askiOffer.html',
        scope: {
            offer: '=askiInfo'
        },
        link: function(scope, $el, attrs) {
        }
    };
});
