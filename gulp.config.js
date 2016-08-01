/* jshint node: true, -W024, -W069 */

'use strict';

module.exports = function() {
	
	var assets = 'app/assets/';
	var config = {
		'rootSass'	: assets + 'styles/app.scss',
		'allSass'	: assets + 'styles/**/*.scss'
	};

	return config;
}