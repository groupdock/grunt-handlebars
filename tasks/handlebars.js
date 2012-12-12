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

    // Check on which platform node is running.
    var finalCmd;
    if (process.platform == "win32") {
      // win32 cmd doesn't know what "&&" is and is also not able to use wildcards
      // anyway this will match all the files in the template dir anyway.
      finalCmd =  '"'+__dirname + '/../node_modules/.bin/handlebars" -m ' + templateDir + '/ -f ' + this.file.dest;
    } else {
      // others platform, set to the default command
      finalCmd = truncateFileCmd +' && '+ handlebarsCmd;
    }
    // Check if we want to build it AMD style
    var amdSuffix='';
    if ("undefined" !== typeof this.data.amd && this.data.amd) {
      amdSuffix=' -a';
    }

    // Update finalCmd
    finalCmd += amdSuffix;

    exec(finalCmd, function(err, stdout, stderr) {
      if (err) {
        grunt.fail.fatal(stderr);
      } 
      done();
    });
  });
};
