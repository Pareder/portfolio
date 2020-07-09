import pug from 'gulp-pug';
import data from 'gulp-data';
import fs from 'fs';

const pugPath = '*.pug';
const destPath = 'site';

const views = gulp => {
  gulp.task('views', () => gulp
    .src(pugPath)
    .pipe(data(file => JSON.parse(fs.readFileSync('config.json'))))
    .pipe(pug())
    .pipe(gulp.dest(destPath))
  );
};

export default views;
