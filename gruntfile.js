module.exports = function(grunt){

  grunt.initConfig({
    //create faster-loading images from images_src directory
    responsive_images: {
      dev: {
        options: {
          engine: 'im',
          sizes: [{
            width: 300,
            height: 300,
            suffix: '_small',
            quality: 30
          }, {
            width: 450,
            height: 450,
            suffix: '_medium',
            quality: 30
          }, {
            width: 600,
            height: 600,
            suffix: '_med-large',
            quality: 30
          }, {
            width: 800,
            height: 800,
            suffix: '_large_1x',
            quality: 30
          }, {
            width: 1600,
            height: 1600,
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

    //clean out outdated images directory
    clean: {
      dev: {
        src: ['images'],
      },
    },

    //make new images directory
    mkdir: {
      dev: {
        options: {
          create: ['images']
        },
      },
    },

  });

  //load tasks
  grunt.loadNpmTasks('grunt-responsive-images');
  grunt.loadNpmTasks('grunt-contrib-clean');
  grunt.loadNpmTasks('grunt-mkdir');

  //execute tasks
  grunt.registerTask('default', ['clean', 'mkdir', 'responsive_images']);

}
