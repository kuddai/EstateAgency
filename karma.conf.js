module.exports = function(config){
  config.set({

    basePath : './',

    files : [
        'app/bower_components/jquery/dist/jquery.min.js',
        'app/bower_components/angular/angular.js',
        'app/bower_components/angular-route/angular-route.js',
        'app/bower_components/angular-mocks/angular-mocks.js',
        'app/bower_components/angular-animate/angular-animate.js',
        'app/bower_components/ng-debounce/angular-debounce.js',
        'app/bower_components/jQuery.dotdotdot/src/js/jquery.dotdotdot.min.js',
        'app/js/**/*.js',
        'app/js/app.js',
        'app/partials/templates/*.html',
        'app/tests/specs/*.js'
    ],

    autoWatch : true,

    frameworks: ['jasmine'],

    browsers : ['Chrome'],

    preprocessors: {
      'app/partials/templates/*.html':['ng-html2js']
    },

    plugins : [
            'karma-chrome-launcher',
            'karma-firefox-launcher',
            'karma-jasmine',
            'karma-junit-reporter',
            'karma-ng-html2js-preprocessor'

            ],

    junitReporter : {
      outputFile: 'app/tests/test_out/specs.xml',
      suite: 'unit'
    }

  });
};
