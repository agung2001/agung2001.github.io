module.exports = function(grunt) {

    /** Configuration */
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),

        /** Compile TailwindCSS - Cross Platform */
        shell: {
            npm_tailwind: { command:
                `npx tailwindcss build assets/css/tailwind/style.css -o assets/build/css/tailwind.min.css --silent && ` +
                `node tailwindcsssupport.js`
            }
        },

        /** CSS Minify */
        cssmin: {
            options: {
                mergeIntoShorthands: false,
                roundingPrecision: -1
            },
            target: {
                files: {
                    "assets/build/css/tailwind.min.css" : "assets/build/css/tailwind.min.css"
                }
            }
        },

        /** Configure watch task */
        watch: {
            css: {
                files: [
                    'assets/css/**/*.scss',
                    'assets/css/**/*.css',
                    'src/View/**/*.php'
                ],
                tasks: ['build-css']
            },
        },
    });

    /** Load Plugin */
    grunt.loadNpmTasks('grunt-shell');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-contrib-cssmin');

    /** Register Tasks */
    grunt.registerTask('default', ['watch', 'shell:npm_tailwind']);
    grunt.registerTask('build-css', ['shell:npm_tailwind', 'cssmin']);
    grunt.registerTask('build', ['build-css']);

};