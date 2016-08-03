/* jshint node: true, -W024, -W040, -W098, -W126 */

'use strict';

var config = require("./gulp.config")();
var gulp = require("gulp");
var broswerSync = require("browser-sync").create();

var $ = require("gulp-load-plugins")({
	rename: {
		"gulp-sass"		: "sass",
		"gulp-util"		: "logger",
		"gulp-concat"	: "concate",
		"gulp-rename"	: "rename",
		"gulp-uglify"	: "minify"
	}
});

// Static server
gulp.task("browser-sync", function() {
    broswerSync.init({
        server: {
            baseDir: "./",
            directory : true
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

//Sass files watch
gulp.task("sass:watch", function(){
	gulp.watch(config.allSass, ["sass"])
});

//Concatenate Lib files and uglify
gulp.task("js:lib", function(){
	return gulp
			.src(config.allLib)
			.pipe($.concate("lib.js"))
			.pipe($.rename("lib.min.js"))
			.pipe(gulp.dest(config.temp));
});

//Build Task
gulp.task("run", ["sass", "js:lib", "browser-sync", "sass:watch"]);