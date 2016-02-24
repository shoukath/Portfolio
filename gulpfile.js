var gulp = require('./gulptasks')([
        'css',
        'babel',
        'minify-html'
    ]);
var clean = require('gulp-clean');

gulp.task('stream', function () {
    return gulp.src('src/**/*.css')
        .pipe(watch('src/**/*.css'))
        .pipe(gulp.task('css'));
});

gulp.task('clean', function () {
    return gulp.src('dist/', {read: false})
        .pipe(clean());
});

gulp.task('default', ['babel', 'css', 'minify-html']);

