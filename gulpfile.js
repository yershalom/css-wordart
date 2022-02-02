const replace = require("gulp-replace");
const { src, dest } = require("gulp");
const fs = require("fs");

function buildComponent() {
  const styles = fs.readFileSync("./css/styles.css");

  return src(["src/wordart.js"])
    .pipe(replace("<style></style>", `<style>${styles}</style>`))
    .pipe(dest("js/"));
}

exports.buildComponent = buildComponent;
