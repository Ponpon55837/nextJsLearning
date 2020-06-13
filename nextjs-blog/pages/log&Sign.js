import Layout from '../components/layout'
import Head from 'next/head'
import Login from './loginComponents/login.js'
import Signin from './loginComponents/signin.js'
// bootstrap
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import ListGroup from 'react-bootstrap/ListGroup'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import Card from 'react-bootstrap/Card'

const LogandSign = (props, {title = 'Login and Regist Page'}) => {
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
                <Login />
                <Signin />
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

export default LogandSign
