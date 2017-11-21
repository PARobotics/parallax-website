var gulp = require('gulp');
var sass = require('gulp-sass');
var minify = require('gulp-minify');
var pug = require('gulp-pug');
var webserver = require('gulp-webserver');
var concat = require('gulp-concat');

gulp.task('webserver', function() {
  gulp.src('.')
  .pipe(webserver({
    livereload: true,
    open: true
  }));
});

gulp.task('views', function buildHTML() {
  return gulp.src(['./vex/src/views/*.pug', '!vex/src/views/config.pug', '!vex/src/views/layout.pug'])
  .pipe(pug())
  .pipe(gulp.dest('./vex'));
});

gulp.task('sass', function () {
  return gulp.src('./vex/src/SCSS/*.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest('./vex/dist/'));
});

gulp.task('sass:watch', function () {
  gulp.watch('./vex/src/SCSS/*.scss', ['sass']);
});

gulp.task('compress', function() {
  gulp.src('./vex/src/JS/*.js')
    .pipe(concat('index.js'))
    .pipe(minify({
        ext:{
            min:'.min.js'
        },
        noSource: true
    }))
    .pipe(gulp.dest('./vex/dist/'));
});

gulp.task('js:watch', function () {
  gulp.watch('./vex/src/JS/*.js', ['compress']);
});

gulp.task('pug:watch', function () {
  gulp.watch('./vex/src/views/*.pug', ['views']);
});

gulp.task('default', ['sass', 'sass:watch', 'compress', 'js:watch', 'views', 'pug:watch', 'webserver']);
