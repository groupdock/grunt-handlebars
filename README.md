# grunt-handlebars

Grunt task for precompiling Handlebars template.

## Getting Started

Install this grunt plugin next to your project's [grunt.js gruntfile][getting_started] with: `npm install grunt-handlebars`

Then add this line to your project's `grunt.js` gruntfile:

```javascript
grunt.loadNpmTasks('grunt-handlebars');
```

[grunt]: https://github.com/cowboy/grunt
[getting_started]: https://github.com/cowboy/grunt/blob/master/docs/getting_started.md


## Usage

```
// Project configuration.
grunt.initConfig({
  handlebars: {
    all: {
      src: 'templates',
      dest: 'js/templates.js'
    }
  }
});
``` 
Note: src should point to the templates directory which contains the *.handlebars files.

## Release History

* July 30, 2012 - 0.0.6 Revert to handlebars 1.0.5beta
* July 30, 2012 - 0.0.5 Works on node 0.8, task failure on cmd failure, updated handlebars
* June 14, 2012 - 0.0.4 Fix task by making it asynchronous
* June 14, 2012 - 0.0.3 Bug Fix + removed dependency on node-ffi
* May 30, 2012 - 0.0.2 Minor fixes
* May 29, 2012 - 0.0.1 First release

## License

Copyright (c) 2012 - Intellum Inc.
Licensed under the MIT License
http://intellum.com
