import fetch from 'isomorphic-unfetch'
import { rowStyle, wordStyle } from '../../styles/utilStyle.js'
import utilStyle from '../../styles/utils.module.css'
import { API_URL } from './functionContextJson.js'
import { Col, Row, ListGroup, Image, Card, Accordion } from 'react-bootstrap'

// courses由外部接入，這個值需要由外部接到data後，藉由function return後再重變數傳入
export const CourseJson = ({ courses }) => {

  // console.log(courses)
  return (
    <>
      <Row style={rowStyle} className='my-2'>
        { // 如果products不存在，那畫面就顯示Loading...
          !courses ? 'Loading ...' :
          // if else判斷式，用來避免萬一沒有load到資料時，會報錯，直接顯示loading
          courses.map(course => (
            <Col xs={12} sm={6} md={4} lg={4} xl={3} key={course.id} className='my-2'>
              <ListGroup variant="flush">
                <ListGroup.Item className={`bg-light ${utilStyle.courseListGroupItem}`}>
                  <div className={utilStyle.courseDiv}>{course.title}</div><br />
                  <Image className={utilStyle.courseIMG} src={ !(API_URL + course.image.url) ? null : API_URL + course.image.url } rounded fluid /><br />
                  <cite title="Source Title">{
                    new Date(course.published).toLocaleString()}</cite>
                </ListGroup.Item>
              </ListGroup>
            </Col>
          ))
        }
      </Row>
    </>
  )
}

// products由外部接入，這個值需要由data傳入
export const ProductJson = ({ products }) => {
  // console.log(products)
  return (
    <>
      <Row style={rowStyle} className='my-2'>
        { // 如果products不存在，那畫面就顯示Loading...
          !products ? 'Loading ...' :
          // if else判斷式，用來避免萬一沒有load到資料時，會報錯，直接顯示loading
          products.map(product => (
            <Col xs={12} sm={12} md={12} lg={6} xl={4} key={product.id} className='my-2'>
              <Accordion defaultActiveKey={product.id}>
                <Card>
                  <Accordion.Toggle as={Card.Header} eventKey={product.id}>
                    {product.title}
                  </Accordion.Toggle>
                  <Accordion.Collapse eventKey={product.id}>
                    <Card.Body style={wordStyle}>
                      {product.description}<br /><br />
                      {
                        // 判斷式先去看在product底下categories下面的陣列存不存在，使用[0]代表這個陣列的第一項，因為每一個product底下的categories都是獨立存在的，所以除非有同一個product.categories下面有一個以上陣列才要用0以上的數字
                        // 如果陣列不存在清空位置，存在的話才顯示內容
                        console.log(product.categories[0].id),
                        !product.categories[0].id ? null :
                        `Price: ` + product.price }<br />
                      {
                        !product.categories[0].id ? null :
                        `Category: ` + product.categories[0].name }<br />
                      { !product.categories[0].id ? null :
                        `Quality: ` + product.quality }<br />
                      {
                        // 判斷式要被包含不然判斷會錯誤或是失效
                        !(product.categories[0].id == 1) ? null :
                        `Create_at: ` + new Date(product.categories[0].created_at).toLocaleString() }
                    </Card.Body>
                  </Accordion.Collapse>
                </Card>
              </Accordion>
            </Col>
          ))
        }
      </Row>
    </>
  )
}

// categories由外部接入，這個值需要由外部接到data後，藉由function return後再重變數傳入
export const CategoryJson = ({ categories }) => {

  // console.log(categories)
  return (
    <>
      <Row style={rowStyle} className='my-3'>
        {
          // 如果products不存在，那畫面就顯示Loading...
          !categories ? 'Loading ...' :
          // if else判斷式，用來避免萬一沒有load到資料時，會報錯，直接顯示loading
          categories.map(category => (
            <Col xs={12} sm={6} md={4} lg={4} xl={4} key={category.id} className='my-2'>
              <ListGroup variant="flush" >
                <ListGroup.Item className='bg-light'>
                  {category.name}<br />
                  <cite title="Source Title">{
                    new Date(category.created_at).toLocaleString()}</cite>
                </ListGroup.Item>
              </ListGroup>
            </Col>
          ))
        }
      </Row>
    </>
  )
}
