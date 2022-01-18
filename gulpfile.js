const {src, dest } = require("gulp");


//Обработка HTML
const html = () => {
  return src("./src/html/index.html")
  .pipe(dest("./public"))
};

//Задачи 
exports.html = html;