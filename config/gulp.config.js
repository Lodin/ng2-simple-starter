var gulp = require('gulp');
var inline = require('gulp-inline-ng2-template');

gulp.task('inline', function() {
  gulp.src(['dist/**/*.js', '!dist/vendor/**/*.js'])
    .pipe(inline({
      useRelativePaths: true,
      target: 'es5',
      indent: 0,
      removeLineBreaks: true
    }))
    .pipe(gulp.dest('dist'));
});
