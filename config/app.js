module.exports = {
  htmlmin: {
    collapseWhitespace: true // СЖАТИЕ HTML true/false
  },

  pug: {
    pretty: true, // СЖАТИЕ PUG true/false
    data: {
      news: require('../data/news.json')
    }
  }
}