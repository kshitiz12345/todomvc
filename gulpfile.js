var gulp = require('gulp');

var concat = require('gulp-concat');

gulp.task('default', function() {
    gulp.src('react/TODO/todo/build/static/js/*.js')
        .pipe(concat('react-bundle.js'))
        .pipe(gulp.dest('./'));

    gulp.src('react/TODO/todo/build/static/css/*.css')
        .pipe(concat('react-bundle.css'))
        .pipe(gulp.dest('./'));

    gulp.src('vue/todo/dist/js/*.js')
        .pipe(concat('vue-bundle.js'))
        .pipe(gulp.dest('./'));

    gulp.src('vue/todo/dist/css/*.css')
        .pipe(concat('vue-bundle.css'))
        .pipe(gulp.dest('./'));

    return gulp.src('angular/todo/dist/todo/*.js')
        .pipe(concat('angular-bundle.js'))
        .pipe(gulp.dest('./'));
});