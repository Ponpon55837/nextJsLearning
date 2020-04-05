import Layout from '../components/MyLayout'
import Link from 'next/link'

// 把title用``的方式放入 這邊的PostLink就是一個放入連結的模板
// 使用props把從外部塞入的內容接入
const PostLink = (props) => (
  <li>
    <Link href={`/post?title=${props.title}`}>
      <a>{props.title}</a>
    </Link>
  </li>
)

const Blog = () => {
  return (
    <Layout>
      <h1>My Blog</h1>
      <ul>
        <PostLink title="Hello Next.js" />
        <PostLink title="Learn Next.js is awesome" />
        <PostLink title="Deploy apps with Zeit" />
      </ul>
    </Layout>
  )
}

export default Blog
