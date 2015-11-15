'use strict';

module.exports = function(grunt) {

    // Time how long tasks take. Can help when optimizing build times
    require('time-grunt')(grunt);

    // Load grunt tasks automatically
    require('load-grunt-tasks')(grunt);

    // Define the configuration for all the tasks
    grunt.initConfig({

        clean: ['.tmp', 'dist'],

        jshint: {
            options: {
                jshintrc: '.jshintrc',
            },
            all: ['app/scripts/**/*.js']
        },

        watch: {

            js: {
                files: ['app/scripts/**/*.js'],
                tasks: ['jshint']
            },

            livereload: {
                options: {
                    livereload: 35729
                },
                files: [
                    'app/*.html',
                    'app/**/*.js',
                    'app/**/*.css'
                ]
            }
        },

        useminPrepare: {
            options: {
                dest: 'dist',
            },
            html: ['app/*.html']
        },

        usemin: {
            html: ['dist/**/*.html']
        },

        copy: {
            main: {
                files: [{
                    expand: true,
                    cwd: 'app',
                    src: [
                        '**/*',
                        '!vendor/**/*',
                        '!scripts/**/*'
                    ],
                    dest: 'dist/'
                }]
            },
            bootstrap: {
                files: [{
                    expand: true,
                    // cwd: 'bower',
                    src: [
                        'bower_components/bootstrap/dist/css/bootstrap.css',
                        'bower_components/bootstrap/dist/fonts/*',
                    ],
                    dest: 'dist/'
                }]
            }
        },

        // The actual grunt server settings
        connect: {

            options: {
                port: 9000,
                livereload: 35729,
                keepalive: true,
                open: true,
                // Change this to '0.0.0.0' to access the server from outside
                hostname: 'localhost'
            },

            livereload: {
                options: {
                    keepalive: false,
                    base: ['app']
                }
            },

            dist: {
                options: {
                    base: ['dist']
                }
            }

        }

    });

    grunt.registerTask('serve', 'start the server and preview your app', ['connect:livereload', 'watch']);

    grunt.registerTask('serve:dist', 'start the server and preview your app', ['build', 'connect:dist']);

    grunt.registerTask('build', [
        'clean',
        'jshint',
        'useminPrepare',
        'concat:generated',
        'uglify',
        'copy:main',
        'copy:bootstrap',
        'usemin'
    ]);

    grunt.registerTask('default', ['build']);

};
