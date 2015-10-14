'use strict';

var gulp = require('gulp');
var sass = require('gulp-sass');
var browserSync = require('browser-sync').create();

gulp.task('sass', function () {
  gulp.src('./index.scss')
    .pipe(sass.sync().on('error', sass.logError))
    .pipe(gulp.dest('./css'))
    .pipe(browserSync.stream());
});

gulp.task('default', function () {
    browserSync.init({
        server: "./"
    });
  gulp.watch('./*.scss', ['sass'])
  gulp.watch('index.html').on('change', browserSync.reload);
});

gulp.task('default', function () {
    browserSync.init({
        server: "./"
    });
  gulp.watch('./*.scss', ['sass'])
  gulp.watch('index.html').on('change', browserSync.reload);
});
