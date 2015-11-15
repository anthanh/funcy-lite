'use strict';

module.exports = function(grunt) {

    // Time how long tasks take. Can help when optimizing build times
    require('time-grunt')(grunt);

    // Load grunt tasks automatically
    require('load-grunt-tasks')(grunt);

    // Define the configuration for all the tasks
    grunt.initConfig({

        // The actual grunt server settings
        connect: {

            options: {
                port: 9000,
                livereload: 35729,
                keepalive: true,
                // Change this to '0.0.0.0' to access the server from outside
                hostname: 'localhost'
            },

            livereload: {
                options: {
                    base: ['app']
                }
            }

        }

    });

    grunt.registerTask('serve', 'start the server and preview your app', ['connect:livereload']);

};
