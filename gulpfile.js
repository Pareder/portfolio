import gulp from 'gulp';
import browsersync from './build/browsersync.js';
import build from './build/build.js';
import images from './build/images.js';
import scripts from './build/scripts.js';
import staticFiles from './build/static.js';
import styles from './build/styles.js';
import views from './build/views.js';

for (const task of [
  images,
  scripts,
  staticFiles,
  styles,
  views,
  build,
  browsersync,
]) {
  task(gulp);
}
