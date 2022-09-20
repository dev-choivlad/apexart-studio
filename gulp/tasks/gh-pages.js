const gulp = require('gulp');
const ghPages = require('gulp-gh-pages');

const deployToGhp = () => {
  return gulp.src('../docs/**/*')
    .pipe(ghPages());
}

module.exports = deployToGhp;
