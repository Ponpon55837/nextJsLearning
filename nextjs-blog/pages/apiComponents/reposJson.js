import fetch from 'isomorphic-unfetch'
import { Col, ListGroup, Card, Accordion } from 'react-bootstrap'

export const ReposJson = ({ repos }) => {
  return (
    <Col xs={12} sm={12} md={12} lg={12} xl={12}>
      <Accordion defaultActiveKey={repos.svn_url}>
        <Card>
          <Accordion.Toggle as={Card.Header} eventKey={repos.svn_url}>
            {repos.svn_url}
          </Accordion.Toggle>
          <Accordion.Collapse eventKey={repos.svn_url}>
            <Card.Body><a href={repos.subscribers_url} title={`Connect to ${repos.homepage} Page`}>{repos.homepage}</a></Card.Body>
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
          !subscribers ?  'Loading ...' :
          subscribers.map(subs => (
            <Accordion defaultActiveKey={subs.id} key={subs.id}>
              <Card>
                <Accordion.Toggle as={Card.Header} eventKey={subs.id}>
                  {subs.login}
                </Accordion.Toggle>
                <Accordion.Collapse eventKey={subs.id}>
                  <Card.Body>
                    <a href={subs.url} title={`Connect to ${subs.login} Page`}>{subs.login}</a>
                  </Card.Body>
                </Accordion.Collapse>
              </Card>
            </Accordion>
          ))
        }
      </Col>
    </>
  )
}
