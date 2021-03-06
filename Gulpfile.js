var gulp = require('gulp');
var sass = require('gulp-sass');
var autoprefixer = require('gulp-autoprefixer');

gulp.task('styles', function(){
	gulp.src('sass/**/*.scss')
		.pipe(sass().on('error', sass.logError))
		.pipe(autoprefixer({ browsers: 'last 2 version'}))
		.pipe(gulp.dest('./css/'));
})

// Watch
gulp.task('default', function() {
	gulp.watch('sass/**/*.scss', gulp.series('styles'));
});