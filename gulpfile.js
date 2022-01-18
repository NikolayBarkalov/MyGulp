const {src, dest, watch, series, parallel } = require("gulp");

// Плагины
const fileInclude = require("gulp-file-include");
const htmlmin = require("gulp-htmlmin");
const size = require("gulp-size");


//Обработка HTML
const html = () => {
  return src("./src/html/*.html")
    .pipe(fileInclude())
    .pipe(size({ title: "До сжатия" }))
    .pipe(htmlmin({
      collapseWhitespace: true // Убрать все лишние сим. разметки
    }))
    .pipe(size({ title: "После сжатия" }))
    .pipe(dest("./public"));
}

// Наблюдение
const watcher = () => {
  watch("./src/html/**/*.html", html);
}

// Задачи 
exports.html = html;
exports.watch = watcher;

// Сборка
exports.dev = series(
  html,
  watcher
)