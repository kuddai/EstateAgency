/**
 * Created by kuddai on 25.06.2015.
 */
module.exports = function(grunt) {

    // Project configuration.
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        html2js:{
            main: {
                src: ['app/js/directives/*.html'],
                dest: 'app/js/directives/templates.js'
            }
        }
    });

    // Load the plugin that provides the "uglify" task.
    grunt.loadNpmTasks('grunt-html2js');

    // Default task(s).
    grunt.registerTask('test', ['html2js']);

};
