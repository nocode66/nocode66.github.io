var gulp = require('gulp');
var sass = require('gulp-sass');
var concat = require('gulp-concat');
var uglify = require('gulp-uglify');
var rename = require('gulp-rename');
var cleanCSS = require('gulp-clean-css');
var del = require('del');
var cssbeautify = require('gulp-cssbeautify');
var paths = {
    styles: {
        src: 'assets/scss/*.scss',
        dest: 'dist/css/'
    }
};

/* Not all tasks need to use streams, a gulpfile is just another node program
 * and you can use all packages available on npm, but it must return either a
 * Promise, a Stream or take a callback and call it
 */
function clean() {
    // You can use multiple globbing patterns as you would with `gulp.src`,
    // for example if you are using del 2.0 or above, return its promise
    return del(['dist/css/main.css']);
}

/*
 * Define our tasks using plain functions
 */
function styles() {
    return gulp.src(['./assets/scss/variables.scss',
        './assets/scss/header.scss',       
        './assets/scss/style.scss'])
            .pipe(concat('main.min.scss'))
            .pipe(sass.sync().on('error', sass.logError))
            
            // pass in options to the stream
            .pipe(rename({
                basename: 'main',
                suffix: ''
            }))
            .pipe(cssbeautify())
            .pipe(gulp.dest(paths.styles.dest));
}



function watch() {
    gulp.watch(paths.styles.src, styles);
}

/*
 * Specify if tasks run in series or parallel using `gulp.series` and `gulp.parallel`
 */
var build = gulp.series(clean, gulp.parallel(styles));

/*
 * You can use CommonJS `exports` module notation to declare tasks
 */
exports.clean = clean;
exports.styles = styles;
exports.watch = watch;
exports.build = build;
/*
 * Define default task that can be called by just running `gulp` from cli
 */
exports.default = build;





