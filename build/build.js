const build = gulp => {
  gulp.task('build', gulp.series(['images', 'scripts', 'styles', 'views']));
};

export default build;
