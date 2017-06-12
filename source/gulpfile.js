var gulp = require('gulp');
var pug = require('gulp-pug');
var sass = require('gulp-sass');
var browserSync = require('browser-sync');
var concat = require('gulp-concat');
var uglify = require('gulp-uglifyjs');
var rename = require('gulp-rename')

//pug
gulp.task('pug', function () {
    return gulp.src('templates/*.pug')
    .pipe(pug({}))
    .pipe(rename("index.html"))
    .pipe(gulp.dest('../public'))
});

//sass
gulp.task('sass', function () {
  return gulp.src('styles/**/*.scss')
    .pipe(sass({outputStyle: 'compressed'}))
    .pipe(browserSync.reload({
        stream:true
    }))
    .pipe(gulp.dest('../public/styles'));
});

//js
gulp.task("js", function() {
    return gulp.src([
        'libs/jquery/dist/jquery.min.js',
        'libs/bootstrap/dist/js/bootstrap.min.js',
        'js/common.js'
    ])
    .pipe(concat('main.min.js'))
    .pipe(uglify())
    .pipe(gulp.dest('../public/js'))
})

//browserSync
gulp.task('browserSync', function() {
    browserSync({
        server: {
            baseDir:'../public'
        }
    })
});

//watch
gulp.task('watch', ['browserSync','sass'], function(){
    gulp.watch('templates/*', ['pug'])
    gulp.watch('styles/**/*.scss', ['sass'])
    gulp.watch('js/**/*.js', ['js'])
    gulp.watch('../public/*.html', browserSync.reload)
    gulp.watch('../public/js/*.js', browserSync.reload)
});