import fetch from 'isomorphic-unfetch'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import ListGroup from 'react-bootstrap/ListGroup'

// categories由外部接入，這個值需要由外部接到data後，藉由function return後再重變數傳入
const CategoryJson = ({ categories }) => {
  // API_URL為.env這個檔案中的網址來使用，雖然在這邊並沒有影響，但是如果要使用image這種api匯入的話，就需要指定API_URL
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
          // 如果products不存在，那畫面就顯示Loading...
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
