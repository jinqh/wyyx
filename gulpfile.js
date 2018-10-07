var gulp = require('gulp');
var sass = require('gulp-sass-china');
var cleanCSS = require('gulp-clean-css');
var uglify = require('gulp-uglify');
var rename = require('gulp-rename');

gulp.task('sass', function() {
    gulp.src('./src/index/sass/index.scss').pipe(sass())
    .pipe(gulp.dest('./src/index/css'));
});

gulp.task('sass:watch', function() {
    gulp.watch('./src/index/sass/index.scss', ['sass'])
});

gulp.task('minify-css', function() {
    gulp.src('./src/index/css/index.css').pipe(cleanCSS({compatibility: 'ie8'}))
    .pipe(rename({"suffix": ".min"}))
    .pipe(gulp.dest('./min'));
});

gulp.task('minify-js', function() {
    gulp.src('./src/index/js/index.js').pipe(uglify())
    .pipe(rename({"suffix": ".min"}))
    .pipe(gulp.dest('./min'))
});