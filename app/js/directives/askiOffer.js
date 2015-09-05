/**
 * Created by kuddai on 27.05.2015.
 */
angular.module('EstateAgency').directive('askiOffer', function() {
    return {
        restrict: 'E',
        replace: true,
        scope: {
            offer: '=askiInfo'
        },
        templateUrl: '/EstateAgency/app/partials/templates/askiOffer.html'
    };
});
