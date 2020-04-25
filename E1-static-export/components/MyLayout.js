// import Banner from './banner'
import Header from './Header'
import Footer from './Footer'
import Head from 'next/head'

// bootstrap
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import ListGroup from 'react-bootstrap/ListGroup'

const layoutStyle = {
    // paddingTop: '60px'
}

const Layout = (props) => {
  return (
    <div>
      <Head>
        <title>My first NextJS project</title>
        <link href="https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-Vkoo8x4CGsO3+Hhxv8T/Q5PaXtkKtu6ug5TOeNV6gBiFeWPGFN9MuhOf23Q9Ifjh" crossorigin="anonymous" />
      </Head>
      <Header />
      <br />
      <Container>
        <Row>
          <Col xs={0} sm={0} md={3} lg={3} xl={3}>
            <ListGroup>
              <ListGroup.Item>Cras justo odio</ListGroup.Item>
            </ListGroup>
          </Col>
          <Col xs={12} sm={12} md={8} lg={8} xl={8}>{props.children}</Col>
          <Col xs={0} sm={0} md={1} lg={1} xl={1}></Col>
        </Row>
      </Container>
      <br />
      <Footer />
    </div>
  )
}

export default Layout
