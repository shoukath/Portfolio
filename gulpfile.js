var gulp = require('./gulptasks')([
        'css',
        'babel',
        'minify-html'
    ]);
var clean = require('gulp-clean');
var livereload = require('gulp-livereload');

gulp.task('watch', function () {
    livereload.listen();
    gulp.watch('src/*.css', ['css']);
    gulp.watch('src/*.js', ['babel']);
    gulp.watch('src/*.html', ['minify-html']);
});

gulp.task('clean', function () {
    return gulp.src('dist/', {read: false})
        .pipe(clean());
});

gulp.task('default', ['babel', 'css', 'minify-html', 'watch']);

