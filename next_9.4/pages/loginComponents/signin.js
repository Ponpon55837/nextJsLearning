import { divStyle, colStyle, cardTitleStyle } from '../../styles/utilStyle.js'
import { ListGroup, Form, Card, Button, Col, Row, Container } from 'react-bootstrap'

const Signin = () => {
  return (
    <>
      <Col xs={12} sm={12} md={12} lg={6} xl={6} style={colStyle}>
        <Card style={divStyle}>
          <Card.Header style={cardTitleStyle}>Regist</Card.Header>
          <Card.Body>
            <Form>
              <Form.Group controlId="formBasicEmail">
                <Form.Label>Email address</Form.Label>
                <Form.Control type="email" placeholder="Enter email" />
                <Form.Text className="text-muted">
                  We'll never share your email with anyone else.
                </Form.Text>
              </Form.Group>
              <Form.Group controlId="formBasicPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control type="password" placeholder="Password" />
              </Form.Group>
              <Button variant="primary" type="submit">
                Regist
              </Button>
            </Form>
          </Card.Body>
        </Card>
      </Col>
    </>
  )
}

export default Signin
