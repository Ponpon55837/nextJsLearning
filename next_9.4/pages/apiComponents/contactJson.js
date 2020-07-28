import React from 'react'
import { getPark, ifElseFunc, useWindowSize } from './functionContextJson.js'
import { parkStyle, wordStyle } from '../../styles/utilStyle.js'
import { Row, Col, Accordion, Card, Badge } from 'react-bootstrap'

export const ContactJson = () => {
  const webAtThisMointorSize = useWindowSize()
  return (
    <>
      {
        !getPark() ? 'Loading ...' :
        getPark().map(park => (
          <Col xs={12} sm={12} md={12} lg={6} xl={4} key={`${park.areaId} + ${park.parkId}`} style={wordStyle}>
            <Accordion defaultActiveKey='false'>
              <Card park={park} style={parkStyle}>
                <Accordion.Toggle as={Card.Header} eventKey={`${park.areaId} + ${park.parkId}`}>
                  {park.areaName}
                </Accordion.Toggle>
                <Card.Subtitle className='text-muted m-2'>
                  <Badge className='mr-2 mb-1' variant='info'>
                    {
                      ifElseFunc(webAtThisMointorSize, park.introduction)
                    }
                  </Badge>
                  <Badge className='' variant='secondary'>
                    {
                      ifElseFunc(webAtThisMointorSize, park.address)
                    }
                  </Badge>
                </Card.Subtitle>
                <Accordion.Collapse eventKey={`${park.areaId} + ${park.parkId}`}>
                  <Card.Body>
                    {park.payGuide}
                  </Card.Body>
                </Accordion.Collapse>
              </Card>
            </Accordion>
          </Col>
        ))
      }
    </>
  )
}
