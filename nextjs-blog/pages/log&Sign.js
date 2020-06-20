import Layout from '../components/layout'
import Head from 'next/head'
import Login from './loginComponents/login.js'
import Signin from './loginComponents/signin.js'
import { pageDescription } from './apiComponents/functionContextJson.js'
// bootstrap
import { Col, Row, Container } from 'react-bootstrap'

const LogandSign = (props, {title = 'Login and Regist Page'}) => {
  return (
    <>
      <Head>
        <title>{title}</title>
        <meta property="og:description" content={ pageDescription() }/>
      </Head>
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
