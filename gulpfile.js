var gulp = require('gulp'),
    sass = require('gulp-sass'),
    cssmin = require('gulp-cssmin'),
    autoprefixer = require('gulp-autoprefixer'),
    jshint = require('gulp-jshint'),
    uglify = require('gulp-uglify-es').default,
    concat = require('gulp-concat'),
    include = require("gulp-include"),
    livereload = require('gulp-livereload');

gulp.task('sass', function () {
    return gulp.src('scss/style.scss')
        .pipe(sass().on('error', sass.logError))
        .pipe(autoprefixer({
            browsers: ['last 2 versions'],
            cascade: false
        }))
        // .pipe(cssmin())
        .pipe(gulp.dest('dist/css'))
        .pipe(livereload());
});
gulp.task('php', function () {
    return gulp.src('**/*.php').pipe(livereload());
});
gulp.task('js', function() {
    return gulp.src('js/scripts.js')
        .pipe(include())
        // .pipe(uglify())
        .on('error', console.log)
        .pipe(gulp.dest('dist/js'))
        .pipe(livereload());
});

gulp.task('default', function () {
    livereload.listen();
    gulp.watch('scss/**/*.scss', gulp.series('sass'));
    gulp.watch('**/*.php', gulp.series('php'));
    gulp.watch('js/**/*.js', gulp.series('js'));
});
