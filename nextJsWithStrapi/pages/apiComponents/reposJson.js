import fetch from 'isomorphic-unfetch'
import Col from 'react-bootstrap/Col'
import ListGroup from 'react-bootstrap/ListGroup'
import Card from 'react-bootstrap/Card'
import Accordion from 'react-bootstrap/Accordion'

export const ReposJson = ({ repos }) => {
  return (
    <Col xs={12} sm={12} md={12} lg={12} xl={12}>
      <Accordion defaultActiveKey={repos.svn_url}>
        <Card>
          <Accordion.Toggle as={Card.Header} eventKey={repos.svn_url}>
            {repos.svn_url}
          </Accordion.Toggle>
          <Accordion.Collapse eventKey={repos.svn_url}>
            <Card.Body><a href={repos.subscribers_url}>{repos.homepage}</a></Card.Body>
          </Accordion.Collapse>
        </Card>
      </Accordion>
    </Col>
  )
}

export const SubscribersJson = ({ subscribers }) => {
  return (
    <>
      <Col xs={12} sm={12} md={12} lg={12} xl={12}>
        {
          subscribers ? subscribers.map(subs => (
            <Accordion defaultActiveKey={subs.id}>
              <Card>
                <Accordion.Toggle as={Card.Header} eventKey={subs.id}>
                  {subs.login}
                </Accordion.Toggle>
                <Accordion.Collapse eventKey={subs.id}>
                  <Card.Body>
                    <a href={subs.url}>{subs.login}</a>
                  </Card.Body>
                </Accordion.Collapse>
              </Card>
            </Accordion>
          )) : 'Loading...'
        }
      </Col>
    </>
  )
}
