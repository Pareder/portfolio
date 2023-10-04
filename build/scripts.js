import eslint from 'gulp-eslint';
import babel from 'gulp-babel';
import uglify from 'gulp-uglify';

const jsPath = 'scripts/*.js';
const destPath = 'site/js';

const scripts = gulp => {
  gulp.task('scripts', () => gulp
    .src(jsPath)
    .pipe(eslint({
      useEslintrc: true
    }))
    .pipe(eslint.format())
    .pipe(babel({
      presets: ['@babel/env']
    }))
    .pipe(uglify())
    .pipe(gulp.dest(destPath))
  );
};

export default scripts;
