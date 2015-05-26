/**
 * Created by kuddai on 19.05.2015.
 */
angular.module('EstateAgency').directive('askResize', ['$window', 'debounce', function($window, debounce) {
    return {
        restrict: 'A',
        link: function(scope, element, attrs) {
            var wait = $window.parseInt(attrs.tResize) || 0;
            attrs.$observe('askResize', function(newWait) {
                wait = $window.parseInt(newWait) || 0;
            });
            angular.element($window).on('resize', debounce(function() {
                scope.$broadcast('askResize::resize');
            }, wait));
        }
    }
}]);
