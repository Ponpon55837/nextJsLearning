import fetch from 'isomorphic-unfetch'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import ListGroup from 'react-bootstrap/ListGroup'
import Image from 'react-bootstrap/Image'

const CourseJson = ({ courses }) => {
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
