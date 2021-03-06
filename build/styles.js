import sass from 'gulp-sass';
import prefix from 'gulp-autoprefixer';
import cleanCSS from 'gulp-clean-css';

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
    .pipe(gulp.dest('css'))
  );
};

export default styles;
