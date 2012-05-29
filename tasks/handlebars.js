/*
 * 
 * Task: Handlebars
 * Description: Compile handlebars templates to JST files
 * Dependencies: handlebars
 * 
 */

module.exports = function(grunt) {

  // External libs
  var handlebars = require('handlebars');
  var fs = require('fs');
  var path = require('path');

  grunt.registerMultiTask('handlebars', 'Precompile Handlebars template', function() {
    var namespace = "JST";

    var files = grunt.file.expandFiles(this.file.src);

    // Get banner, if specified. It would be nice if UglifyJS supported ignoring
    // all comments matching a certain pattern, like /*!...*/, but it doesn't.
    var banner = grunt.task.directive(files[0], function() { return null; });
    if (banner === null) {
      banner = '';
    } else {
      files.shift();
    }

    var compiled = grunt.helper('handlebars', files, namespace);
    var result = banner + compiled;

    grunt.file.write(this.file.dest, result);

    // Fail task if errors were logged.
    if (this.errorCount) {
      return false;
    }
    // Otherwise, print a success message
    grunt.log.writeln('File "' + this.file.dest + '" created.');
  });

  grunt.registerHelper("handlebars", function(files, namespace) {
    namespace = "this['" + namespace + "']";

    // Comes out looking like this["JST"] = this["JST"] || {};
    var contents = [namespace + " = " + namespace + " || {};"];

    files.forEach(function(file) {
      var filename = path.basename(file);
      var templateName = filename.split('.')[0];
      var fileData = fs.readFileSync(file, 'utf-8');
      var templateFunction = handlebars.precompile(fileData).toString();
      var str = namespace + "['" + templateName + "'] = " + templateFunction;
      contents.push(str);
    });
    return contents.join('\n\n');
  });

};
