var gulp = require('gulp');
var rename = require('gulp-rename');
var autoPrefixer = require('gulp-autoprefixer');
var liveReload = require('gulp-livereload');
var connect = require('gulp-connect');
var sass = require('gulp-sass');
var haml = require('gulp-haml');
var concat = require('gulp-concat');
var imageMin = require('gulp-imagemin');
var pngQuant = require('imagemin-pngquant');
var fontMinify = require('gulp-fontmin');

// Sass compiling, concating, renaming and autoprefixing
gulp.task('sass', function() {
  gulp.src('./src/sass/*.scss')
  .pipe(sass())
  .pipe(autoPrefixer({
    browsers: ['last 10 versions'],
    cascade: false
  }))
  .pipe(rename('style.css'))
  .pipe(gulp.dest('./build/css/'))
  .pipe(connect.reload());
});

// Haml compiling
gulp.task('haml', function() {
  gulp.src('./src/**/*.haml')
  .pipe(haml())
  .pipe(gulp.dest('./build/'))
  .pipe(connect.reload());
});

// Minificate images
gulp.task('img', function() {
  gulp.src('./src/img/*')
  .pipe(imageMin({
    progressive: true,
    svgoPlugins: [{removeViewBox: false}],
    use: [pngQuant()]
  }))
  .pipe(gulp.dest('./build/img/'))
  .pipe(connect.reload());
});

// Minificate font
gulp.task('fontmin', function() {
  gulp.src('./src/fonts/*.ttf')
  .pipe(fontMinify())
  .pipe(gulp.dest('./build/fonts/'))
});

// Js copying
gulp.task('js', function() {
  gulp.src(['./src/js/jquery.js', './src/js/handlebars.js',  './src/js/*.js'])
  .pipe(concat('app.js'))
  .pipe(gulp.dest('./build/js/'))
  .pipe(connect.reload())
});

// Pages live-reload
gulp.task('connect', function() {
  connect.server({
    root: 'build',
    livereload: true,
    port: 8000
  });
});

// Watches
gulp.task('watch', function() {
  gulp.watch('./src/sass/*.scss', ['sass']);
  gulp.watch('./src/*.haml', ['haml']);
  gulp.watch('./src/img/', ['img']);
  gulp.watch('./src/fonts/', ['fontmin']);
  gulp.watch('./src/js/*.js', ['js']);
});

// Default task
gulp.task('default', ['connect', 'haml', 'sass', 'img', 'fontmin', 'js', 'watch']);

