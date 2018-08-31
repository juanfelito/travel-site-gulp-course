var gulp = require('gulp'),
postcss = require('gulp-postcss'),
autoprefixer = require('autoprefixer'),
simpleVars = require('postcss-simple-vars'),
nested = require('postcss-nested'),
imports = require('postcss-import');

gulp.task('styles', () =>{
    return gulp.src('./app/assets/styles/styles.css')
            .pipe(postcss([imports, simpleVars, nested,autoprefixer]))
            .on('error', function (error) {
                this.emit('end');
                console.log(error.toString());
            })
            .pipe(gulp.dest('./app/temp/styles'));
});