import { useRouter } from 'next/router'
import useSWR from 'swr'
// css style 全都使用js進行書寫，額外嵌入避免畫面太多混雜的資訊
import { mainStyle, quoteStyle, authorStyle } from './css/JsToCSS'

const fetcher = (url) => {
  return (
    fetch(url).then(r => r.json())
  )
}

const Index = () => {
  const { query } = useRouter()
  // 使用useSWR把data跟error解構為query接到的api/randomQuote接到的內容
  const { data, error } = useSWR(
    `/api/randomQuote${query.author ? '?author=' + query.author : ''}`,
    fetcher
  )
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
