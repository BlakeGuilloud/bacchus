const autoprefixer = require('autoprefixer');
const cssnano = require('cssnano');
const ghPages = require('gulp-gh-pages');
const gulp = require('gulp');
const gutil = require('gutil');
const less = require('gulp-less');
const postcss = require('gulp-postcss');
const serve = require('gulp-serve');
const webpack = require('webpack');

const webpackDocs = require('./webpack.docs.config');
const webpackDist = require('./webpack.dist.config');
const paths = require('./paths');

gulp.task('pages', () => gulp.src('./public/**/*').pipe(ghPages()));

// ------------------------------------------------
// ------------------------------------------------
// DOCS
// ------------------------------------------------
// ------------------------------------------------
gulp.task('docs', ['docs:scripts', 'docs:styles', 'watch'], serve({
  port: 3000,
  root: ['public'],
}));

gulp.task('watch', () => {
  gulp.watch(paths.scripts.docs, ['docs:scripts']);
  gulp.watch(paths.styles.docs, ['docs:styles']);
});

gulp.task('docs:scripts', (callback) => {
  webpack(webpackDocs, (err, stats) => {
    if (err) throw new gutil.PluginError('docs:scripts', err);

    gutil.log('docs:scripts', stats.toString({
      colors: true,
      exclude: 'node_modules',
    }));

    callback();
  });
});

gulp.task('docs:styles', () => {
  const processors = [
    autoprefixer({ browsers: ['last 2 versions', 'ie 10'], cascade: false }),
    cssnano(),
  ];

  return gulp.src(paths.styles.app)
    .pipe(less({ compress: true }))
    .pipe(postcss(processors))
    .pipe(gulp.dest('./public/css'));
});

// ------------------------------------------------
// ------------------------------------------------
// DIST
// ------------------------------------------------
// ------------------------------------------------
gulp.task('dist', ['dist:scripts', 'dist:styles']);

gulp.task('dist:scripts', (callback) => {
  webpack(webpackDist, (err, stats) => {
    if (err) throw new gutil.PluginError('dist:scripts', err);

    gutil.log('dist:scripts', stats.toString({
      colors: true,
      exclude: 'node_modules',
    }));

    callback();
  });
});

gulp.task('dist:styles', () => {
  const processors = [
    autoprefixer({ browsers: ['last 2 versions', 'ie 10'], cascade: false }),
    cssnano(),
  ];

  return gulp.src(paths.styles.app)
    .pipe(less({ compress: true }))
    .pipe(postcss(processors))
    .pipe(gulp.dest('./dist/css'));
});
