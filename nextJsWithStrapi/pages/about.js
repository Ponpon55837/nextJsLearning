import Layout from '../components/MyLayout.js'
import fetch from 'isomorphic-unfetch'
import Head from 'next/head'
// bootstrap
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import ListGroup from 'react-bootstrap/ListGroup'
import Card from 'react-bootstrap/Card'
import Accordion from 'react-bootstrap/Accordion'

const About = ({ stars, title ='About this url page' }) => {
  return (
    <>
      <Head><title>{title}</title></Head>
      <Layout>
        <Container fluid>
          <Row>
            <Col xs={0} sm={0} md={1} lg={2} xl={2}>
            </Col>
            <Col xs={12} sm={12} md={10} lg={8} xl={8}>
              <h1>This is the about page</h1>
              <Accordion defaultActiveKey="0">
                <Card>
                  <Accordion.Toggle as={Card.Header} eventKey="0">
                    {stars.svn_url}
                  </Accordion.Toggle>
                  <Accordion.Collapse eventKey="0">
                    <Card.Body><a href={stars.subscribers_url}>{stars.homepage}</a></Card.Body>
                  </Accordion.Collapse>
                </Card>
              </Accordion>
            </Col>
            <Col xs={0} sm={0} md={1} lg={2} xl={2}></Col>
          </Row>
        </Container>
      </Layout>
    </>
  )
}

About.getInitialProps = async function ({ req }) {
  const res = await fetch('https://api.github.com/repos/zeit/next.js')
  const data = await res.json()

  console.log(`Show data fetched. Count: ${data.length}`)

  return {
    stars: data
  }
}

export default About
