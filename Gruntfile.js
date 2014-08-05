"use strict";

module.exports = function( grunt ){
	//load all tasks
	require("matchdep").filterDev("grunt-*").forEach(grunt.loadNpmTasks);

	grunt.initConfig({
	   pkg: grunt.file.readJSON('package.json'),
	  
	   uglify: {
	      options: {
	         mangle: false
	      },

	      my_target: {
	         files: [{
	            expand: true,
	            cwd: 'js/',
	            src: '**/*.js',
	            dest: 'js/',
	            ext: '.min.js'
	         }]
	      }
	   },

	   watch: {
			css: {
				files: [ 'css/**/*' ],
				tasks: [ 'sass' ]
			},
			js: {
				files: 'js/**/*',
				tasks: [ 'uglify' ]
			}
		},

	   cssmin: {
	   	minify: {
	   		expand:true,
	   		cwd: 'css/',
	   		src: ['*.css'],
	   		dest: 'css/',
	   		ext: '.min.css'
	   	}
	   },


	   concat: {
	      basic: {
	         src: ['css/*.min.css'],
	         dest: 'css/main.css'
	      }
	   },


	    sass: {                                    // task
	        dist: {                                // target
	            files: {                        // dictionary of files
	                'css/style.min.css': 'css/style.scss'
	            }
	        },
	        dev: {                                // another target
	            options: {                        // dictionary of render options
	                sourceMap: true
	            },
	            files: {
	                'css/style.css': 'css/style.scss',
	            }
	        }
	    },

	   imagemin: {
	      png: {
	         options: {
	            optimizationLevel: 1
	         },
	         files: [{
	            expand: true,
	            cwd: 'img/',
	            src: ['**/*.png'],
	            dest: 'img/'
	         }]
	      },
	      jpg: {
	         options: {
	            progressive: true
	         },
	         files: [{
	            expand: true,
	            cwd: 'img/',
	            src: ['**/*.jpg'],
	            dest: 'img/'
	         }]
	      }
	   }
	});

	grunt.loadNpmTasks('grunt-contrib-uglify');
   grunt.loadNpmTasks('grunt-contribu-watch');
   grunt.loadNpmTasks('grunt-contrib-cssmin');
   grunt.loadNpmTasks('grunt-contrib-concat');
   grunt.loadNpmTasks('grunt-contrib-imagemin');
   grunt.loadNpmTasks('grunt-sass');
	grunt.registerTask( 'default', [ 'uglify', 'watch', 'cssmin', 'concat', 'sass', 'imagemin' ] );
}