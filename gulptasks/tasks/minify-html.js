'use strict';

var gulp = require('gulp')
var htmlmin = require('gulp-htmlmin');

module.exports = function() {
    return gulp.src('src/**/*.html')
        .pipe(htmlmin({collapseWhitespace: true}))
        .pipe(gulp.dest('dist'));
};