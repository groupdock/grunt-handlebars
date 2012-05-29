var assert = require('assert'),
    grunt = require('grunt'),
    path = require('path'),
    fs = require('fs'),
    Handlebars = require('handlebars');


describe('Handlebars', function() {

  beforeEach(function(done) {
    if (!path.existsSync("test/fixtures/output")) {
      fs.mkdirSync("test/fixtures/output");
    }
    grunt.utils.spawn({
      cmd: "grunt",
      args: ["--config", "test/grunt.js", "handlebars"]
    }, function(err, result) {
      //if (err !== null) {
        console.log(result.stderr);
        console.log(result.stdout);
      //}
      done();
    });
  });

  it('should compile templates in src', function(done) {
    var expect = 'test';
    assert.ok(Handlebars);
    eval(grunt.file.read('test/fixtures/output/templates.js'));
    assert.ok(this.JST);
    assert.ok(this.JST.nav);
    assert.ok(this.JST.header);
    console.log(Handlebars.templates);
    var navHtml = Handlebars.templates.header({title: 'test', items: ['Home', 'About']});
    assert.equal(navHtml, 'test');
    done();
  });

});
