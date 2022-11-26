/** Load Javascript Library */
const path = require("path");

/**
 * Components Scripts
 * */
const components = ['content'];
const getShellComponents = () => {
    let shell = {};
    components.map((c) => {
        let command = { command: `npx rollup -c assets/components/${c}/rollup.config.js` };
        shell[`rollup_component_${c}`] = command;
    });
    return shell;
};
const getWatcherComponents = () => {
    let watcher = {};
    components.map((c) => {
        let FilesTasks = {
            files: [
                `assets/components/${c}/**/*.js`,
                `assets/components/${c}/**/*.svelte`,
            ],
            tasks: [`build-component-${c}`, 'build-css']
        };
        watcher[`component_${c}`] = FilesTasks;
    });
    return watcher;
};

module.exports = function(grunt) {

    /** Configuration */
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),

        /** Compile TailwindCSS - Cross Platform */
        shell: {
            ...getShellComponents(),
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
            config: {
                files: [
                    'config.json'
                ],
                tasks: ['build']
            },
            css: {
                files: [
                    'assets/css/**/*.scss',
                    'assets/css/**/*.css',
                    'index.html'
                ],
                tasks: ['build-css']
            },
            ...getWatcherComponents(),
        },
    });

    /** Load Plugin */
    grunt.loadNpmTasks('grunt-shell');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-contrib-cssmin');

    /** Component */
    let componentsID = [];
    components.map((c) => {
        componentsID.push(`build-component-${c}`);
        grunt.registerTask(`build-component-${c}`, [ `shell:rollup_component_${c}` ]);
    });

    /** Register Tasks */
    grunt.registerTask('default', ['watch', 'shell:npm_tailwind']);
    grunt.registerTask('build-css', ['shell:npm_tailwind', 'cssmin']);
    grunt.registerTask('build-js', [ ...componentsID ]);
    grunt.registerTask('build', ['build-css', 'build-js']);

};