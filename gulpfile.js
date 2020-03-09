const {src, dest, watch } = require('gulp');
const sass = require('gulp-sass');
const autoprefixer = require('gulp-autoprefixer');
const rename = require('gulp-rename');
const cssmin = require('gulp-cssmin');
const browserSync = require('browser-sync').create();



// Static server
function bs() {
    serveSass();
    browserSync.init({
        server: {
            baseDir: "./"
        }
    });
    watch("./*.html").on('change', browserSync.reload);
    watch("./sass/**/*.sass", serveSass);
    watch("./scss/**/*.scss", serveSass);
    watch("./js/*.js").on('change', browserSync.reload);
};

function serveSass() {
    return src("./sass/**/*.sass", "./scss/**/*.scss")
        .pipe(sass())
        .pipe(autoprefixer({
            cascade: false
        }))
        .pipe(dest("./css"))
        .pipe(browserSync.stream());
};

function minicss() {
    return src('./css/**/*.css')
    .pipe(cssmin())
    .pipe(rename({suffix: '.min'}))
    .pipe(dest('./css'))
};

exports.serve = bs
exports.minicss = minicss