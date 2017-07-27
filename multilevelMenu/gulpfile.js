const gulp=require('gulp'),
    babel=require('gulp-babel'),
    sass =require('gulp-sass'),
    uglify=require('gulp-uglify'),
    concat=require('gulp-concat'),
    rename=require('gulp-rename'),
    livereload=require('gulp-livereload'),
    autoprefixer=require('gulp-autoprefixer'),
    minify=require('gulp-minify');

const sassOpts = { outputStyle: 'compressed', errLogToConsole: true };

livereload({ start: true })

gulp.task('sass', () => { 
   gulp.src('./src/*.scss')
    .pipe(sass(sassOpts))
    .pipe(autoprefixer({
        browsers: ['last 2 versions'],
        cascade: false
    }))
    .pipe(minify())
    .pipe(gulp.dest('./dist'))
    .pipe(livereload());
 });

gulp.task('compress',()=>{
    gulp.src('./src/*.js')
    .pipe(babel({presets:['es2015']}))    
    .pipe(uglify())
    .pipe(concat('bundle.min.js'))
    .pipe(gulp.dest('./dist'))
    .pipe(livereload());
});

gulp.task('default',['compress','sass'],()=>{
     gulp.watch('./src/*.scss', ['sass'])
    .on('change', (e) => { 
      console.log(`File ${e.path} was ${e.type}, running Sass task...`);
    });
     gulp.watch('./src/*.js', ['compress'])
    .on('change', (e) => { 
      console.log(`File ${e.path} was ${e.type}, running Js task...`);
    });
});