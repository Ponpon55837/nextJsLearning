import Layout from '../components/layout'
import Head from 'next/head'
import Login from './loginComponents/login.js'
import Signin from './loginComponents/signin.js'
import { titleDescription, pageDescription } from './apiComponents/functionContextJson.js'
// bootstrap
import { Col, Row, Container } from 'react-bootstrap'

const LogandSign = (props, {title = 'Login and Regist Page'}) => {
  return (
    <>
      <Head>
        <title>{title + '.   ' + titleDescription()}</title>
        <meta property="og:description" content={ pageDescription() }/>
      </Head>
      <Layout>
        <Container fluid>
          <Row>
            <Col className='d-none d-sm-none d-md-block' md={1} lg={1} xl={1}>
            </Col>
            <Col xs={12} sm={12} md={10} lg={10} xl={10}>
              <Row>
                <Login />
                <Signin />
              </Row>
              <br /><br /><br />
            </Col>
            <Col className='d-none d-sm-none d-md-block' md={1} lg={1} xl={1}></Col>
          </Row>
        </Container>
      </Layout>
    </>
  )
}

export default LogandSign
