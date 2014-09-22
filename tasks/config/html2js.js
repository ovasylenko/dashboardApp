/**
 * HTML2JS is a Grunt plugin that takes all of your template files and
 * places them into JavaScript files as strings that are added to
 * AngularJS's template cache. This means that the templates too become
 * part of the initial payload as one JavaScript file. Neat!
 */

module.exports = function(grunt) {

	grunt.config.set('html2js', {
		dev: {
			options: {
				base: 'assets/src/modules',
				module: 'dashboardApp.templates'
			},
			files: {
				'.tmp/public/templates.js':  require('../pipeline').templateFilesToInject
			}
		}
	});

	grunt.loadNpmTasks('grunt-html2js');
};