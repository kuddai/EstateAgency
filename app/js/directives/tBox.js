/**
 * Created by kuddai on 17.05.2015.
 */
app.directive('tBox',  function() {
    return {
        restrict: 'E',
        transclude: true,
        replace: true,
        require: '?ngModel',
        templateUrl: 'js/directives/tBox.html',
        link: function(scope, el, attrs, ngModel) {
            if (!ngModel) {
                return;
            }
            var v_wrap = el.find('.v-wrap');
            var v_box = el.find('.v-box');
            //v_content.dotdotdot({});
            //console.log("finding v_content " + v_content.length);


            var updateContent = function () {
                console.log("update Content. Text: " + ngModel.$viewValue);
                v_box.empty().append('<div class="v-content"></div>');
                var v_content = v_box.find('.v-content');
                v_content.html(ngModel.$viewValue);
                console.log(v_content.height());
                console.log(v_wrap.height());
                if (v_content.height() > v_wrap.height()) {
                    console.log('resizing!');
                    v_content.height(v_wrap.height());
                    v_content.dotdotdot({
                        height: v_content.height()
                    });
                }
                //v_content.trigger('update');

                console.log(v_content.height());
            };

            scope.$on('tResize::resize', updateContent);

            ngModel.$render = function() {
                updateContent();
            };
            updateContent();
        }
    };
});