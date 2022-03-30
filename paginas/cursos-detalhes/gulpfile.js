var gulp        = require('gulp');
var sass        = require('gulp-sass');
var browserSync = require('browser-sync').create();

gulp.task('sass', function(){
    return gulp.src('./scss/*.scss')
    .pipe(sass())
    .pipe(gulp.dest('./css'))
    .pipe(browserSync.reload({stream: true}));
});

gulp.task('browser-sync', function(){
    browserSync.init({
        server: {
            baseDir: "./"
        }
    });
    gulp.watch('./scss/*.scss', gulp.parallel('sass'));
    gulp.watch('./*.html').on('change', browserSync.reload);
});

gulp.task('default', gulp.parallel('browser-sync'));