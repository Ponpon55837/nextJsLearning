import quotes from '../../quotes.json';

// 使用random的數學函式，隨機顯示quote內容
const API = (req, res) => {
  const quote = quotes[Math.floor(Math.random() * quotes.length)];
  res.status(200).json(quote);
}

export default API

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
