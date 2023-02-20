import pkg from "gulp";
const { dest, src, series, watch, parallel } = pkg;
import imagemin from "gulp-imagemin";
import dartSass from "sass";
import gulpSass from "gulp-sass";
const sass = gulpSass(dartSass);
import cssnano from "gulp-cssnano";
import autoprefixer from "gulp-autoprefixer";
import rename from "gulp-rename";
import babel from "gulp-babel";
import uglify from "gulp-uglify";
import sourcemaps from "gulp-sourcemaps";
import browserSync from "browser-sync";
import clean from "gulp-clean";
import kit from "gulp-kit";
const reload = browserSync.reload;

const paths = {
  html: "./html/**/*.kit",
  sass: "./src/sass/**/*.scss",
  js: "./src/js/**/*.js",
  images: "src/img/*",
  dist: "./dist",
  sassDest: "./dist/css",
  jsDest: "./dist/js",
  imagesDest: "dist/img",
};

const sassCompiler = (done) => {
  src(paths.sass)
    .pipe(sourcemaps.init())
    .pipe(sass().on("error", sass.logError))
    .pipe(autoprefixer())
    .pipe(cssnano())
    .pipe(rename({ suffix: ".min" }))
    .pipe(sourcemaps.write())
    .pipe(dest(paths.sassDest));
  done();
};

const javaScript = (done) => {
  src(paths.js)
    .pipe(sourcemaps.init())
    .pipe(babel({ presets: ["@babel/env"] }))
    .pipe(uglify())
    .pipe(rename({ suffix: ".min" }))
    .pipe(sourcemaps.write())
    .pipe(dest(paths.jsDest));
  done();
};




const convertImages = (done) => {
  src(paths.images).pipe(imagemin()).pipe(dest(paths.imagesDest));
  done();
};

const startBrowserSync = (done) => {
  browserSync.init({
    server: {
      baseDir: "./",
    },
  });
  done();
};

const watchForChanges = (done) => {
  watch("*.html").on("change", reload);
  watch(
    [paths.html, paths.sass, paths.js],
    parallel(handleKits, sassCompiler, javaScript)
  ).on("change", reload);
  done();
};

const cleanFile = (done) => {
  src(paths.dist, { read: false }).pipe(clean());
  done();
};

const handleKits = (done) => {
  src(paths.html).pipe(kit()).pipe(dest("./"));
  done();
};

const mainFunctions = parallel(
  handleKits,
  sassCompiler,
  javaScript,
  convertImages
);

export default series(mainFunctions, startBrowserSync, watchForChanges);
export { cleanFile };
