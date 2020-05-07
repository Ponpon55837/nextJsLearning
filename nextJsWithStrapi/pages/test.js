import Layout from '../components/MyLayout'
import Link from 'next/link'
import Head from 'next/head'
import fetch from 'isomorphic-unfetch'
// bootstrap
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import ListGroup from 'react-bootstrap/ListGroup'
import Image from 'react-bootstrap/Image'
import Card from 'react-bootstrap/Card'
import Accordion from 'react-bootstrap/Accordion'

const Test = ({courses, products, categories, title = 'Courses show menu'}) => {
  const { API_URL } = process.env
  console.log(courses)
  // 當api抓取到值之後，props把接到的值map進li當中
  // 這裡href為pages/p/[id].js但是後面使用as來代替為api中的id值
  return (
    <>
      <Head><title>{title}</title></Head>
      <Layout>
        <Container fluid>
          <Row>
            <Col xs={0} sm={0} md={1} lg={2} xl={2}>
            </Col>
            <Col xs={12} sm={12} md={10} lg={8} xl={8}>
              <h1>Course shows</h1>
              <Row style={rowStyle}>
                { courses ? courses.map(course => (
                    <Col xs={12} sm={6} md={4} lg={4} xl={3} key={course.id}>
                      <ListGroup variant="flush" >
                        <ListGroup.Item >
                          {course.title}<br />
                          <Image  src={API_URL + course.image.url} rounded fluid /><br />
                          <cite title="Source Title">{course.published}</cite>
                        </ListGroup.Item>
                      </ListGroup>
                    </Col>
                  ))
                  : 'Loading ...'
                }
              </Row><hr />
              <Row style={rowStyle}>
                { products ? products.map(product => (
                    <Col xs={12} sm={12} md={12} lg={12} xl={12} key={product.id}>
                      <Accordion defaultActiveKey={product.id}>
                        <Card>
                          <Accordion.Toggle as={Card.Header} eventKey={product.id}>
                            {product.title}
                          </Accordion.Toggle>
                          <Accordion.Collapse eventKey={product.id}>
                            <Card.Body>
                              {product.description}<br /><br />
                              Price:{product.price}<br />
                              <cite title="Source Title">Quality:{product.quality}</cite>
                            </Card.Body>
                          </Accordion.Collapse>
                        </Card>
                      </Accordion>
                    </Col>
                  ))
                  : 'Loading ...'
                }
              </Row><hr />
              <Row style={rowStyle}>
                { categories ? categories.map(category => (
                    <Col xs={12} sm={12} md={12} lg={6} xl={6} key={category.id}>
                      <ListGroup variant="flush" >
                        <ListGroup.Item >
                          {category.name}<br />
                          <cite title="Source Title">{category.created_at}</cite>
                        </ListGroup.Item>
                      </ListGroup>
                    </Col>
                  ))
                  : 'Loading'
                }
              </Row>
            </Col>
            <Col xs={0} sm={0} md={1} lg={2} xl={2}></Col>
          </Row>
        </Container>
      </Layout>
    </>
  )
}

export async function getStaticProps () {
  const { API_URL } = process.env

  const res_course = await fetch(`${API_URL}/courses`)
  const res_product = await fetch(`${API_URL}/products`)
  // 只抓取特定頁面的話可以用/categories?_start=4&limit=1
  const res_category = await fetch(`${API_URL}/categories`)

  const data_course = await res_course.json()
  const data_product = await res_product.json()
  const data_category = await res_category.json()


  return {
    props: {
      courses: data_course ,
      products: data_product ,
      categories: data_category
    }
  }
}

const rowStyle = {
  paddingButtom: '1rem'
}

export default Test
