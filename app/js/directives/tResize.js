/**
 * Created by kuddai on 19.05.2015.
 */
app.directive('tResize', ['$window', 'debounce', function($window, debounce) {
    return {
        restrict: 'A',
        link: function(scope, element, attrs) {
            var wait = $window.parseInt(attrs.tResize) || 0;
            attrs.$observe('tResize', function(newWait) {
                console.log('new wait ' + newWait);
                wait = $window.parseInt(newWait) || 0;
            });
            console.log('first wait ' + wait);
            var inc = 0;
            angular.element($window).on('resize', debounce(function() {
                console.log("debounce resizing! " + inc);
                console.log('wait ' + wait);
                inc++;
                scope.$broadcast('tResize::resize');
            }, wait));
        }
    }
}]);
