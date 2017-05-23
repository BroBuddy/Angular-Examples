'use strict';

module.exports = function (grunt) {

    grunt.initConfig({
        uglify: {
            dist: {
                files: [{
                    expand: true,
                    cwd: 'app/assets/js',
                    src: ['*.js', '{,*/}*.js'],
                    dest: 'dist/assets/js'
                }]
            }
        },
        htmlmin: {
            dist: {
                files: [{
                    expand: true,
                    cwd: 'app',
                    src: ['*.html', '{,*/}*.html'],
                    dest: 'dist'
                }]
            }
        },
        cssmin: {
            target: {
                files: [{
                    expand: true,
                    cwd: 'app/assets/css',
                    src: ['*.css', '!*.min.css'],
                    dest: 'dist/assets/css'
                }]
            }
        },
        imagemin: {
            dist: {
                files: [{
                    expand: true,
                    cwd: 'app/img',
                    src: '{,*/}*.{png,jpg,jpeg,gif}',
                    dest: 'dist'
                }]
            }
        },
        sass: {
            dist: {
                files: [{
                    expand: true,
                    cwd: 'app/assets/sass',
                    src: ['*.sass'],
                    dest: 'dist/assets/css',
                    ext: '.css'
                }]
            }
        }
    });

    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-htmlmin');
    grunt.loadNpmTasks('grunt-contrib-sass');
    grunt.loadNpmTasks('grunt-contrib-cssmin');
    grunt.loadNpmTasks('grunt-contrib-imagemin');

    grunt.registerTask('default', ['uglify', 'htmlmin', 'sass', 'cssmin', 'imagemin']);

};