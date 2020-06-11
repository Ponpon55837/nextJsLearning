import Link from 'next/link'
import Head from 'next/head'
import HeaderJson from './apiComponents/headerJson.js'
import { getIndexHelloNextJs } from './apiComponents/functionContextJson.js'
import Layout from '../components/layout'
import utilStyles from '../styles/utils.module.css'
// bootstrap
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import ListGroup from 'react-bootstrap/ListGroup'

const Blog = ({headers, title = 'Blog Page'}) => {
  const { API_URL } = process.env
  return (
    <>
      <Head><title>{title}</title></Head>
      <Layout>
        <Container fluid>
          <Row>
            <Col className='d-none d-sm-none d-md-block' md={2} lg={2} xl={2}>
              <HeaderJson headers={headers} />
            </Col>
            <Col xs={12} sm={12} md={10} lg={8} xl={8}>
              <h1>My Blog</h1>
              {
                getIndexHelloNextJs() ? getIndexHelloNextJs().map(post => (
                  <ListGroup variant="flush" key={post.id}>
                    <ListGroup.Item>
                      <PostLink key={post.id} post={post} />
                    </ListGroup.Item>
                  </ListGroup>
                )) : 'Loading...'
              }
            </Col>
            <Col className='d-none d-sm-none d-md-none d-lg-block' lg={2} xl={2}></Col>
          </Row>
        </Container>
      </Layout>
    </>
  )
}

// 當作額外插入的link來使用，這裡面的post.id，post.title都是藉由被map進來的post值使用
const PostLink = ({ post }) => (
    <Link href="/batman/[id]" as={`/batman/${post.id}`}>
      <a>{post.title}</a>
    </Link>
)

// 我覺得這部分應該可以額外拉到一個components裡面去寫，再由import進來
// 例如 import { getStaticProps } from './components/StaticProps.js'
// 然後由上面的 const Index = ({ header }) => {}把data值丟進來。
export const getStaticProps = async () => {
  const { API_URL } = process.env
  const res_headers = await fetch(`${API_URL}/headers`)
  const data_headers = await res_headers.json()

  return {
    props: {
      headers: data_headers
    }
  }
}

export default Blog
