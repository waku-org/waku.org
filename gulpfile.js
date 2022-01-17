const { parallel, series, src, dest } = require('gulp')
const gulp = require('gulp')
const browserSync = require('browser-sync').create()
const concat = require('gulp-concat')
const postcss = require('gulp-postcss')
const imagemin = require('gulp-imagemin')
const uglify = require('gulp-uglify-es').default

const styles = () =>
  src('src/css/*.css')
    .pipe(postcss())
    .pipe(concat('style.min.css'))
    .pipe(dest('dist/css'))
    .pipe(browserSync.stream())

const scripts = () =>
  src('src/js/*.js')
    .pipe(uglify())
    .pipe(dest('dist/js'))
    .pipe(browserSync.stream())

// Task for minifying images
const images = () =>
  src('src/assets/images/**/*')
    .pipe(imagemin())
    .pipe(dest('dist/assets/images'))

const content = () =>
  src('src/*.html')
    .pipe(dest('dist'))

const cname = () =>
  src('src/assets/CNAME').pipe(dest('dist'))

const server = () =>
  browserSync.init({
    open: 'local',
    port: 4000,
    server: {
      baseDir: 'src/',
    },
  })

const reload = async () => await browserSync.reload()

/* Watch Files & Reload browser after tasks */
const watch = () => {
  gulp.watch('src/assets/images/**/*', series(images, reload))
  gulp.watch('src/**/*.html', series(content, reload))
  gulp.watch('src/css/*.css', series(styles, reload))
  gulp.watch('src/js/*.js', series(scripts, reload))
}

exports.content = content
exports.scripts = scripts
exports.styles = styles
exports.images = images
exports.cname = cname
exports.watch = watch
exports.server = server
exports.build = series(content, scripts, styles, images, cname)
exports.devel = series(exports.build, parallel(server, watch))
exports.develop = exports.devel
exports.default = exports.build
