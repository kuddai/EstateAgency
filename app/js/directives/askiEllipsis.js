/*
 @name: askEllipsis
 @description:
    It is angular wrapper above jquery plugin dotdotdot (http://dotdotdot.frebsite.nl/). It is used to cut long text and replace extra text with ...

    aski-ellipsis attribute syntax should be "scope_var" or "{scope_var} in {css_query_of_parent_container}" where scope_var
    is a binding variable containing text which will be cut through dotdotdot plugin. css_query_of_parent_container is needed
    to set proper width and height bounds for dotdotdot plugin to keep aski-ellipsis directive responsive to changes of size of parent_container.
    It relies on
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
        require: 'ngModel',
        link: function(scope, $el, attrs, ngModel) {
                //parent container
            var $ctr = (attrs.askiCtrQuery) ? $el.parents(attrs.ctrQuery) : $el.parent(),
                //ellipsis symbol
                ellipsisSym = attrs.askiEllispis || '... ',
                events = attrs.askiUpdateOn || "askiEllipsis::update";

            var updateView = function() {
                //destroy dotdotdot plugin to ensure the default behaviour of height
                $el.trigger("destroy.dot");
                //restore auto height to ensure fit-content in case $ctr is not overflowed
                $el.height("auto");
                //update our view
                $el.text(ngModel.$modelValue);
                //replace excessive text with ellipsis symbol if $ctr is overflowed
                if ($el.height() > $ctr.height()) {
                    $el.height($ctr.height());
                    $el.dotdotdot({
                        wrap: 'word',
                        fallbackToLetter: true,
                        ellipsis: ellipsisSym
                    });
                }
            };

            //we must update in two cases: when our model is changed or when size of our parent container is changed.
            ngModel.$render = updateView;
            //subscribe for all update events (such as resize)
            angular.forEach(events.split(), function(eventName, key) {
                scope.$on(eventName, updateView);
            });
            //cleaning up after ourselves
            scope.$on("$destroy", function() {
                //destroy dotdotdot plugin
                $el.trigger("destroy.dot");
            });
            updateView();
        }
    };
}]);