import useSWR from 'swr'

const fetcher = (url) => {
  return(
    fetch(url).then(r => r.json())
  )
}

const Index = () => {
  // 使用swr把api資料夾中的randomQuote function用進來
  // 並且使用 data跟error承接內容
  const { data, error } = useSWR('/api/randomQuote', fetcher)
  const author = data?.author;
  let quote = data?.quote;

  if (!data) quote = 'Loading...'
  if (error) quote = 'Failed to fetch the quote.'

  return (
    <main className="center" style={mainStyle}>
      <div className="quote" style={quoteStyle}>{quote}</div>
      {author && <span className="author" style={authorStyle}>- {author}</span>}
    </main>
  )
}

export default Index

const mainStyle = {
  width: "90%",
  maxWidth: "900px",
  margin: "300px auto",
  textAlign: "center",
}

const quoteStyle = {
  fontFamily: "cursive",
  color: "#e243de",
  fontSize: "24px",
  paddingBottom: "10px",
}

const authorStyle = {
  fontFamily: "sans-serif",
  color: "#559834",
  fontSize: "20px",
}
