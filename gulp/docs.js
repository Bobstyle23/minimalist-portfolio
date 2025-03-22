const gulp = require("gulp");
const fileInclude = require("gulp-file-include");
const sass = require("gulp-sass")(require("sass"));
const serverReload = require("gulp-server-livereload");
const clean = require("gulp-clean");
const fs = require("fs");
const sourceMaps = require("gulp-sourcemaps");
const plumber = require("gulp-plumber");
const notify = require("gulp-notify");
const webpack = require("webpack-stream");
const babel = require("gulp-babel");
const imagemin = require("gulp-imagemin");
const sassGlob = require("gulp-sass-glob");
const groupMedia = require("gulp-group-css-media-queries");
const changed = require("gulp-changed");
const csso = require("gulp-csso");
const htmlclean = require("gulp-htmlclean");
const autoprefixer = require("gulp-autoprefixer");
const replace = require("gulp-replace");
const typograf = require("gulp-typograf");
const svgSprite = require("gulp-svg-sprite");
const webpHTML = require("gulp-webp-retina-html");
const extReplace = require("gulp-ext-replace");
const imageminWebp = require("imagemin-webp");
const { svgSymbol, svgStack } = require("../utilities.js");

const notificationConfig = (title) => {
  return {
    errorHandler: notify.onError({
      title: `${title}`,
      message: `error <%= error.message %>`,
      sound: false,
    }),
  };
};

// NOTE: include html files into main html
gulp.task("html:docs", () => {
  return gulp
    .src(["./src/html/**/*.html", "!./src/components/*.html"])
    .pipe(changed("./docs/html/"))
    .pipe(plumber(notificationConfig("HTML")))
    .pipe(
      fileInclude({
        prefix: "@@",
        basepath: "@file",
      }),
    )

    .pipe(
      replace(
        /(?<=src=|href=|srcset=)(['"])(\.(\.)?\/)*(img|images|fonts|css|scss|sass|js|files|audio|video)(\/[^\/'"]+(\/))?([^'"]*)\1/gi,
        "$1./$4$5$7$1",
      ),
    )
    .pipe(
      typograf({
        locale: ["ru", "en-US"],
        htmlEntity: { type: "digit" },
        safeTags: [
          ["<\\?php", "\\?>"],
          ["<no-typography>", "</no-typography>"],
        ],
      }),
    )
    .pipe(
      webpHTML({
        extensions: ["jpg", "jpeg", "png", "gif", "webp"],
        retina: {
          1: "",
          2: "@2x",
          3: "@3x",
          4: "@4x",
        },
      }),
    )
    .pipe(htmlclean())
    .pipe(gulp.dest("./docs/"));
});

// NOTE: compile SASS
gulp.task("sass:docs", () => {
  return gulp
    .src("./src/styles/**/*.scss")
    .pipe(changed("./docs/css/"))
    .pipe(plumber(notificationConfig("SASS")))
    .pipe(sourceMaps.init())
    .pipe(autoprefixer())
    .pipe(sassGlob())
    .pipe(
      replace(
        /(['"]?)(\.\.\/)+(img|images|fonts|css|scss|sass|js|files|audio|video)(\/[^\/'"]+(\/))?([^'"]*)\1/gi,
        "$1$2$3$4$6$1",
      ),
    )
    .pipe(groupMedia())
    .pipe(sass().on("error", sass.logError))
    .pipe(csso())
    .pipe(sourceMaps.write())
    .pipe(gulp.dest("./docs/css/"));
});

// NOTE: copy images to docs

gulp.task("images:docs", function () {
  return gulp
    .src(["./src/img/**/*", "!./src/img/svgicons/**/*"], { encoding: false })
    .pipe(changed("./docs/img/"))
    .pipe(
      imagemin([
        imageminWebp({
          quality: 85,
        }),
      ]),
    )
    .pipe(extReplace(".webp"))
    .pipe(gulp.dest("./docs/img/"))
    .pipe(gulp.src("./src/img/**/*"))
    .pipe(changed("./docs/img/"))
    .pipe(
      imagemin(
        [
          imagemin.gifsicle({ interlaced: true }),
          imagemin.mozjpeg({ quality: 85, progressive: true }),
          imagemin.optipng({ optimizationLevel: 5 }),
        ],
        { verbose: true },
      ),
    )
    .pipe(gulp.dest("./docs/img/"));
});

// gulp.task("images:docs", () => {
//   return gulp
//     .src("./src/img/**/*", "!./src/img/svgicons/**/*", { encoding: false })
//     .pipe(changed("./docs/img/"))
//     .pipe(
//       imagemin([
//         imageminWebp({
//           quality: 85,
//         }),
//       ]),
//     )
//     .pipe(extReplace(".webp"))
//     .pipe(gulp.dest("./docs/img/"))
//     .pipe(gulp.src("./src/img/**/*"))
//     .pipe(changed("./docs/img/"))
//     .pipe(gulp.dest("./docs/img/"));
// });

// NOTE: svg stack
gulp.task("svgStack:docs", function () {
  return gulp
    .src("./src/img/svgicons/**/*.svg")
    .pipe(plumber(notificationConfig("SVG:dev")))
    .pipe(svgSprite(svgStack))
    .pipe(gulp.dest("./docs/img/svgsprite/"));
});

// NOTE: svg symbol
gulp.task("svgSymbol:docs", function () {
  return gulp
    .src("./src/img/svgicons/**/*.svg")
    .pipe(plumber(notificationConfig("SVG:dev")))
    .pipe(svgSprite(svgSymbol))
    .pipe(gulp.dest("./docs/img/svgsprite/"));
});

// NOTE: copy fonts to docs
gulp.task("fonts:docs", () => {
  return gulp
    .src("./src/fonts/**/*")
    .pipe(changed("./docs/fonts/"))
    .pipe(gulp.dest("./docs/fonts/"));
});

// NOTE: copy files to docs
gulp.task("files:docs", () => {
  return gulp
    .src("./src/files/**/*")
    .pipe(changed("./docs/files/"))
    .pipe(gulp.dest("./docs/files/"));
});

// NOTE: js files
gulp.task("js:docs", () => {
  return gulp
    .src("./src/js/*.js")
    .pipe(changed("./docs/js"))
    .pipe(plumber(notificationConfig("JavaScript")))
    .pipe(babel())
    .pipe(webpack(require("./../webpack.config.js")))
    .pipe(gulp.dest("./docs/js"));
});

// NOTE: starts server
gulp.task("server:docs", () => {
  return gulp.src("./docs/").pipe(
    serverReload({
      livereload: true,
      open: true,
    }),
  );
});

// NOTE: clean docs folder
gulp.task("clean:docs", (callback) => {
  if (fs.existsSync("./docs/")) {
    return gulp.src("./docs/", { read: false }).pipe(clean({ force: true }));
  }
  callback();
});
