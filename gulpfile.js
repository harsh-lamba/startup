/* jshint node: true, -W024, -W040, -W098, -W126 */

'use strict';

var config = require('./gulp.config')();
var gulp = require('gulp');
var sass = require('gulp-sass');
var broswerSync = require('browser-sync').create();
var gutil = require('gulp-util');

// Static server
gulp.task('browser-sync', function() {
    browserSync.init({
        server: {
            baseDir: "./"
        }
    });
});

//Sass Compile
gulp.task('sass', function(){
	gutil.log(config.rootSass);
	return gulp
			.src(config.rootSass)
			.pipe(sass())
			.pipe(gulp.dest('app/tmp/'))
			.pipe(browserSync.stream());
});