import fetch from 'isomorphic-unfetch'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import ListGroup from 'react-bootstrap/ListGroup'
import Image from 'react-bootstrap/Image'

// courses由外部接入，這個值需要由外部接到data後，藉由function return後再重變數傳入
const CourseJson = ({ courses }) => {
  // API_URL為.env這個檔案中的網址來使用，雖然在這邊並沒有影響，但是如果要使用image這種api匯入的話，就需要指定API_URL
  const { API_URL } = process.env
  console.log(courses)
  return (
    <>
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
          // 如果products不存在，那畫面就顯示Loading...
          : 'Loading ...'
        }
      </Row>
    </>
  )
}

const rowStyle = {
  paddingButtom: '1rem'
}

export default CourseJson
