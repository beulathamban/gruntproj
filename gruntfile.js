
module.exports = function(grunt) {

  grunt.initConfig({
    sass: {                              // Task
    dist: {                            // Target
      options: {                       // Target options
        style: 'expanded'
      },
      files: {                         // Dictionary of files
        'mainsass/css/main.css': 'mainsass/sass/main.scss',       // 'destination': 'source'
        
        }
      }
    },
    uglify: {
      options: {
        mangle: false
      },
      my_target: {
        files: {
          'output/uglify.js': ['js/script.js']
        }
      }
    },
    minifyHtml: {
        options: {
            cdata: true
        },
        dist: {
            files: {
                'output/index.html': 'index.html'
            }
        }
    },
    
  watch: {
    js: {
        files: ['js/script.js'],
        
      }

  },
  jshint: {
    all: ['gruntfile.js', 'js/script.js']
  }
  });

  
grunt.loadNpmTasks('grunt-contrib-sass');
grunt.loadNpmTasks('grunt-contrib-uglify');
grunt.loadNpmTasks('grunt-minify-html');
grunt.loadNpmTasks('grunt-contrib-watch');
grunt.loadNpmTasks('grunt-contrib-jshint');


grunt.registerTask('default', ['sass']);
grunt.registerTask('default', ['uglify']);
grunt.registerTask('default', ['minifyHtml']);
grunt.registerTask('default', ['watch']);
grunt.registerTask('default', ['jshint:all']);
grunt.registerTask('test',['sass'],['watch'],['jshint:all']);
};