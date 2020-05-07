import Layout from '../components/MyLayout'
import Link from 'next/link'
import Head from 'next/head'
import fetch from 'isomorphic-unfetch'
// bootstrap
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import ListGroup from 'react-bootstrap/ListGroup'

const Index = ({headers, title = 'Index Title Page'}) => {
  const { API_URL } = process.env
  return (
    <>
      <Head><title>{title}</title></Head>
      <Layout>
        <Container fluid>
          <Row>
            <Col className='d-none d-sm-none d-md-block' md={2} lg={2} xl={2}>
              <ListGroup variant="flush">
                <ListGroup.Item>
                  {
                    headers ? headers.map(header => (
                      <Link href={header.url} key={header.id}>
                        <a className="nav-item nav-link" style={wordCapitalize}>{header.title}</a>
                      </Link>
                    ))
                    : 'Loading ...'
                  }
                </ListGroup.Item>
              </ListGroup>
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
            <Col xs={0} sm={0} md={0} lg={2} xl={2}></Col>
          </Row>
        </Container>
      </Layout>
    </>
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

export async function getStaticProps () {
  const { API_URL } = process.env

  const res_headers = await fetch(`${API_URL}/headers`)

  const data_headers = await res_headers.json()

  return {
    props: {
      headers: data_headers
    }
  }
}

const listGroupStyle = {
  padding: '8px'
}

const wordCapitalize = {
  textTransform: "capitalize"
}

export default Index
