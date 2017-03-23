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

// Array con todas nuestras dependencias js
var jsDependencies = [
	'node_modules/okaynav/dist/js/jquery.okayNav-min.js',
];

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
			.pipe(sass({
					outputStyle: 'nested',
					sourceMap: false,
					includePaths: ['node_modules/ritmo/']
				}).on('error', sass.logError))
			.pipe(postcss([autoprefixer]))
		.pipe(sourcemaps.write())
		.pipe(gulp.dest('styles'))
});

// Asegura que todas las dependencias js en node_modules acaban en la carpeta /js
gulp.task('js', function(){
	gulp.src(jsDependencies)
		.pipe(gulp.dest('js/vendor'))
});