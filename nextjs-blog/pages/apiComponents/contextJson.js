import fetch from 'isomorphic-unfetch'
import { rowStyle } from '../../styles/utilStyle.js'
import { API_URL } from './functionContextJson.js'
import { Col, Row, ListGroup, Image, Card, Accordion } from 'react-bootstrap'

// courses由外部接入，這個值需要由外部接到data後，藉由function return後再重變數傳入
export const CourseJson = ({ courses }) => {

  console.log(courses)
  return (
    <>
      <Row style={rowStyle}>
        { // if else判斷式，用來避免萬一沒有load到資料時，會報錯，直接顯示loading
          courses ? courses.map(course => (
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
          // 如果products不存在，那畫面就顯示Loading...
          : 'Loading ...'
        }
      </Row>
    </>
  )
}

// products由外部接入，這個值需要由data傳入
export const ProductJson = ({ products }) => {

  console.log(products)
  return (
    <>
      <Row style={rowStyle}>
        { // if else判斷式，用來避免萬一沒有load到資料時，會報錯，直接顯示loading
          products ? products.map(product => (
            <Col xs={12} sm={12} md={12} lg={12} xl={12} key={product.id}>
              <Accordion defaultActiveKey='false'>
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
          // 如果products不存在，那畫面就顯示Loading...
          : 'Loading ...'
        }
      </Row>
    </>
  )
}

// categories由外部接入，這個值需要由外部接到data後，藉由function return後再重變數傳入
export const CategoryJson = ({ categories }) => {

  console.log(categories)
  return (
    <>
      <Row style={rowStyle}>
        { // if else判斷式，用來避免萬一沒有load到資料時，會報錯，直接顯示loading
          categories ? categories.map(category => (
            <Col xs={12} sm={12} md={12} lg={6} xl={6} key={category.id}>
              <ListGroup variant="flush" >
                <ListGroup.Item >
                  {category.name}<br />
                  <cite title="Source Title">{category.created_at}</cite>
                </ListGroup.Item>
              </ListGroup>
            </Col>
          ))
          // 如果products不存在，那畫面就顯示Loading...
          : 'Loading ...'
        }
      </Row>
    </>
  )
}
