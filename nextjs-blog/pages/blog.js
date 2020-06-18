import Head from 'next/head'
import HeaderJson from './apiComponents/headerJson.js'
import { getIndexHelloNextJs, API_URL, PostLink } from './apiComponents/functionContextJson.js'
import Layout from '../components/layout'
import utilStyles from '../styles/utils.module.css'
// bootstrap
import { ListGroup, Col, Row, Container } from 'react-bootstrap'

const Blog = ({headers, title = 'Blog Page'}) => {
  // 如果要使用圖片的話需要在這邊寫入如下面這行
  // const { API_URL } = process.env
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

// 我覺得這部分應該可以額外拉到一個components裡面去寫，再由import進來
// 例如 import { getStaticProps } from './components/StaticProps.js'
// 然後由上面的 const Index = ({ header }) => {}把data值丟進來。
// API_URL由外部匯入，使用可以重複使用
export const getStaticProps = async () => {
  const res_headers = await fetch(`${API_URL}/headers`)
  const data_headers = await res_headers.json()

  return {
    props: {
      headers: data_headers
    }
  }
}

export default Blog
