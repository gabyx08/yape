var gulp = require('gulp');
var sass = require('gulp-sass');

var rutas = {
  rutaSCSS: 'src/assets/scss/main.scss'
};

gulp.task('css',function(){
  gulp.src(rutas.rutaSCSS)
  .pipe(sass({outputSyle: 'compressed'})
    .on('error', sass.logError))
  .pipe(gulp.dest('public/assets/css'))
});
