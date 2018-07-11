let gulp = require('gulp');
// var concat = require('gulp-concat');
let sass = require('gulp-sass');
let autoprefixer = require('gulp-autoprefixer');
// var uglify = require('gulp-uglify');

gulp.task('default', ['js:compile', 'sass:compile']);

// gulp.task('js:compile', () => {
//   return gulp.src(['App_Themes/CaravanHealth/js/base/base.js', 'App_Themes/CaravanHealth/js/components/*.js'])
//     .pipe(uglify())
//     .pipe(concat('main.js'))
//     .pipe(gulp.dest('App_Themes/CaravanHealth/js'));
// });

// gulp.task('js:watch', () => {
//   gulp.watch('App_Themes/CaravanHealth/js/components/*.js', ['js:compile']);
// });

// gulp.task('sass:compile', () => {
//   gulp.src('App_Themes/CaravanHealth/scss/styles.scss') // change to head scss file for project
//     .pipe(sass({ includePaths: ['node_modules/foundation-sites/scss'] }).on('error', sass.logError))
//     .pipe(autoprefixer({ browsers: ['last 2 versions', 'ie >= 9', 'Android >= 2.3', 'ios >= 7'] }))
//     .pipe(gulp.dest('App_Themes/CaravanHealth/css')); // change to output file
// });

// gulp.task('sass:watch', () => {
//   gulp.watch('App_Themes/CaravanHealth/scss/**/*.scss', ['sass:compile']);
// });

gulp.task('sass:init', () => {
  gulp.src('src/sass/styles.scss')
    .pipe(sass({ includePaths: ['node_modules/foundation-sites/scss'] }).on('error', sass.logError))
});

gulp.task('sass:compile', () => {
  gulp.src('src/sass/styles.scss')
    .pipe(sass({ includePaths: ['node_modules/foundation-sites/scss'] }).on('error', sass.logError))
    .pipe(autoprefixer({ browsers: ['last 2 versions', 'ie >= 9', 'Android >= 2.3', 'ios >= 7'] }))
    .pipe(gulp.dest('src/'));
});

gulp.task('sass:watch', () => {
  gulp.watch('src/scss/**/*.scss', ['sass:compile']);
});


