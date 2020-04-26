import Layout from '../components/MyLayout'
import Link from 'next/link'
// bootstrap
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import ListGroup from 'react-bootstrap/ListGroup'

const Index = () => {
  return (
    <Layout>
      <Container>
        <Row>
          <Col xs={0} sm={0} md={1} lg={2} xl={2}>
          </Col>
          <Col xs={12} sm={12} md={10} lg={8} xl={8}>
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
          </Col>
          <Col xs={0} sm={0} md={1} lg={2} xl={2}></Col>
        </Row>
      </Container>
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
