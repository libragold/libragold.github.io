const gulp  = require('gulp')
const concat = require('gulp-concat')
const uglify = require('gulp-uglify')

gulp.task('scripts', function() {
  const scriptsToMerge = [
    './_src/main.js'
  ]

  return gulp.src(scriptsToMerge)
    .pipe(concat('main.js'))
    .pipe(uglify())
    .pipe(gulp.dest('./js/'))
})

gulp.task('watch', function() {
  gulp.watch('./_src/**/*.js', ['scripts'])
})

gulp.task('default', ['scripts'])
