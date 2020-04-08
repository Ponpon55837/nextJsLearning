import Layout from '../../components/MyLayout'
import fetch from 'isomorphic-unfetch'

// 這裡props作爲接收api內容的銜接變數
const Post = (props) => {
  return (
    <Layout>
      <h1>{props.show.name}</h1>
      <p>{props.show.summary.replace(/<[/]?[pb]>/g, '')}</p>
      {props.show.image ? <img src={props.show.image.medium} /> : null}
    </Layout>
  )
}

// 藉由fetch來抓取api中對應的id頁面並將值接入
Post.getInitialProps = async function(context) {
  const { id } = context.query
  const res = await fetch(`https://api.tvmaze.com/shows/${id}`)
  const show = await res.json()

  console.log(`Fetched show: ${show.name}`)

  return { show }
}

export default Post
