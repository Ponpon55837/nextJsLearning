import Layout from '../components/MyLayout'
import Link from 'next/link'
import ListGroup from 'react-bootstrap/ListGroup'


const Index = () => {
  return (
    <Layout>
      <h1>My Blog</h1>
      {
        getPosts().map(post => (
          <ListGroup variant="flush" key={post.id}>
            <ListGroup.Item>
              <PostLink key={post.id} post={post} />
            </ListGroup.Item>
          </ListGroup>
        ))
      }
    </Layout>
  )
}

// 使用function作爲api承接內容，在上方的return中map接到的值
const getPosts = () => {
  return [
    { id: 'hello-nextjs', title: 'Hello Next.js' },
    { id: 'learn-nextjs', title: 'Learn Next.js is awesome' },
    { id: 'deploy-nextjs', title: 'Deploy apps with ZEIT' }
  ]
}

// 當作額外插入的link來使用，這裡面的post.id，post.title都是藉由被map進來的post值使用
const PostLink = ({ post }) => (
    <Link href="/batman/[id]" as={`/batman/${post.id}`}>
      <a>{post.title}</a>
    </Link>
)

export default Index
