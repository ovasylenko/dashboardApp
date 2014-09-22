module.exports = function(grunt) {

	grunt.config.set('compass', {
		dev: {
			options: {
				cssDir: '.tmp/public/styles/',
				sassDir: 'assets/scss/',
				imagesDir: 'assets/images/',
				httpGeneratedImagesPath:'/images',
				outputStyle: 'expanded'
			}
		}
	});
	
	grunt.loadNpmTasks('grunt-contrib-sass');
	grunt.loadNpmTasks('grunt-contrib-compass');
}
