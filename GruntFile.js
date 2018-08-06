/**
 * Created by Pete Markiewicz on 5.16.2016.
 * More complex example at: 
 * https://css-tricks.com/forums/topic/grunt-browserify-uglify-newer/
 */

module.exports = function (grunt) {

    grunt.initConfig({
        sass: {
            options: {
            sourceMap: true
            },
            dist: {
                files: {
                    './dist/public/css/styles.css' : './modules/scss/*.scss'
                }
            }
        },
        browserify:{
            dist:{
                options:{
                    transform:[['babelify',{"presets": ["es2015"]}]],
                    browserifyOptions: {
         				debug: true
      				}
                },
                files: {
                    './dist/public/js/app.js':['./modules/js/index.js']
                }
            }
        },
        watch:{
            scripts:{
                files:['./modules/js/*.js'],
                tasks:['browserify']
            },
            sass: {
                files: ['./modules/scss/*.scss'],
                tasks: ['sass']
            },
        }
    });
    
    grunt.loadNpmTasks('grunt-sass');

    grunt.loadNpmTasks('grunt-browserify');
    grunt.loadNpmTasks('grunt-contrib-watch');

    grunt.registerTask('default',["watch"]);
    grunt.registerTask('build',["browserify", 'sass']);
};

