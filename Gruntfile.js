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
    });

    /** Load Plugin */
    grunt.loadNpmTasks('grunt-shell');

    /** Register Tasks */
    grunt.registerTask('default', ['watch', 'shell:npm_tailwind']);
    grunt.registerTask('build', ['shell:npm_tailwind']);

};