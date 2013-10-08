module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    
    folders: {
      less: './less/',
      css: './css/'
    },

    // COMPILES THE CSS
    less: {
      dev: {
        files: {
          '<%= folders.css %><%= pkg.name %>.css':['<%= folders.less %><%= pkg.name %>.less']
        }
      },

      // COMPILES THE MINIFIED CSS
      dist: {
        options: {
          yuicompress: true
        },
        files: {
          '<%= folders.css %><%= pkg.name %>.min.css':['<%= folders.less %><%= pkg.name %>.less']
        }
      }
    },

    watch: {
      scripts: {
        files: ['less/**/*.less'],
        tasks: ['less'],
        options: {
          spawn: false,
        },
      },
    }

  });

  grunt.loadNpmTasks('grunt-contrib-less');
  grunt.loadNpmTasks('grunt-contrib-watch');

  grunt.registerTask('default', ['less']);
  
};
