const build = gulp => {
  gulp.task('build', gulp.series(['images', 'scripts', 'static', 'styles', 'views']));
};

export default build;
