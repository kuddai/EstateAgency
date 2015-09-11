describe("aski-ellipsis", function() {
    var scope, $compile, $el, $ctr, $document, $content;

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

    beforeEach(module('EstateAgency'));

    beforeEach(inject(function(_$compile_, $rootScope, _$document_) {
        scope = $rootScope.$new();
        $compile = _$compile_;
        $document = _$document_;
    }));

    function createTestCase(el_html, scope) {
        $content = $document.find('content');
        if ($content.length === 0) {
            $content = angular.element('<content></content>');
            $document.find('body').append($content);
        }

        // Create an instance of the directive
        $ctr = angular.element('<div style="' + containerStyle + '"></div>');
        $el = angular.element(el_html);
        $ctr.append($el);
        $content.append($ctr);
        $compile($el)(scope); // Compile the directive
        scope.$digest(); // Update the HTML
        return $el;
    }

    afterEach(function() {
        //clean after each test
        $document.find('content').html('');
    });

    it("must not change text if container is not overflowed", function () {
        scope.text = smallText;
        createTestCase('<div aski-ellipsis ng-model="text"></div>', scope);

        //text must remain the same
        expect($el.text()).toEqual(smallText);
        //model mustn't be changed
        expect(scope.text).toEqual(smallText);
    });

    it("must replace excessive text with ellipsis symbol if container is overflowed", function () {
        scope.text = longText;
        createTestCase('<div aski-ellipsis ng-model="text"></div>', scope, $document);

        //must cut part of the text
        expect($el.text().length).toBeLessThan(longText.length);
        //must be ellipsis sybmol in the end
        expect($el.text()).toMatch(/.+\.{3} $/);
        //model mustn't be changed
        expect(scope.text).toEqual(longText);
    });

    it("must support custom ellipsis symbol", function () {
        scope.text = longText;
        createTestCase('<div aski-ellipsis=":)" ng-model="text"></div>', scope, $document);
        //must be :) sybmol in the end
        expect($el.text()).toMatch(/:\)$/);
    });

    it("must react on model changes", function () {
        scope.text = smallText;
        createTestCase('<div aski-ellipsis ng-model="text"></div>', scope);

        expect($el.text()).toEqual(smallText);

        scope.text = longText;
        scope.$digest();

        expect($el.text().length).toBeLessThan(longText.length);
        expect($el.text()).toMatch(/.+\.{3} $/);
        //model must reflect last changes
        expect(scope.text).toEqual(longText);
    });

    function testUpdateEvent(eventName) {
        scope.text = longText;
        $ctr.width(1000);
        $ctr.height(1000);
        //reflect container changes
        scope.$broadcast(eventName);
        expect($el.text()).toEqual(longText);
        //reverse changes
        $ctr.width(200);
        $ctr.height(200);
        scope.$broadcast(eventName);
        //it cuts long text with ellipsis to fit it into the container
        expect($el.text().length).toBeLessThan(longText.length);
        expect($el.text()).toMatch(/.+\.{3} $/);
    }

    it("must update on default update event: 'askiEllipsis::update'", function () {
        scope.text = longText;
        createTestCase('<div aski-ellipsis ng-model="text"></div>', scope);
        testUpdateEvent('askiEllipsis::update');
    });

    it("must update on custom update event", function () {
        scope.text = longText;
        // Create an instance of the directive
        createTestCase('<div aski-ellipsis ng-model="text" aski-update-on="askiResize::resize"></div>', scope);
        testUpdateEvent('askiResize::resize');
    });

    it("must update on custom update events", function () {
        eventsNames = 'askiResize::resize askiKaramba::go';
        scope.text = longText;
        createTestCase('<div aski-ellipsis ng-model="text" aski-update-on="' + eventsNames + '"></div>', scope);
        //expand container to fit long text
        testUpdateEvent('askiResize::resize');
    });
    //dfsdffdf

});