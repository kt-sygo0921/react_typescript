var gulp = require('gulp'),
    runSequence = require('run-sequence');

gulp.task('build', ['clean'], function() {
    runSequence('sass', 'css', 'ejs','webpack');
});
