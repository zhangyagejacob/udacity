module.exports = function(grunt) {

  grunt.initConfig({
    responsive_images: {
      dev: {
        options: {
          sizes: [{
            name: '1x',
            width: '100%',
            quality: 33
          },{
            name: '2x',
            width: '100%',
            quality: 66
          },{
            name: '3x',
            width: '100%',
            quality: 100
          }]
        },
        files: [{
          expand: true,
          src: ['*.{gif,jpg,png}'],
          cwd: 'images/',
          dest: 'images/'
        }]
      }
    },
  });

  grunt.loadNpmTasks('grunt-responsive-images');
  grunt.registerTask('default', ['responsive_images']);

};