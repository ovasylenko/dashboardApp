module.exports = function (grunt) {
	grunt.registerTask('compileAssets', [
		'clean:dev',
		'html2js:dev',
		'compass:dev',
		'copy:dev',
		'coffee:dev'
	]);
};
