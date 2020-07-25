import Layout from '../components/layout'
import Head from 'next/head'
import { parkStyle, wordStyle } from '../styles/utilStyle.js'
import fetch from 'isomorphic-unfetch'
import { getPark, titleDescription, h1Mapping, pageDescription } from './apiComponents/functionContextJson.js'
import utilStyles from '../styles/utils.module.css'
// bootstrap
import { Card, Col, Row, Container, Badge } from 'react-bootstrap'

const Contact = (props, {title = 'Contact to the park', h1_id = 5, arr_id = 5}) => {

  return (
    <>
      <Head>
        <title>{title + '.   ' + titleDescription()}</title>
        <meta property="og:description" content={ !getPark() ? pageDescription() : getPark().map(park => (park.introduction)) + '.' + pageDescription() }/>
      </Head>
      <Layout>
        <Container fluid>
          <Row>
            <Col className='d-none d-sm-none d-md-block' md={1} lg={1} xl={1}>
            </Col>
            <Col xs={12} sm={12} md={10} lg={10} xl={10}>
              { !h1Mapping() ? null : h1Mapping(h1_id, arr_id) }
              <Row>
                {
                  !getPark() ? 'Loading ...' :
                  getPark().map(park => (
                    <Col xs={12} sm={12} md={12} lg={6} xl={4} key={`${park.areaId} + ${park.parkId}`} style={wordStyle}>
                      <Card park={park} style={parkStyle}>
                        <Card.Header>{park.areaName}</Card.Header>
                        <Card.Body>
                          <Badge className='mr-2' variant='info'>
                            {
                              !(park.introduction.length > 20) ? park.introduction :
                              park.introduction.substring(0,20) + '...'
                            }
                          </Badge>
                          <Badge className='' variant='secondary'>
                            {
                              !(park.address.length > 20) ? park.address :
                              park.address.substring(0,20) + '...'
                            }
                          </Badge>
                          <div className='mt-2'>
                            {park.payGuide}
                          </div>
                        </Card.Body>
                      </Card>
                    </Col>
                  ))
                }
              </Row>
              <br /><br />
            </Col>
            <Col className='d-none d-sm-none d-md-block' md={1} lg={1} xl={1}></Col>
          </Row>
        </Container>
      </Layout>
    </>
  )
}

// Contact.post('/', (req,res) => {
//   console.log(req)
// })

export default Contact
