describe("aski-ellipsis spec", function() {
    var scope, $compile;

    var longText = "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam, " +
        "autem nobis. Accusantium asperiores at dicta distinctio eveniet incidunt " +
        "itaque iusto molestiae molestias nesciunt. Accusamus aliquam animi asperiores " +
        "assumenda beatae earum esse est eveniet excepturi exercitationem harum id iste " +
        "maiores, minus mollitia nisi numquam odit officia perferendis porro quaerat " +
        "quasi quo sequi sint sunt suscipit temporibus voluptate. Ab culpa error, fugiat " +
        "id itaque minima, provident quas quidem sapiente sequi, similique ullam veniam? " +
        "Culpa facilis non provident? Deserunt esse est illo laborum perspiciatis! Ab, ad " +
        "aliquam, animi atque eos explicabo illo laboriosam non quae quod reiciendis " +
        "repellendus sunt veniam. Omnis, quasi vitae.";

    var smallText = "Lorem ipsum dolor sit amet";

    var containerStyle = "width: 200px; height: 200px; font-size: 16px; line-height: 22px;";

    beforeEach(module('EstateAgency')); // Name of the module my directive is in

    beforeEach(inject(function(_$compile_, $rootScope) {
        scope = $rootScope.$new();
        $compile = _$compile_;
    }));

    it("must replace excessive text with ellipsis symbol if container is overflowed", inject(function ($document) {
        scope.text = longText;

        // Create an instance of the directive
        var $ctr = angular.element('<div style="' + containerStyle + '"></div>');
            $el = angular.element('<div aski-ellipsis ng-model="text">f</div>');
        $ctr.append($el);
        angular.element($document[0].body).append($ctr);
        $compile($ctr)(scope); // Compile the directive
        scope.$digest(); // Update the HTML

        //test directive
        expect($el.text().length).toBeLessThan(longText.length);
        expect($el.text().slice(-4)).toEqual('... ');
    }));
});