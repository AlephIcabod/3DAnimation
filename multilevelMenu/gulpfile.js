const gulp=require('gulp'),    
    babelify=require('babelify'),
    sass =require('gulp-sass'),
    uglify=require('gulp-uglify'),            
    livereload=require('gulp-livereload'),
    autoprefixer=require('gulp-autoprefixer'),
    browserify=require('browserify'),
    minify=require('gulp-minify'),
    buffer=require('vinyl-buffer'),
    source=require('vinyl-source-stream');

const sassOpts = { outputStyle: 'compressed', errLogToConsole: true };

livereload({ start: true })

gulp.task('sass', () => { 
   gulp.src('./src/scss/index.scss')
    .pipe(sass(sassOpts))
    .pipe(autoprefixer({
        browsers: ['last 2 versions'],
        cascade: false
    }))
    .pipe(minify())
    .pipe(gulp.dest('./dist'))
    .pipe(livereload());
 });

gulp.task('js',()=>{    
    let bundler = browserify('src/index.js');
    bundler.transform(babelify);
    bundler.bundle()
        .on('error', function (err) { console.error(err); })
        .pipe(source('index.js'))
        .pipe(buffer())
        .pipe(uglify())
        .pipe(minify())
        .pipe(gulp.dest('./dist'));
});

gulp.task('default',['js','sass'],()=>{
     gulp.watch('./src/scss/*.scss', ['sass'])
    .on('change', (e) => { 
      console.log(`File ${e.path} was ${e.type}, running Sass task...`);
    });
     gulp.watch('./src/*.js', ['js'])
    .on('change', (e) => { 
      console.log(`File ${e.path} was ${e.type}, running Js task...`);
    });
});