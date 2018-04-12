const gulp = require('gulp');
const browserSync = require('browser-sync').create();

gulp.task('main', () => {
    return gulp.src('src/*.js')
        .pipe(browserSync.stream());
});

gulp.task('serve', () => {
    browserSync.init({
        server: './'
    });

    gulp.watch('src/*.js', './*.js' ['main']);
    gulp.watch('./*.js').on('change', browserSync.reload);
    gulp.watch('./index.html').on('change', browserSync.reload);
});

gulp.task('default', ['serve']);