const { quotes } = require('../utils/quotes');

exports.getRandomQuote = async function(req, res) {
  res.send({quote: quotes[Math.floor(Math.random() * quotes.length)]});
}

module.exports = exports;