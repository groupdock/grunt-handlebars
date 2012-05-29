# grunt-handlebars

Grunt task for precompiling Handlebars template.

## Getting Started

Install this grunt plugin next to your project's [grunt.js gruntfile][getting_started] with: `npm install grunt-contrib`

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

* May 29, 2012 - First release 0.0.1

## License

Copyright (c) 2012 - Intellum Inc.
Licensed under the MIT License
http://intellum.com
