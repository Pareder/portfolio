import imageMin from 'gulp-imagemin';

const imgPath = 'img/**/*.+(png|jpg|jpeg|gif|svg|xml|json)';
const destPath = 'site/img';

const images = gulp => {
  gulp.task('images', () => gulp
    .src(imgPath, { encoding: false })
    .pipe(imageMin())
    .pipe(gulp.dest(destPath))
  );
};

export default images;
