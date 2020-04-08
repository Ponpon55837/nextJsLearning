import allQuotes from '../../quotes.json'

const API = (req, res) => {
  const { author } = req.query;
  let quotes = allQuotes;

  if (author) {
    quotes = quotes.filter(quote => quote.author.toLowerCase().includes(author.toLowerCase()))
  }
  if (!quotes.length) {
    quotes = allQuotes.filter(quote => quote.author.toLowerCase() === 'unknown')
  }

  const quote = quotes[Math.floor(Math.random() * quotes.length)]

  res.status(200).json(quote)
}

export default API

// import quotes from '../../quotes.json';
//
// // 使用random的數學函式，隨機顯示quote內容
// const API = (req, res) => {
//   const quote = quotes[Math.floor(Math.random() * quotes.length)];
//   res.status(200).json(quote);
// }
//
// export default API

// const API = (req, res) => {
//   return (
//     res.status(200).json({
//       quote: 'Write tests, not too many, mostly integration',
//       author: 'Guillermo Rauch'
//     })
//   )
// }
//
// export default API
