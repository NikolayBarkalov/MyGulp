module.exports = {
  htmlmin: {
    collapseWhitespace: true // СЖАТИЕ HTML true/false
  },

  pug: {
    pretty: true, // СЖАТИЕ PUG true/false
    data: {
      news: require('../data/news.json')
    }
  },

  webpack: {
    mode: "development" // development - разработка, production -сжатие т.е режим продакш.
  }
}