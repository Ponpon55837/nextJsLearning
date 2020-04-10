import { useRouter } from 'next/router'
// 用來顯示 `` 中的內容，使用markdown的css標籤來做為外觀調整
import Markdown from 'react-markdown'
import Layout from '../../components/MyLayout'

const IdPost = () => {
  const router = useRouter()
  return (
    <Layout>
      <h1>{router.query.id}</h1>
      <div className="markdown">
        <Markdown
          source={`This is our blog post.Yes. We can have a [link](/link).And we can have a title as well.### This is a title And here's the content.`}
        />
      </div>
      <style jsx global>
        {`
          .markdown {
            font-family: 'Arial';
          }

          .markdown a {
            text-decoration: none;
            color: blue;
          }

          .markdown a:hover {
            opacity: 0.6;
          }

          .markdown h3 {
            margin: 0;
            padding: 0;
            text-transform: uppercase;
          }
        `}
      </style>
    </Layout>
  )
}
export default IdPost

// import Layout from '../../components/MyLayout'
// import fetch from 'isomorphic-unfetch'
//
// // 這裡props作爲接收api內容的銜接變數
// const Post = (props) => {
//   return (
//     <Layout>
//       <h1>{props.show.name}</h1>
//       <p>{props.show.summary.replace(/<[/]?[pb]>/g, '')}</p>
//       {props.show.image ? <img src={props.show.image.medium} /> : null}
//     </Layout>
//   )
// }
//
// // 藉由fetch來抓取api中對應的id頁面並將值接入
// Post.getInitialProps = async function(context) {
//   // 解構id這個變數為context接到的全部內容底下的query值
//   const { id } = context.query
//   const res = await fetch(`https://api.tvmaze.com/shows/${id}`)
//   const show = await res.json()
//
//   console.log(`Fetched show: ${show.name}`)
//
//   return { show }
// }
//
// export default Post
