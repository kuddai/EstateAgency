/**
 * Created by kuddai on 26.05.2015.
 */
describe('directive: ask-ellipsis', function() {
    var element, scope;

    beforeEach(module('app'));

    beforeEach(inject(function($rootScope, $compile) {
        scope = $rootScope.$new();

        element =
            '<svg-circle size="{{size}}" stroke="black" fill="blue"></svg-circle>';

        scope.size = 100;

        element = $compile(element)(scope);
        scope.$digest();
    }));
});