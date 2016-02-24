'use strict';

var gulp = require('gulp')
var postcss = require('gulp-postcss');
var autoprefixer = require('gulp-autoprefixer');
var cssnano = require('gulp-cssnano');
var sourcemaps = require('gulp-sourcemaps');
var watch = require('gulp-watch');

module.exports = function() {
    return gulp.src('src/**/*.css')
        .pipe(watch('src/**/*.css'))
        .pipe(sourcemaps.init())
        .pipe(autoprefixer({
            browsers: ['last 2 versions'],
            cascade: false
        }))
        .pipe(cssnano())
        .pipe(sourcemaps.write('.'))
        .pipe(gulp.dest('dist'));
};