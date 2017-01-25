var gulp = require('gulp');
var sass = require('gulp-sass');

gulp.task('sass', function() {
    return gulp.src(['./app/src/sass/**/*.scss'], { base: './app/src/sass/' })
        .pipe(sass({ outputStyle: 'expanded' }))
        .pipe(gulp.dest('./app/view/css/'))
});
