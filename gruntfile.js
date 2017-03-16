module.exports = function(grunt){

  grunt.initConfig({

    responsive_images: {
      dev: {
        options: {
          engine: 'im',
          sizes: [{
            width: 300,
            suffix: '_small',
            quality: 30
          }, {
            width: 550,
            suffix: '_medium',
            quality: 30
          }, {
            width: 800,
            suffix: '_large_1x',
            quality: 30
          }, {
            width: 1600,
            suffix: '_large_2x',
            quality: 30
          }]
        },
        files: [{
          expand: true,
          src: ['*.{gif,jpg,png}'],
          cwd: 'images_src/',
          dest: 'images/'
        }]
      }
    },

    clean: {
      dev: {
        src: ['images'],
      },
    },

    mkdir: {
      dev: {
        options: {
          create: ['images']
        },
      },
    },

  });

  grunt.loadNpmTasks('grunt-responsive-images');
  grunt.loadNpmTasks('grunt-contrib-clean');
  grunt.loadNpmTasks('grunt-mkdir');
  grunt.registerTask('default', ['clean', 'mkdir', 'responsive_images']);

}
