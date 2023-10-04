import dartSass from 'sass';
import gulpSass from 'gulp-sass';
import prefix from 'gulp-autoprefixer';
import cleanCSS from 'gulp-clean-css';

const sass = gulpSass(dartSass);
const scssPath = 'scss/*.scss';
const destPath = 'site/css';

const styles = gulp => {
  gulp.task('styles', () => gulp
    .src(scssPath)
    .pipe(sass({
      includePaths: ['scss'],
      outputStyle: 'compressed'
    }))
    .pipe(prefix({
      overrideBrowsersList: ['last 2 versions'],
      cascade: false
    }))
    .pipe(cleanCSS({compatibility: 'ie8'}))
    .pipe(gulp.dest(destPath))
  );
};

export default styles;
