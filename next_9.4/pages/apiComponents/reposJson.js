import fetch from 'isomorphic-unfetch'
import { Col, ListGroup, Card, Accordion, Badge } from 'react-bootstrap'

export const ReposJson = ({ repos }) => {
  return (
    <Col xs={12} sm={6} md={6} lg={4} xl={4}>
      <Accordion defaultActiveKey={repos.svn_url}>
        <Card>
          <Accordion.Toggle as={Card.Header} eventKey={repos.svn_url}>
            {repos.svn_url}
          </Accordion.Toggle>
          <Accordion.Collapse eventKey={repos.svn_url}>
            <Card.Body>
              <a href={repos.subscribers_url} title={`Connect to ${repos.homepage} Page`}>
                {repos.homepage}
              </a>
            </Card.Body>
          </Accordion.Collapse>
        </Card><br />
      </Accordion>
    </Col>
  )
}

export const SubscribersJson = ({ subscribers }) => {
  return (
    <>
      {
        !subscribers ?  'Loading ...' :
        subscribers.map(subs => (
          <Col xs={12} sm={6} md={6} lg={4} xl={4} key={subs.id}>
            <Accordion defaultActiveKey='false'>
              <Card>
                <Accordion.Toggle as={Card.Header} eventKey={subs.id}>
                  {subs.login}
                </Accordion.Toggle>
                <Card.Subtitle >
                  <Badge className='my-3 ml-3' variant='info'>
                    ID:{subs.id}
                  </Badge>
                </Card.Subtitle>
                <Accordion.Collapse eventKey={subs.id}>
                  <Card.Body>
                    <a href={subs.url}
                    title={`Connect to ${subs.login} Page`}>{subs.login}</a>
                  </Card.Body>
                </Accordion.Collapse>
              </Card><br />
            </Accordion>
          </Col>
        ))
      }
    </>
  )
}
