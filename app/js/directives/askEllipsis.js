app.directive('askEllipsis',  function() {
    return {
        restrict: 'A',
        link: function(scope, $el, attrs) {
            var pieces = attrs.tEllipsis.split(' ');
            if (pieces[1] !== "in") {
                throw new Error('t-ellipsis attribute syntax should be "{scope var} in {css query of container}". But it was' + attrs.tEllipsis);
            }

            var model = pieces[0],
                ctrQuery = pieces[2]
                $container = $el.parents(ctrQuery);

            var updateContent = function() {
                $el.empty();
                $el.height("auto");
                $el.text(scope[model]);
            };

            var clampContentHeight = function() {
                if ($el.height() > $container.height()) {
                    $el.height($container.height());
                    $el.dotdotdot({
                        height: $content.height()
                    });
                }
            };

            var updateContentView = function() {
                updateContent();
                clampContentHeight();
            };

            scope.$on('askResize::resize', updateContentView);
            scope.$watch(model, updateContentView);
            updateContentView();
        }
    };
});