/**
 * Created by kuddai on 17.05.2015.
 */
app.directive('askBox',  function() {
    return {
        restrict: 'E',
        transclude: true,
        replace: true,
        require: '?ngModel',
        templateUrl: 'js/directives/askBox.html',

        link: function(scope, el, attrs, ngModel) {
            if (!ngModel) {
                return;
            }

            var v_wrap = el.find('.v-wrap'),
                v_box = el.find('.v-box'),
                v_content;

            var updateContent = function() {
                v_box.empty();
                //console.log('updating! ' + ngModel.$viewValue);
                v_content = $('<div class="v-content">' + ngModel.$viewValue + '</div>').appendTo(v_box);
            };

            var clampContentHeight = function() {
                if (v_content.height() > v_wrap.height()) {
                    v_content.height(v_wrap.height());
                    v_content.dotdotdot({
                        height: v_content.height()
                    });
                }
            };

            var updateBox = function() {
                updateContent();
                clampContentHeight();
            };

            scope.$on('askResize::resize', updateBox);
            ngModel.$render = updateBox;
            updateBox();
        }
    };
});