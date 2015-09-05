angular.module('templates-main', ['../app/js/directives/askiBox.html', '../app/js/directives/askiBusinessCard.html', '../app/js/directives/askiOffer.html']);

angular.module("../app/js/directives/askiBox.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("../app/js/directives/askiBox.html",
    "<div class=\"box\">\n" +
    "    <div class=\"box-inner\">\n" +
    "        <div class=\"v-wrap\">\n" +
    "            <div class=\"v-box\" ng-transclude>\n" +
    "            </div>\n" +
    "        </div>\n" +
    "    </div>\n" +
    "</div>");
}]);

angular.module("../app/js/directives/askiBusinessCard.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("../app/js/directives/askiBusinessCard.html",
    "<div class=\"row\">\n" +
    "    <div class=\"tp-frame col-md-offset-1 col-md-10 col-lg-offset-2 col-lg-8\">\n" +
    "        <div class=\"row\">\n" +
    "            <div class=\"col-xs-12\">\n" +
    "                <div class=\"about\">\n" +
    "                    <h1>Недвижимость&nbsp;по Ростовской&nbsp;Области</h1>\n" +
    "                    <p>\n" +
    "                        Покупка, аренда и продажа недвижимости в Ростове-на-дону, Азове, Таганроге и Батайске.\n" +
    "                        Помощь в офрмлении документов на недвижимость.\n" +
    "                    </p>\n" +
    "                </div>\n" +
    "                <hr/>\n" +
    "                <div class=\"pull-right contact\">\n" +
    "                    <span class=\"glyphicon dummy\"></span>&nbsp;&nbsp;<strong>Баяна Амановна</strong><br/>\n" +
    "                    <span class=\"glyphicon glyphicon-map-marker\"></span>&nbsp;&nbsp;пер. Братской Оборонной<br/>\n" +
    "                    <span class=\"glyphicon glyphicon-earphone\"></span>&nbsp;&nbsp;+7 (863) 244-27-38<br/>\n" +
    "                    <span class=\"glyphicon glyphicon-envelope\"></span>&nbsp;&nbsp; <a class=\"t-ref\" href=\"mailto:#\">cuddai92@yandex.ru</a>\n" +
    "                </div>\n" +
    "            </div>\n" +
    "        </div>\n" +
    "    </div>\n" +
    "</div>\n" +
    "");
}]);

angular.module("../app/js/directives/askiOffer.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("../app/js/directives/askiOffer.html",
    "<div class=\"panel panel-default sd-frame step\" >\n" +
    "    <div class=\"panel-body\">\n" +
    "        <div class=\"row row-small-padding\">\n" +
    "\n" +
    "            <div class=\"col-sm-6 col-md-4 col-xs-12 aski-left-column\">\n" +
    "                <div class=\"row row-small-padding\">\n" +
    "                    <div class=\"col-xs-12\">\n" +
    "                        <aski-box class=\"m-address\">\n" +
    "                            <h3 class=\"new-lines\">{{ offer.address }}</h3>\n" +
    "                        </aski-box>\n" +
    "                    </div>\n" +
    "                    <div class=\"col-xs-12 visible-sm-block\">\n" +
    "                        <aski-box class=\"m-description ratio-2\">\n" +
    "                            <div class=\"long-text\" aski-ellipsis=\"offer.description in .v-wrap\"></div>\n" +
    "                        </aski-box>\n" +
    "                    </div>\n" +
    "                </div>\n" +
    "            </div>\n" +
    "\n" +
    "            <div class=\"col-sm-6 col-md-8 col-xs-12\">\n" +
    "                <div class=\"row row-small-padding\">\n" +
    "                    <div class=\"col-md-3 col-md-push-0 col-sm-push-6 col-xs-6\" >\n" +
    "                        <aski-box class=\"m-type\">\n" +
    "                            <div>{{ offer.type }}</div>\n" +
    "                        </aski-box>\n" +
    "                    </div>\n" +
    "                    <div class=\"col-md-3 col-md-pull-0 col-sm-pull-6 col-xs-6\">\n" +
    "                        <aski-box class=\"m-price\">\n" +
    "                            <div>{{ offer.price | currency:undefined:0}}</div>\n" +
    "                        </aski-box>\n" +
    "                    </div>\n" +
    "                    <div class=\"col-md-3 col-md-push-3 col-sm-push-6 col-xs-6\">\n" +
    "                        <aski-box class=\"m-area\">\n" +
    "                            <div class=\"new-lines\" aski-ellipsis=\"offer.area in .v-wrap\"></div>\n" +
    "                        </aski-box>\n" +
    "                    </div>\n" +
    "                    <div class=\"col-md-3 col-md-pull-3 col-sm-pull-6 col-xs-6\">\n" +
    "                        <aski-box class=\"m-floor\">\n" +
    "                            <div>{{ offer.floor }}</div>\n" +
    "                        </aski-box>\n" +
    "                    </div>\n" +
    "                    <div class=\"col-md-6 col-xs-12 hidden-sm\">\n" +
    "                        <aski-box class=\"m-description ratio-2\">\n" +
    "                            <div class=\"long-text\" aski-ellipsis=\"offer.description in .v-wrap\"></div>\n" +
    "                        </aski-box>\n" +
    "                    </div>\n" +
    "                    <div class=\"col-md-3 col-xs-6\">\n" +
    "                        <aski-box class=\"m-extra\">\n" +
    "                            <div class=\"new-lines\" aski-ellipsis=\"offer.extra in .v-wrap\"></div>\n" +
    "                        </aski-box>\n" +
    "                    </div>\n" +
    "                    <div class=\"col-md-3 col-xs-6\">\n" +
    "                        <aski-box class=\"m-more\">\n" +
    "                            <a ng-href=\"{{ offer.more }}\">Подробнее</a>\n" +
    "                        </aski-box>\n" +
    "                    </div>\n" +
    "                </div>\n" +
    "            </div>\n" +
    "\n" +
    "        </div>\n" +
    "    </div>\n" +
    "</div>");
}]);
