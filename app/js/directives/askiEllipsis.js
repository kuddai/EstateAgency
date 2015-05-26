/*
 @name: askEllipsis
 @description:
    It is angular wrapper above jquery plugin dotdotdot (http://dotdotdot.frebsite.nl/). It is used to cut long text and replace extra text with ...

    aski-ellipsis attribute syntax should be "scope_var" or "{scope_var} in {css_query_of_parent_container}" where scope_var
    is a binding variable containing text which will be cut through dotdotdot plugin. css_query_of_parent_container is needed
    to set proper width and height bounds for dotdotdot plugin to keep aski-ellipsis directive responsive to changes in size of parent_container.
    If css_query_of_parent_container is not given then the direct parent of the element (element which contains aski-ellipsis directive)
    is used.

    To start updating on parent container resize scope event 'askResize::resize' must be invoked.

    Usage examples:
    1)
     <div class="v-wrap">
         <div class="v-box">
            <div aski-ellipsis="offer.extra in .v-wrap"></div>
         </div>
     </div>

     here v-wrap is used as parent container and offer.extra is our model in the scope
     
    2)
     <div class="v-wrap">
         <div class="v-box">
            <div aski-ellipsis="offer.extra"></div>
         </div>
     </div>

     here v-box is used as parent container because we didn't specify  css_query_of_parent_container explicitly and
     v-box is direct parent of element which contains aski-ellipsis directive
*/
angular.module('EstateAgency').directive('askiEllipsis',  ["$parse" ,function($parse) {
    return {
        restrict: 'A',
        link: function(scope, $el, attrs) {
            //parsing aski-ellipsis attribute
            var expression = attrs.askiEllipsis;
            var match = expression.match(/^([A-Za-z0-9_.]+)(?:\s+in\s+([\s\S]+))?$/);
            if (!match) {
                var m = 'aski-ellipsis attribute syntax should be "{scope_var} in {css_query_of_parent_container}" or "scope_var". But it was';
                throw new Error(m + attrs.askEllipsis);
            }
            var pieces = match.slice(1);
            var modelName = pieces[0],
                ctrQuery = pieces[1],
                modelGetter = $parse(modelName),
                $container = (ctrQuery) ? $el.parents(ctrQuery) : $el.parent();
            //to ensure word wrap
            $el.css('word-wrap', 'break-word');
            //reflect possible changes in our model

            //change sizes to default to allow possible alignment
            var resetSizes = function() {
                $el.css('max-width', $container.width());
                //destroy dotdotdot plugin to ensure normal height and width properties behaviour
                $el.trigger("destroy");
                $el.height("auto");
            };

            var updateText = function() {

                $el.empty();
                console.log("text should be empty", $el.text());
                $el.text(modelGetter(scope));
                console.log("el text before", $el.text());
                console.log("height before", $el.height());
            };

            //prohibit our content to exceed its container
            var clampContent = function() {
                if ($el.height() > $container.height()) {
                    console.log("clamp height");
                    $el.height($container.height());
                    $el.trigger("destroy");
                    $el.dotdotdot({
                        height: $el.height(),
                        wrap: 'letter'
                    });
                }
                console.log("el text after", $el.text());
                console.log("height after", $el.height());
            };

            var update = function() {
                console.groupCollapsed("during one update");
                resetSizes();
                updateText();
                clampContent();
                console.groupEnd();
            };
            //we must update in two cases when our model is changed and when container is resized.
            scope.$on('askiResize::resize', function() {
                console.log("respond to different size!");
                update();
            });
            scope.$watch(modelName, update);
            update();
        }
    };
}]);