/* jshint node: true, -W024, -W040, -W098, -W126 */

'use strict';

var config = require("./gulp.config")();
var gulp = require("gulp");
var broswerSync = require("browser-sync").create();

var $ = require("gulp-load-plugins")({
	rename: {
		"gulp-sass"		: "sass",
		"gulp-util"		: "logger"
	}
});

// Static server
gulp.task("browser-sync", function() {
    broswerSync.init({
        server: {
            baseDir: "./app"
        }
    });
});

//Sass Compile
gulp.task("sass", function(){
	$.logger.log('Compiling Sass into css');
	return gulp
			.src(config.rootSass)
			.pipe($.sass())
			.pipe(gulp.dest("app/tmp/"))
			.pipe(broswerSync.stream());
});