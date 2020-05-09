import fetch from 'isomorphic-unfetch'
import Accordion from 'react-bootstrap/Accordion'
import Card from 'react-bootstrap/Card'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

const ProductJson = ({ products }) => {
  const { API_URL } = process.env
  console.log(products)
  return (
    <>
      <Row style={rowStyle}>
        { products ? products.map(product => (
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
          : 'Loading ...'
        }
      </Row>
    </>
  )
}

const rowStyle = {
  paddingButtom: '1rem'
}

export default ProductJson
