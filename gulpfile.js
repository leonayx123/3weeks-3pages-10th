var bs = require('browser-sync').create();
var gulp = require('gulp');
var less = require('gulp-less');

gulp.task('less-task', function () {
    return gulp.src('./docs/less/*.less')  // only compile the entry file
        .pipe(less())
        .pipe(gulp.dest('./docs/css'))
});

gulp.task('week1', function () {
    gulp.watch('./docs/less/*.less', gulp.series("less-task"));

    bs.init({
        watch: true,
        server: {
            baseDir: "./docs",
            index: "week1.html"
        },
        port: 8001
    });
});

gulp.task('week2', function () {
    gulp.watch('./docs/less/*.less', gulp.series("less-task"));

    bs.init({
        watch: true,
        server: {
            baseDir: "./docs",
            index: "week2.html"
        },
        port: 8002
    });
});

gulp.task('week3', function () {
    gulp.watch('./docs/less/*.less', gulp.series("less-task"));

    bs.init({
        watch: true,
        server: {
            baseDir: "./docs",
            index: "week3.html"
        },
        port: 8003
    });
});
