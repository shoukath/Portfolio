'use strict';

var gulp = require('gulp')
var htmlmin = require('gulp-htmlmin');
var watch = require('gulp-watch');

module.exports = function() {
    return gulp.src('src/**/*.html')
        .pipe(watch('src/**/*.html'))
        .pipe(htmlmin({collapseWhitespace: true}))
        .pipe(gulp.dest('dist'));
};