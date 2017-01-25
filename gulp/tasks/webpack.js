var gulp = require('gulp');
var gulpwebpack = require('gulp-webpack');
var webpacConfig = require('../../webpack.config.js');

gulp.task('webpack', function() {
    gulp.src(['./app/src/ts/**/*.ts','./app/src/ts/**/*.tsx'])
        .pipe(gulpwebpack(webpacConfig))
        .pipe(gulp.dest('./app/view/js/'));
});
