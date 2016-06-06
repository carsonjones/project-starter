var gulp = require('gulp'),
		watch = require('gulp-watch'),
		nodemon = require('gulp-nodemon');

gulp.task('start', function () {
	nodemon({
		script: 'index.js'
	})
});

gulp.task('default', ['start']);
