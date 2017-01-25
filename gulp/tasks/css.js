var gulp = require('gulp');
var csscomb = require('gulp-csscomb');
var notify = require('gulp-notify');
var plumber = require('gulp-plumber');
var postcss = require('gulp-postcss');
var autoprefixer = require('autoprefixer');

gulp.task('css', function() {
    var processors = [
        autoprefixer({
            browsers: ['last 2 version', 'ie 9']
        })
    ];

    return gulp.src('./app/release/**/*.css', { base: './app' })
        .pipe(plumber({
            errorHandler: notify.onError('<%= error.message %>')
        }))
        .pipe(postcss(processors))
        .pipe(csscomb())
        .pipe(gulp.dest('./app'));
});
