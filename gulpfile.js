/* packages */

const gulp = require('gulp');
const sass = require('gulp-sass');
const autoprefixer = require('gulp-autoprefixer');
const nunjucksRender = require('gulp-nunjucks-render');
const fs = require('fs')
const minify = require('gulp-minify');
const clean = require('gulp-clean');
const htmlmin = require('gulp-htmlmin');

/* settings */

const settings = {
  dir: './dist',
  sass: {
    input: [
      './src/assets/css/*.scss'
    ],
    output: './dist/assets/css',
    options: {
      errLogToConsole: true,
      outputStyle: 'compressed'
    }
  },
  images: {
    input: ['./src/assets/images/**/*'],
    output: './dist/assets/images'
  },
  js: {
    libs: {
      input: ['./src/assets/js/libs/*'],
      output: './dist/assets/js/libs'
    },
    app: {
      input: './src/assets/js/app/app.js',
      output: './dist/assets/js/app'
    }
  },
  autoprefixer: {
    browsers: [
      'last 2 versions', 
      '> 5%'
    ]
  },
  render: {
    input: [
      './src/pages/*.html'
    ],
    output: 'dist',
    partials: [
      './src/templates'
    ],
    watch: [
      './src/pages/*.html',
      './src/templates/**/*.html'
    ],
    data: './src/data/data.json'
  }
}

/* tasks */

gulp.task('clean', function () {
    return gulp
      .src(settings.dir, {read: false})
      .pipe(clean());
});

gulp.task('sass', function () {
  return gulp
    .src(settings.sass.input)
    .pipe(sass(settings.sass.options).on('error', sass.logError))
    .pipe(autoprefixer(settings.autoprefixer))
    .pipe(gulp.dest(settings.sass.output))
    .resume()
});

gulp.task('compile', function() {
  return gulp
    .src(settings.render.input)
    .pipe(nunjucksRender({
      path: settings.render.partials,
      envOptions: {
        trimBlocks: true,
        lstripBlocks: true
      },
      manageEnv: function(env){
        env.addGlobal('data', JSON.parse(fs.readFileSync(settings.render.data)));
      }
    }))
    .pipe(gulp.dest(settings.render.output))
});

gulp.task('copyJsLibs', function() {
    gulp
      .src(settings.js.libs.input)
      .pipe(gulp.dest(settings.js.libs.output))
})

gulp.task('copyImages', function() {
    gulp
      .src(settings.images.input)
      .pipe(gulp.dest(settings.images.output))
})

gulp.task('minifyApp', function() {
    return gulp
      .src(settings.js.app.input)
      .pipe(minify({
          ext:{
              src:'-debug.js',
              min:'.js'
          }
      }))
      .pipe(gulp.dest(settings.js.app.output))
});

gulp.task('minifyHtml', function() {
  return gulp.src('dist/*.html')
    .pipe(htmlmin({collapseWhitespace: true}))
    .pipe(gulp.dest('dist'));
});

gulp.task('watch', function() {
  gulp.watch(settings.sass.input, ['sass'])
  gulp.watch(settings.render.watch, ['compile'])
  gulp.on('change', function(event) {
      console.log('File ' + input + event.path + ' was ' + event.type + ', running tasks...');
    });
});

gulp.task(
  'default', [
    'sass', 
    'compile', 
    'copyImages', 
    'minifyApp', 
    'copyJsLibs'
    ]
  );