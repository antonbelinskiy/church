let gulp = require('gulp'),
		sass = require('gulp-sass'),
		concat = require('gulp-concat'),
		uglify = require('gulp-uglify'),
		browserSync = require('browser-sync'),
		autoprefixer = require('gulp-autoprefixer');
		
gulp.task('sass', function(){
	return gulp.src('app/sass/**/*.sass')
		       .pipe(sass({outputStyle: 'exspanded'}))
					 .pipe(autoprefixer({
						overrideBrowserslist: ['last 8 version']
					 }))
					 .pipe(gulp.dest('app/css'))
					 .pipe(browserSync.reload({stream: true}))
}); 


gulp.task('html', function(){
	return gulp.src('app/*.html')
		.pipe(browserSync.reload({stream: true}))
	});


gulp.task('js', function(){
	return gulp.src('app/js/*.js')
		.pipe(browserSync.reload({stream: true}))
	});

gulp.task('browser-sync', function() {
	browserSync.init({
		server: {
				baseDir: 'app/'
		}
	});
});

gulp.task('watch', function(){
	gulp.watch('app/sass/**/*.sass', gulp.parallel('sass'));
	gulp.watch('app/*.html', gulp.parallel('html'));
	gulp.watch('app/js/*.js', gulp.parallel('js'));
});

gulp.task('default', gulp.parallel('sass', 'watch', 'browser-sync'))