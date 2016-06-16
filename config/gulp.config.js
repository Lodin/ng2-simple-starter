var path = require('path');
var gulp = require('gulp');
var map = require('gulp-flatmap');
var inline = require('gulp-inline-ng2-template');

gulp.task('inline', function() {
  gulp.src(['dist/**/*.js', '!dist/vendor/**/*.js'])
    .pipe(map(function(stream, file) {
      return stream.pipe(inline({
        base: path.relative(process.cwd(), path.dirname(file.path)),
        target: 'es5',
        indent: 0,
        removeLineBreaks: true
      })).pipe(gulp.dest('dist'));
    }));
});
