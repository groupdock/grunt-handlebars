var assert = require('assert'),
    grunt = require('grunt'),
    path = require('path'),
    fs = require('fs');

describe('Handlebars', function() {
  var existsSync = fs.existsSync || path.existsSync
  beforeEach(function(done) {
    if (!existsSync("test/fixtures/output")) {
      fs.mkdirSync("test/fixtures/output");
    }
    if (existsSync("test/fixtures/output/templates.js")) {
      fs.unlinkSync("test/fixtures/output/templates.js");
    }
    grunt.utils.spawn({
      cmd: "grunt",
      args: ["--config", "test/grunt.js", "handlebars"]
    }, function(err, result) {
      assert.ifError(err);
      console.log(result.stderr);
      console.log(result.stdout);
      done();
    });
  });

  it('should compile templates in src', function(done) {
    var jsdom = require('jsdom');
    var handlebarsJS = fs.readFileSync('./test/fixtures/handlebars.runtime.js').toString();
    var templatesJS = fs.readFileSync('./test/fixtures/output/templates.js').toString();
    jsdom.env({
      html: 'http://news.ycombinator.com',
      src: [handlebarsJS, templatesJS],
      done: function(err, window) {
        assert.ifError(err);
        assert.ok(window.Handlebars);
        assert.ok(window.Handlebars.templates);
        assert.ok(window.Handlebars.templates.header);
        assert.ok(window.Handlebars.templates.nav);
        assert.equal(window.Handlebars.templates.header({title: 'My Title'}), '<h1>My Title</h1>\n');
        assert.equal(window.Handlebars.templates.nav({items: ['Home', 'Auto']}), '<ul>\n \n  <li>Home</li>\n  \n  <li>Auto</li>\n  \n</ul>\n');
        done();
      }
    });
  });
});
