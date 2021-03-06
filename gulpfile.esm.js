import gulp from 'gulp';
import browsersync from './build/browsersync';
import build from './build/build';
import images from './build/images';
import scripts from './build/scripts';
import staticFiles from './build/static';
import styles from './build/styles';
import views from './build/views';

for (const task of [images, scripts, staticFiles, styles, views, build, browsersync]) {
  task(gulp);
}
