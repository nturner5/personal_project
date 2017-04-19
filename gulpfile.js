const gulp = require('gulp');
const concat = require('gulp-concat');
const babel = require('gulp-babel');
const sass = require('gulp-sass');

gulp.task('js', function() {
  gulp.src([
      './public/app.js',
      './public/controllers/*.js',
      './public/directive/*.js',
      './public/services/*.js',
      './controller.js',
      './config.js',
      './index.js'
      ])
  .pipe(babel({
    presets: ['es2015']
  }))
  .pipe(concat('bundle.js'))
  .pipe(gulp.dest('./public/build'));
});

gulp.task('css', function() {
  gulp.src([ 
    './public/styles/reset.css',
      
    './public/styles/*.css'
    ])
  .pipe(sass())
  .pipe(concat('bundle.css'))
  .pipe(gulp.dest('./public/build'));
});

gulp.task('watch', function() {
    gulp.watch([
      './public/app.js',
      './public/controllers/*.js',
      './public/directive/*.js',
      './public/services/*.js',
      './controller.js',
      './config.js',
      './index.js'
      ], ['js']);
    gulp.watch('./styles/*.{css,scss}', ['css']);
})

gulp.task('default', ['js', 'css', 'watch']);
