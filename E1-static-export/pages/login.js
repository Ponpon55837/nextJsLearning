import Layout from '../components/MyLayout'
// bootstrap
import Card from 'react-bootstrap/Card'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

const divStyle = {
  width:'auto',
  height: 'auto',
}

const colStyle = {
  marginTop: '10px'
}

const cardTitleStyle = {
  background: '#FBF1F8'
}

const Login = (props) => {
  return (
    <Layout>
      <Container>
        <Row>
          <Col sm={6} style={colStyle}>
            <Card style={divStyle}>
              <Card.Header style={cardTitleStyle}>Login</Card.Header>
              <Card.Body>
                <form>
                  <div className="form-group">
                    <label for="exampleInputEmail1">Email address</label>
                    <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email" />
                    <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small>
                  </div>
                  <div className="form-group">
                    <label for="exampleInputPassword1">Password</label>
                    <input type="password" className="form-control" id="exampleInputPassword1" placeholder="Password" />
                  </div>
                  <div className="form-check">
                    <input type="checkbox" className="form-check-input" id="exampleCheck1" />
                    <label className="form-check-label" for="exampleCheck1">Check me out</label>
                  </div>
                  <button type="submit" className="btn btn-primary">Login</button>
                </form>
              </Card.Body>
            </Card>
          </Col>
          <Col sm={6} style={colStyle}>
            <Card style={divStyle}>
              <Card.Header style={cardTitleStyle}>Regist</Card.Header>
              <Card.Body>
                <form>
                  <div className="form-group">
                    <label for="exampleInputEmail1">Email address</label>
                    <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email" />
                    <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small>
                  </div>
                  <div className="form-group">
                    <label for="exampleInputPassword1">Password</label>
                    <input type="password" className="form-control" id="exampleInputPassword1" placeholder="Password" />
                  </div>
                  <button type="submit" className="btn btn-primary">Regist</button>
                </form>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </Layout>
  )
}

export default Login
