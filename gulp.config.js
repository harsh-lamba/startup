/* jshint node: true, -W024, -W069 */

'use strict';

module.exports = function() {
	
	var root 		= "./";
	var app 		= root + "app/";
	var bowerFiles 	= root + "bower_components/"
	var assets 		= 'app/assets/';

	var config 		= {
		'rootSass'	: assets + 'styles/app.scss',
		'allSass'	: assets + 'styles/**/*.scss',
		'allLib' 	: [
						//bowerFiles + "jquery/dist/jquery.min.js",
						bowerFiles + "bootstrap-sass/assets/javascripts/bootstrap.min.js"
					  ],
		"allApp"	: [
						app + "jquery/dist/jquery.min.js"
					  ],
		"temp"		: app + "tmp"
	};

	return config;
}