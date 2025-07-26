const gulp = require('gulp');
const sass = require('gulp-sass')(require('sass'));
const sourceMaps = require('gulp-sourcemaps');
const uglify = require('gulp-uglify');
const concat = require('gulp-concat');
const obfuscate = require('gulp-obfuscate');

async function minImg() {
  const imagemin = (await import('gulp-imagemin')).default;
  return gulp.src('./src/img/*')
    .pipe(imagemin())
    .pipe(gulp.dest('./build/img'));
}

function minificaJS() {
  return gulp.src('./src/scripts/*.js')

    .pipe(sourceMaps.init())
    .pipe(concat('sum.js'))
    .pipe(uglify())
    .pipe(obfuscate())
    .pipe(sourceMaps.write('./maps'))
    .pipe(gulp.dest('./build/scripts')); }

function compilaSass() {
  return gulp.src('./src/styles/*.scss')
  .pipe(sourceMaps.init())
    .pipe(sass({
      outputStyle: 'compressed'
    }).on('error', sass.logError))
    .pipe(sourceMaps.write('./maps'))
    .pipe(gulp.dest('./build/styles'));
}
function funcaoPadrao(callback) {
  console.log("Executando a função padrão do Gulp");
  callback();
}

function dizOi(callback) {
  console.log("Olá, Gulp!");
  callback();
}

exports.default = gulp.series(
  funcaoPadrao, dizOi
)    
exports.sass = compilaSass;

exports.watch = function() {
  gulp.watch('./src/styles/*.scss', {ignoreInitial: false },gulp.series(compilaSass));
  console.log("Observando mudanças nos arquivos SCSS...");
};

exports.js = minificaJS;

exports.img = minImg;

exports.default  = function() {
 gulp.watch('./src/styles/*.scss', {ignoreInitial: false },gulp.series(compilaSass));
 gulp.watch('./src/scripts/*.js', {ignoreInitial: false },gulp.series(minificaJS));
 gulp.watch('./src/img/*', {ignoreInitial: false },gulp.series(minImg));
}
