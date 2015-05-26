app.directive('askEllipsis',  ["$parse" ,function($parse) {
    return {
        restrict: 'A',
        link: function(scope, $el, attrs) {
            console.group("askEllipsis");
            console.log("start working");
            var pieces = attrs.askEllipsis.split(' ');
            console.log("pieces", pieces);
            if (pieces[1] !== "in") {
                throw new Error('t-ellipsis attribute syntax should be "{scope var} in {css query of container}". But it was' + attrs.askEllipsis);
            }

            var modelName = pieces[0],
                ctrQuery = pieces[2],
                modelGetter = $parse(modelName),
                $container = $el.parents(ctrQuery);

            $el.css('word-wrap', 'break-word');

            console.log(modelName, modelGetter(scope));
            console.log("scope", scope);

            var updateContent = function() {
                $el.empty();
                $el.text(modelGetter(scope));
            };

            var clampContent = function() {
                $el.width("auto");
                if ($el.width() > $container.width()) {
                    $el.width($container.width());
                }
                $el.height("auto");
                if ($el.height() > $container.height()) {
                    $el.height($container.height());
                    $el.dotdotdot({
                        height: $el.height()
                    });
                }
            };

            var updateContentView = function() {
                console.log("model", modelName, "has been updated!")
                updateContent();
                clampContent();
            };

            scope.$on('askResize::resize', updateContentView);
            scope.$watch(modelName, updateContentView);
            updateContentView();

            console.groupEnd();
        }
    };
}]);