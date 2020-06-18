import Layout from '../components/layout'
import Head from 'next/head'
import { parkStyle } from '../styles/utilStyle.js'
import fetch from 'isomorphic-unfetch'
import { getPark } from './apiComponents/functionContextJson.js'
// bootstrap
import { Card, Col, Row, Container } from 'react-bootstrap'

const Contact = (props, {title = 'Contact to the park'}) => {
  return (
    <>
      <Head><title>{title}</title></Head>
      <Layout>
        <Container fluid>
          <Row>
            <Col className='d-none d-sm-none d-md-block' md={1} lg={2} xl={2}>
            </Col>
            <Col xs={12} sm={12} md={10} lg={8} xl={8}>
              <h1>Contacts</h1>
              {
                getPark() ? getPark().map(park => (
                  <Card key={`${park.areaId} + ${park.parkId}`} park={park} style={parkStyle}>
                    <Card.Header>{park.areaName}</Card.Header>
                    <Card.Body>
                      <Card.Title>{park.introduction}</Card.Title>
                      <Card.Text>
                        {park.payGuide}
                      </Card.Text>
                    </Card.Body>
                    <Card.Footer><cite title="Source Title">({park.address})</cite></Card.Footer>
                  </Card>
                )) : 'Loading...'
              }
              <br /><br />
            </Col>
            <Col className='d-none d-sm-none d-md-block' md={1} lg={2} xl={2}></Col>
          </Row>
        </Container>
      </Layout>
    </>
  )
}

export default Contact
