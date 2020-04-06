import Layout from '../components/MyLayout'
import Link from 'next/link'

// 把title用``的方式放入 這邊的PostLink就是一個放入連結的模板
// 使用props把從外部塞入的內容接入
// href透過變數的方式來使用，使用as來塞入從外部接入的props id值
const PostLink = (props) => (
  <li>
    <Link href="/p/[id]" as={`/p/${props.id}`}>
     <a>{props.id}</a>
    </Link>
  </li>
)

// add multiple links that use our new dynamic route
const Blog = () => {
  return (
    <Layout>
      <h1>My Blog</h1>
      <ul>
        <PostLink id="hello-nextjs" />
        <PostLink id="learn-nextjs" />
        <PostLink id="deploy-nextjs" />
      </ul>
    </Layout>
  )
}

export default Blog
