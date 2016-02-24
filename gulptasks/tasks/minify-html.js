'use strict';

var gulp = require('..')([
    'css',
    'babel'
]);
var htmlmin = require('gulp-htmlmin');
var useref = require('gulp-useref');

module.exports = function() {
    return gulp.src('src/**/*.html')
        .pipe(useref())
        .pipe(htmlmin({collapseWhitespace: true}))
        .pipe(gulp.dest('dist'));
};