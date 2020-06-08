import Layout from '../components/MyLayout'
import Link from 'next/link'
import fetch from 'isomorphic-unfetch'

const Index = (props) => {
  // 當api抓取到值之後，props把接到的值map進li當中
  return (
    <Layout>
      <h1>Batman TV Shows</h1>
      <ul>
        {props.shows.map( show => (
          <li key={show.id}>
            <Link href="/p/[id]" as={`/p/${show.id}`}>
              <a>{show.name}</a>
            </Link>
          </li>
        ))}
      </ul>
    </Layout>
  )
}

// 使用非同步的方式讀取json的內容
Index.getInitialProps = async function() {
  // 使用fetch來抓取api中的值
  const res = await fetch('https://api.tvmaze.com/search/shows?q=batman')
  // 指定變數data來非同步這個api值
  const data = await res.json()
  // 回報抓到幾個data值
  console.log(`Show data fetched. Count: ${data.length}`)

  return {
    // 使用map來把值塞入，並且使用變數entry當作主詞來附帶api中的內容
    shows: data.map(entry => entry.show)
  }
}

export default Index
