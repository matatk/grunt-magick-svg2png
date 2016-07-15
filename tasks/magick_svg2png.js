/*
 * grunt-magick-svg2png
 * https://github.com/mtatpg/grunt-magick-svg2png
 *
 * Copyright (c) 2016 Matthew Tylee Atkinson
 * Licensed under the MIT license.
 */

'use strict';

module.exports = function(grunt) {

	// Please see the Grunt documentation for more information regarding task
	// creation: http://gruntjs.com/creating-tasks

	grunt.registerMultiTask('magick_svg2png', 'Convert SVGs to PNGs via ImageMagick.', function() {
		// Merge task-specific and/or target-specific options with these defaults.
		var options = this.options({
			punctuation: '.',
			separator: ', '
		});

		// vars
		const path = require('path');
		const widths = this.data.options.widths;
		let conversionsDone = 0;

		// Iterate over all specified file groups.
		this.files.forEach(function(f) {
			f.src.filter(function(filepath) {
				widths.forEach(function(width) {
					// Assume filename ends in '.svg'
					const baseFileName = path.basename(filepath).slice(0, -4);
					const options = {
						cmd: 'convert',
						stdio: 'inherit',
						args: [
							'-background',
							'transparent',
							'-resize',
							width + 'x' + width,
							filepath,
							f.dest + baseFileName + '-' + width + '.png'
						]
					};

					grunt.verbose.writeln('Conversion task:', options);

					grunt.util.spawn(options, function(error, result, code) {
						if (error) {
							grunt.log.error('convert exit code:', code);
							throw(error);
						} else {
							conversionsDone += 1;
							grunt.verbose.writeln(conversionsDone,
									'SVG to PNG conversions complete.');
						}
					});
				});
			});
		});
	});

};
