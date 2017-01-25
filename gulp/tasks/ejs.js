var gulp = require('gulp');
var ejs = require('gulp-ejs');
var cache = require('gulp-cached');

gulp.task('ejs', function() {
    return gulp.src(['./app/src/ejs/**/*.ejs', '!' + './app/src/ejs/**/_*.ejs'], { base: './app/src/ejs/' })
        .pipe(cache())
        .pipe(ejs())
        .pipe(gulp.dest('./app/view/html/'));
});