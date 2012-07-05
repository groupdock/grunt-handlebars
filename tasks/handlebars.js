/*
 * 
 * Task: Handlebars
 * Description: Compile handlebars templates to JST files
 * Dependencies: handlebars
 * 
 */

module.exports = function(grunt) {

  var exec = require('child_process').exec;

  grunt.registerMultiTask('handlebars', 'Precompile Handlebars template', function() {
    var self = this;
    var done = self.async();
    var templateDir = this.file.src;
    var truncateFileCmd = '> ' +this.file.dest;
    var handlebarsCmd = __dirname + '/../node_modules/.bin/handlebars -m ' + templateDir + '/*.handlebars -f ' + this.file.dest;
    exec(truncateFileCmd +' && '+ handlebarsCmd, function(err, stdout, stderr) {
      if (err) {
        grunt.fail.fatal(stderr);
      }
      done();
    });
  });
};
