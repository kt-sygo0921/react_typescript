var gulp = require('gulp');
var del = require('del');

var deleteFolder = [
    './app/view/css',
    './app/view/html',
    './app/view/js'
];

gulp.task('clean', function() {
    del(deleteFolder);
});
