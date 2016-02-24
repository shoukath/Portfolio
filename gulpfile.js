var gulp = require('./gulptasks')([
        'css',
        'babel',
        'minify-html'
    ]);
var clean = require('gulp-clean');


gulp.task('clean', function () {
    return gulp.src('dist/', {read: false})
        .pipe(clean());
});

gulp.task('default', ['babel', 'css', 'minify-html']);

