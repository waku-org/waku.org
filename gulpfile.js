const { watch, series, src, dest } = require("gulp");
var browserSync = require("browser-sync").create();
const concat = require('gulp-concat');
var postcss = require("gulp-postcss");
const imagemin = require("gulp-imagemin");
const uglify = require('gulp-uglify-es').default;

function cssTask(cb) {
	return src("./src/css/*.css")
		.pipe(postcss())
		.pipe(concat('style.min.css'))
		.pipe(dest("./src/css"))
		.pipe(browserSync.stream());
	cb();
}

function scriptsTask(cb) {
	return src('./src/js/*.js')
		.pipe(uglify())
		.pipe(dest('./dist/js'))
		.pipe(browserSync.stream());
	cb();
}

// Task for minifying images
function imageminTask(cb) {
	return src("./src/assets/images/**/*")
		.pipe(imagemin())
		.pipe(dest("./dist/assets/images"));
	cb();
}

function htmlBuild(cb) {
	return src("./src/*.html")
		.pipe(dest("./dist"))
	cb();
}

function browsersyncServe(cb) {
	browserSync.init({
		server: {
			baseDir: "src/",
		},
	});
	cb();
}

function browsersyncReload(cb) {
	browserSync.reload();
	cb();
}

// Watch Files & Reload browser after tasks
function watchTask() {
	watch("./src/**/*.html", browsersyncReload);
	watch(["./src/css/*.css"], series(cssTask, browsersyncReload));
	watch(["./src/js/*.js"], series(scriptsTask, browsersyncReload));
}

function build() {
	return src([
		'src/css/style.min.css',
		'src/assets/images/**/*',
		'src/js/main.js',
		'src/**/*.html ',
	], {base: 'src'})
		.pipe(dest('dist'))
}

exports.build = series(build);
exports.default = series(cssTask, scriptsTask, htmlBuild, browsersyncServe, watchTask);
exports.css = cssTask;
exports.images = imageminTask;
