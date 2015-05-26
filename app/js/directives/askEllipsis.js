/*
 @name askEllipsis
 @
*/
angular.module('EstateAgency').directive('askEllipsis',  ["$parse" ,function($parse) {
    return {
        restrict: 'A',
        link: function(scope, $el, attrs) {
            console.log("I am here!");
            var expression = attrs.askEllipsis;
            var match = expression.match(/^([A-Za-z0-9_.]+)(?:\s+in\s+([\s\S]+))?$/);
            if (!match) {
                throw new Error('t-ellipsis attribute syntax should be "{scope var} in {css query of container}". But it was' + attrs.askEllipsis);
            }
            var pieces = match.slice(1);
            var modelName = pieces[0],
                ctrQuery = pieces[1],
                modelGetter = $parse(modelName),
                $container = (ctrQuery) ? $el.parents(ctrQuery) : $el.parent();
            //to ensure word wrap
            $el.css('word-wrap', 'break-word');

            var updateContent = function() {
                $el.empty();
                $el.text(modelGetter(scope));
            };

            var resetSizes = function() {
                $el.css('max-width', $container.width());
                $el.height("auto");
            }

            var clampContent = function() {
                if ($el.height() > $container.height()) {
                    $el.height($container.height());
                    $el.trigger("destroy");
                    $el.dotdotdot({
                        height: $el.height(),
                        wrap: 'letter'
                    });
                }
            };

            var updateContentView = function() {
                updateContent();
                resetSizes();
                clampContent();
            };

            scope.$on('askResize::resize', updateContentView);
            scope.$watch(modelName, updateContentView);
            updateContentView();
        }
    };
}]);