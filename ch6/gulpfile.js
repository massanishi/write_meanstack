var gulp = require('gulp');
var concat = require('gulp-concat');
var uglify = require('gulp-uglify');
var sourceMaps = require('gulp-sourcemaps');
var ngAnnotate = require('gulp-ng-annotate');
var fs = require('fs')

gulp.task('js', function(){
	gulp.src(['ng/module.js', 'ng/**/*.js'])
	.pipe(sourceMaps.init())
	.pipe(concat('app.js'))
	.pipe(ngAnnotate())
	.pipe(uglify())
	.pipe(sourceMaps.write())
	.pipe(gulp.dest('assets'))
})

gulp.task('watch:js', ['js'], function(){
	gulp.watch('ng/**/*.js', ['js'])
})

fs.readdirSync(__dirname + '/gulp').forEach(function(task){
	require('./gulp/' + task)
})

gulp.task('dev', ['watch:css', 'watch:js', 'dev:server'])