const gulp = require("gulp");
const fs = require("fs");
const plumber = require("gulp-plumber");
const notify = require("gulp-notify");
const fonter = require("gulp-fonter-fix");
const ttf2woff2 = require("gulp-ttf2woff2");

const { getFontWeight } = require("../utilities.js");

const srcFolder = "./src";
const destFolder = "./build";

gulp.task("otfToTtf", () => {
  return gulp
    .src(`${srcFolder}/fonts/*.otf`, {})
    .pipe(
      fonter({
        formats: ["ttf"],
      }),
    )
    .pipe(gulp.dest(`${srcFolder}/fonts/`))
    .pipe(
      plumber(
        notify.onError({
          title: "FONTS",
          message: "Error: <%= error.message %>. File: <%= file.relative %>!",
        }),
      ),
    );
});

gulp.task("ttfToWoff", () => {
  return gulp
    .src(`${srcFolder}/fonts/*.ttf`, {})
    .pipe(
      fonter({
        formats: ["woff"],
      }),
    )
    .pipe(gulp.dest(`${destFolder}/fonts/`))
    .pipe(gulp.src(`${srcFolder}/fonts/*.ttf`))
    .pipe(ttf2woff2())
    .pipe(gulp.dest(`${destFolder}/fonts/`))
    .pipe(
      plumber(
        notify.onError({
          title: "FONTS",
          message: "Error: <%= error.message %>",
        }),
      ),
    );
});

gulp.task("fontsStyle", (done) => {
  let fontsFile = `${srcFolder}/styles/sass/base/_fonts.scss`;
  let fontsDir = `${destFolder}/fonts/`;

  fs.readdir(fontsDir, (err, fontsFiles) => {
    if (err) {
      console.error("Error reading fonts directory:", err);
      return done();
    }

    if (fontsFiles && fontsFiles.length > 0) {
      let fontStyles = [];
      let processedFonts = new Set();

      fontsFiles.forEach((file) => {
        let fontFileName = file.split(".")[0];
        if (!processedFonts.has(fontFileName)) {
          processedFonts.add(fontFileName);

          let [fontName, fontWeight] = fontFileName.split("-");
          fontName = fontName || fontFileName;
          fontWeight = getFontWeight(fontWeight);

          fontStyles.push(
            `@font-face {
  font-family: "${fontName}";
  font-display: swap;
  src: url("../fonts/${fontFileName}.woff2") format("woff2"),
       url("../fonts/${fontFileName}.woff") format("woff");
  font-weight: ${fontWeight};
  font-style: normal;
}`,
          );
        }
      });

      fs.writeFile(fontsFile, fontStyles.join("\n\n"), (err) => {
        if (err) console.error("Error writing font styles:", err);
        done();
      });
    } else {
      done();
    }
  });
});

gulp.task("fonts.dev", gulp.series("otfToTtf", "ttfToWoff", "fontsStyle"));
