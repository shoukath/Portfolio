'use strict';

var gulp = require('gulp')
const babel = require('gulp-babel');
var sourcemaps = require('gulp-sourcemaps');
var jsmin = require('gulp-jsmin');
var rename = require('gulp-rename');
var watch = require('gulp-watch');

module.exports = function() {
    return gulp.src('src/**/*.js')
        .pipe(watch('src/**/*.js'))
        .pipe(sourcemaps.init())
        .pipe(babel({
            presets: ['es2015']
        }))
        .pipe(jsmin())
        .pipe(rename({suffix: '.min'}))
        .pipe(sourcemaps.write('.'))
        .pipe(gulp.dest('dist/'));
};