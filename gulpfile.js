// Importa todos los packages
var gulp = require('gulp');
var sass = require('gulp-sass');
var postcss = require('gulp-postcss');
var syntax_scss = require('postcss-scss');
var sourcemaps = require('gulp-sourcemaps');
var gutil = require('gulp-util');

// PostCSS plugins
var autoprefixer = require('autoprefixer');
var stylelint = require('stylelint');
var reporter = require('postcss-reporter');

// Por defecto, watch
gulp.task('default', function() {
	gulp.watch('src/sass/**/*.scss',['styles']);
});

// Estilos: SASS + Lint + PostCSS
gulp.task('styles', function(){
	gulp.src('src/sass/**/*.scss')
		.pipe(sourcemaps.init())
			.pipe(postcss([
					stylelint,
					reporter({ clearMessages: true, throwError: true })
				],
				{ syntax: syntax_scss }
			).on('error', gutil.log))
			.pipe(sass({outputStyle: 'nested', sourceMap: false}).on('error', sass.logError))
			.pipe(postcss([autoprefixer]))
		.pipe(sourcemaps.write())
		.pipe(gulp.dest('styles'))
})