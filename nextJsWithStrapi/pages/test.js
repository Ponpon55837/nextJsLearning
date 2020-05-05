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

const Test = ({courses, categories, title = 'Courses show menu'}) => {
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
              <Row>
                {
                  courses.map(course => (
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
                }
              </Row><br /><br />
              <Row>
                {
                  categories.map(category => (
                    <Col xs={12} sm={12} md={12} lg={6} xl={6} key={category.id}>
                      <ListGroup variant="flush" >
                        <ListGroup.Item >
                          {category.name}<br />
                          <cite title="Source Title">{category.created_at}</cite>
                        </ListGroup.Item>
                      </ListGroup>
                    </Col>
                  ))
                }
              </Row><br /><br />
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
  const res_category = await fetch(`${API_URL}/categories`)

  const data_course = await res_course.json()
  const data_category = await res_category.json()


  return {
    props: {
      courses: data_course ,
      categories: data_category
    }
  }
}

const imagStyle = {
  width: "13rem",
  height: 'auto'
}

export default Test
