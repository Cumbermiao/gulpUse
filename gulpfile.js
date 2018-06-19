const gulp = require('gulp');
const less = require('gulp-less');
const path = require('path');

gulp.task('default',['less'], () => {
    gulp.src('src/**/*.less')
        .pipe(gulp.dest('build'))
})

gulp.task('less', () => {
    return gulp.src('src/**/*.less')
        .pipe(less({
            paths: [path.join(__dirname, 'less', 'includes')]
        }))
        .pipe(gulp.dest('build/css'))
})