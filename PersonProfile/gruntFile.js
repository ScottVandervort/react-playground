module.exports = function(grunt) {
               
    grunt.initConfig({

      copy: {
        main: {
          files: [
            //{expand: false, src: ['node_modules/bootstrap/dist/css/bootstrap.min.css'], dest: './src/css/bootstrap.min.css'},                        
          ]
        }
  },    
    });  
  
    grunt.loadNpmTasks('grunt-contrib-copy');  

    grunt.registerTask('copy-dependencies', '', function() {  
        grunt.task.run(['copy']);
    });  
  
  };