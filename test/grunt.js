module.exports = function(grunt) {

  grunt.initConfig({

    handlebars: {
      all: {
        src: 'fixtures',
        dest: 'fixtures/output/templates.js'
        //amd:true
      }
    }
  });

  grunt.loadTasks("../tasks");

};
