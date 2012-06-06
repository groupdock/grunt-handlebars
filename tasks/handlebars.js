/*
 * 
 * Task: Handlebars
 * Description: Compile handlebars templates to JST files
 * Dependencies: handlebars
 * 
 */

module.exports = function(grunt) {

  var FFI = require("node-ffi");

  grunt.registerMultiTask('handlebars', 'Precompile Handlebars template', function() {
    var self = this;
    var templateDir = this.file.src;

    var libc = new FFI.Library(null, {
      "system": ["int32", ["string"]]
    });

    var run = libc.system;

    var handlebarsCmd = __dirname + '../node_modules/.bin/handlebars -m ' + templateDir + '/*.handlebars -f ' + this.file.dest;
    run(handlebarsCmd);
  });
};
