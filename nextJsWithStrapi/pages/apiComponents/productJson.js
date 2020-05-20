import fetch from 'isomorphic-unfetch'
import Accordion from 'react-bootstrap/Accordion'
import Card from 'react-bootstrap/Card'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

// products由外部接入，這個值需要由data傳入
const ProductJson = ({ products }) => {
  // API_URL為.env這個檔案中的網址來使用，雖然在這邊並沒有影響，但是如果要使用image這種api匯入的話，就需要指定API_URL
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
          // 如果products不存在，那畫面就顯示Loading...
          : 'Loading ...'
        }
      </Row>
    </>
  )
}

// accondion多層寫法
// 不過這樣寫的複雜度很高，不建議使用
// <Accordion defaultActiveKey='false'>
//   <Card>
//     <Accordion.Toggle as={Card.Header} eventKey={productfirst.id}>
//       {productfirst.title}
//     </Accordion.Toggle>
//     <Accordion.Collapse eventKey={productfirst.id}>
//       <Card.Body>
//       <Accordion defaultActiveKey='false'>
//         <Card>
//           <Accordion.Toggle as={Card.Header} eventKey={productSecond.id}>
//             {productSecond.title}
//           </Accordion.Toggle>
//           <Accordion.Collapse eventKey={productSecond.id}>
//             <Card.Body>
//               {product.description}<br /><br />
//               Price:{product.price}<br />
//               <cite title="Source Title">Quality:{product.quality}</cite>
//             </Card.Body>
//           </Accordion.Collapse>
//         </Card>
//       </Accordion>
//       </Card.Body>
//     </Accordion.Collapse>
//   </Card>
// </Accordion>

const rowStyle = {
  paddingButtom: '1rem'
}

export default ProductJson
