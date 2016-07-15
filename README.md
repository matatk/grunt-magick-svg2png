# grunt-magick-svg2png

> Convert SVGs to PNGs via ImageMagick.

**Help wanted:** I wrote this as I could not find any other means to take a single SVG and generate several differently-sized PNGs directly from it (I tried several other Grunt plugins but for various reasons did not meet with success). I'm not an expert at creating Grunt plugins and, so far alas, it does not have tests (eek). This is why I've not published it officially for NPM (though it can be installed by using the URL of this Git repo). If you have the cycles to 'level up' this plugin such that it *could* be published, patches would be most welcome.

**Warning:** As a result of this being mainly for my own use and currently not having tests and all those good things it should have, I probably won't have time to work on any significant issues. If you can help out, please do.

## Getting Started
This plugin requires Grunt `~1.0`

If you haven't used [Grunt](http://gruntjs.com/) before, be sure to check out the [Getting Started](http://gruntjs.com/getting-started) guide, as it explains how to create a [Gruntfile](http://gruntjs.com/sample-gruntfile) as well as install and use Grunt plugins. Once you're familiar with that process, you may install this plugin with this command:

```shell
npm install grunt-magick-svg2png --save-dev
```

Once the plugin has been installed, it may be enabled inside your Gruntfile with this line of JavaScript:

```js
grunt.loadNpmTasks('grunt-magick-svg2png');
```

## The "magick_svg2png" task

### Overview
In your project's Gruntfile, add a section named `magick_svg2png` to the data object passed into `grunt.initConfig()`.

```js
grunt.initConfig({
  magick_svg2png: {
    options: {
      // Task-specific options go here.
    },
    your_target: {
      // Target-specific file lists and/or options go here.
    },
  },
});
```

### Options

#### options.separator
Type: `String`
Default value: `',  '`

A string value that is used to do something with whatever.

#### options.punctuation
Type: `String`
Default value: `'.'`

A string value that is used to do something else with whatever else.

### Usage Examples

#### Default Options
In this example, the default options are used to do something with whatever. So if the `testing` file has the content `Testing` and the `123` file had the content `1 2 3`, the generated result would be `Testing, 1 2 3.`

```js
grunt.initConfig({
  magick_svg2png: {
    options: {},
    files: {
      'dest/default_options': ['src/testing', 'src/123'],
    },
  },
});
```

#### Custom Options
In this example, custom options are used to do something else with whatever else. So if the `testing` file has the content `Testing` and the `123` file had the content `1 2 3`, the generated result in this case would be `Testing: 1 2 3 !!!`

```js
grunt.initConfig({
  magick_svg2png: {
    options: {
      separator: ': ',
      punctuation: ' !!!',
    },
    files: {
      'dest/default_options': ['src/testing', 'src/123'],
    },
  },
});
```

## Contributing
In lieu of a formal styleguide, take care to maintain the existing coding style. Add unit tests for any new or changed functionality. Lint and test your code using [Grunt](http://gruntjs.com/).

## Release History
* 0.0.0 - 2016-07-15 - Initial
