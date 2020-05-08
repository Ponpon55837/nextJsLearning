import fetch from 'isomorphic-unfetch'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import ListGroup from 'react-bootstrap/ListGroup'

const CategoryJson = ({ categories }) => {
  const { API_URL } = process.env
  console.log(categories)
  return (
    <>
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
    </>
  )
}

const rowStyle = {
  paddingButtom: '1rem'
}

export default CategoryJson
