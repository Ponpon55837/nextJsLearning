import Layout from '../components/MyLayout'
import Head from 'next/head'
// bootstrap
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import ListGroup from 'react-bootstrap/ListGroup'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import Card from 'react-bootstrap/Card'

const divStyle = {
  width:'auto',
  height: 'auto',
}

const colStyle = {
  marginTop: '10px'
}

const cardTitleStyle = {
  background: '#EDBDCA'
}

const Login = (props, {title = 'Login and Regist Page'}) => {
  return (
    <>
      <Head><title>{title}</title></Head>
      <Layout>
        <Container fluid>
          <Row>
            <Col className='d-none d-sm-none d-md-block' md={2} lg={2} xl={2}>
            </Col>
            <Col xs={12} sm={12} md={8} lg={8} xl={8}>
              <Row>
                <Col xs={12} sm={12} md={12} lg={6} xl={6} style={colStyle}>
                  <Card style={divStyle}>
                    <Card.Header style={cardTitleStyle}>Login</Card.Header>
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
                        <Form.Group controlId="formBasicCheckbox">
                          <Form.Check type="checkbox" label="Check me out" />
                        </Form.Group>
                        <Button variant="primary" type="submit">
                          Submit
                        </Button>
                      </Form>
                    </Card.Body>
                  </Card>
                </Col>
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
              </Row>
              <br /><br /><br />
            </Col>
            <Col className='d-none d-sm-none d-md-block' md={2} lg={2} xl={2}></Col>
          </Row>
        </Container>
      </Layout>
    </>
  )
}

export default Login
