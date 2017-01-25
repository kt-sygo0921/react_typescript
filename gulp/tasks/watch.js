var gulp        = require('gulp'),
    browserSync = require('browser-sync'),
    runSequence = require('run-sequence'),
    minimist    = require('minimist'),
    watch       = require('gulp-watch');

    // arguments
    // gulp --port xxxx で渡されたポート番号をbrowser syncに渡す
    const args = minimist(process.argv);

// sassコンパイル時にタスクを同期処理にするとcompassが変更を認識しなくなるためrunsequenceで非同期処理に変更
gulp.task('watch', ['server'], function() {
    watch(['./app/**/*.scss'], function() {
        runSequence('sass', browserSync.reload);
    });
    watch(['./app/**/*.ejs'], function () {
        runSequence('ejs', browserSync.reload);
    });
    watch(['./app/**/*.ts','./app/**/*.tsx'], function () {
        runSequence('webpack', browserSync.reload);
    });
});

gulp.task('server', function(){
    browserSync({
        server: {
            baseDir: './app',
            directory: true
        },
        port:args.port || 3000
    });
});
