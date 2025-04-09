const staticPath = 'static/*';
const destPath = 'site/static';

const staticFiles = gulp => {
	gulp.task('static', () => gulp
		.src(staticPath, { encoding: false })
		.pipe(gulp.dest(destPath)));
};

export default staticFiles;
