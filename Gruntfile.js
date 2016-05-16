module.exports = function(grunt) {
	'use strict';
	var gruntConfig = {
		pkg: grunt.file.readJSON('package.json'),
		cssmin: {
			dist: {
				src: ['styles.css'],
				dest: 'styles.min.css'
			}
		},
		rsync: {
			dist: {
				src: './',
				dest: './dist',
				recursive: true,
				syncDest: true,
				exclude: ['main.*']
			},
			// deploy: {
				// src: './dist/',
				// dest: '',
				// host: '',
				// recursive: true,
				// syncDest: true
			// }
		}
	};
	grunt.initConfig(gruntConfig);

	var keys = Object.keys(gruntConfig);
	var tasks = [];

	for(var i = 1, l = keys.length; i < l; i++) {
		tasks.push(keys[i]);
	}

	grunt.loadNpmTasks('grunt-yui-compressor');
	grunt.loadNpmTasks('grunt-rsync');
	grunt.registerTask('default', tasks);
};