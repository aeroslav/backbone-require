var gulp = require('gulp'),
    less = require('gulp-less'),
    minifyCSS = require('gulp-minify-css'),
    amdOptimize = require("amd-optimize"),
    concat = require('gulp-concat'),
    autoprefixer = require('gulp-autoprefixer'),
    sourcemaps = require('gulp-sourcemaps'),
    browserSync = require('browser-sync');

gulp.task('browser-sync', function() {
    browserSync.init(null, {
        server: {
            baseDir: "app"
        }
    });
});
gulp.task('bs-reload', function () {
    browserSync.reload();
});

gulp.task("js", function () {
    return gulp.src(['./src/js/**/*.js'])
        .pipe(sourcemaps.init({loadMaps: true}))
            .pipe(amdOptimize('./src/js/main', {
                configFile : "./src/js/amdOptimize-conf.js"
            }))
            .pipe(concat('index.js'))
        .pipe(sourcemaps.write('.'))
        .pipe(gulp.dest('./app/js'))
        .pipe(browserSync.reload( {
            stream: true,
            once: true
        } ));
});

gulp.task('css', function () {
    return gulp.src('./src/less/styles.less')
        .pipe(sourcemaps.init())
            .pipe(less())
            .pipe(autoprefixer({
                browsers: ['last 2 versions', 'Opera 12.1'],
                cascade: false,
                remove: true
            }))
            .pipe(minifyCSS({ keepBreaks: false }))
        .pipe(sourcemaps.write('.'))
        .pipe(gulp.dest('./app/css'))
        .pipe(browserSync.reload({ stream:true }));
});


gulp.task('default', ['css', 'js', 'browser-sync'], function() {
    gulp.watch('./src/js/**/*.js', ['js']);
    gulp.watch('./src/less/*.less', ['css']);
    gulp.watch('./app/*.html', ['bs-reload']);
});