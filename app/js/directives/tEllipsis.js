app.directive('tEllipsis',  function() {
    return {
        restrict: 'E',
        replace: true,
        templateUrl: 'js/directives/tEllipsis.html',
        scope: {
            content: '=',
            ctrQuery: '='
        },
        link: function(scope, el, attrs) {

            var $container = el.parents(scope.ctrQuery),
                $parent = el.parent(),
                $content;

            var updateContent = function() {
                $parent.empty();
                console.log('updating! ' + scope.content);
                $content = $('<div class="v-content">' + scope.content + '</div>').appendTo($parent);
            };

            var clampContentHeight = function() {
                if ($content.height() > $container.height()) {
                    $content.height($container.height());
                    $content.dotdotdot({
                        height: $content.height()
                    });
                }
            };

            var updateContentView = function() {
                updateContent();
                clampContentHeight();
            };

            scope.$on('tResize::resize', updateContentView);
            scope.$watch("content", updateContentView);
            updateContentView();
        }
    };
});