const {src, dest } = require("gulp");


//Обработка HTML
const html = () => {
  return src("./src/html/*.html")
  .pipe(dest("./public"))
};

//Задачи 
exports.html = html;