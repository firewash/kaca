const gulp = require('gulp');
const babel = require('gulp-babel');
const rename = require('gulp-rename');
const uglify = require('gulp-uglify');
const nodemon = require('gulp-nodemon');
const livereload = require('gulp-livereload');
var webpack = require('gulp-webpack');


/**
 * 后台相关的任务
 */
gulp.task('bg-compiler', () => {
    gulp.src('src/bg/**').pipe(gulp.dest('build/bg'));
});

gulp.task('bg-service', () => {
    return; // gulp配合webstorm时，就不要启动了。
    const nodemonConfig = {
        script: 'build/bg/bin/index.js',
        // ignore : [
        //    "tmp/**",
        //    "public/**",
        //    "views/**"
        // ],
        env: {
            mode: 'dev'
        }
    };
    return nodemon(nodemonConfig).on('restart',() => {
        console.log('node service restart by nodemon');
    });
});

gulp.task('bg-watch', () => {
    return gulp.watch('src/bg/**', ['bg-compiler']);
});

/**
 * 网站相关的任务
 */
gulp.task('www-compiler', () => {
    return gulp.src(['src/www/**','!src/www/**.jsx'])
                .pipe(gulp.dest('build/www'));
});

gulp.task('third-web-lib', () => {
    gulp.src('node_modules/jquery/dist/jquery.js')
        .pipe(gulp.dest('build/www/public/jquery'));

    gulp.src('node_modules/vue/dist/vue.js')
        .pipe(gulp.dest('build/www/public/vue'));

    gulp.src('node_modules/bootstrap/dist/**')
        .pipe(gulp.dest('build/www/public/bootstrap'));

    gulp.src(['node_modules/react/dist/react.js','node_modules/react-dom/dist/react-dom.js'])
      .pipe(gulp.dest('build/www/public/react'));
});

gulp.task('self-js', () => {
    console.log('自己的JS');
    return gulp.src('src/www/public/js/*.js')
        .pipe(babel({ presets: ['es2015'] }))
        .pipe(uglify())
        .pipe(gulp.dest('build/www/public/js'))
        .pipe(rename({ suffix: '.min' }))
        .pipe(gulp.dest('build/www/public/js'))
        .pipe(livereload());
});

gulp.task('webpackTask', function(callback) {
    return gulp.src('src/www/public/js/task/realtime-queue-view.jsx')
      .pipe(webpack( require('./webpack.config.js') ))
      .pipe(gulp.dest('build/www/public/js/task'));
});

gulp.task('www-watch', () => {
    livereload.listen();
    return gulp.watch('src/www/**', ['www-compiler', 'self-js', 'webpackTask']);
});

gulp.task('bg', ['bg-compiler', 'bg-service', 'bg-watch']);
gulp.task('www', ['www-compiler', 'third-web-lib', 'self-js', 'www-watch', 'webpackTask']);

gulp.task('default', ['bg', 'www']);
