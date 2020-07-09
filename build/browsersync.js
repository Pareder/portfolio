import BrowserSync from 'browser-sync';

const browserSync = BrowserSync.create();
const scssPath = 'scss/**/*.scss';
const jsPath = 'scripts/*.js';
const viewsPath = '(.|**)/*.pug';
const imgPath = 'img/**/*.+(png|jpg|jpeg|gif|svg)';

const browsersync = gulp => {
  const reloadBrowser = done => {
    browserSync.reload();
    done();
  };

  gulp.task('serve', gulp.series('build', () => {
    browserSync.init({
      server: {
        baseDir: 'site'
      }
    });

    gulp.watch(scssPath, gulp.series(['styles', reloadBrowser]));
    gulp.watch(jsPath, gulp.series(['scripts', reloadBrowser]));
    gulp.watch(imgPath, gulp.series(['images', reloadBrowser]));
    gulp.watch(viewsPath, gulp.series(['views', reloadBrowser]));
  }));
};

export default browsersync;
