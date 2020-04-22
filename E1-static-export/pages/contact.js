import Layout from '../components/MyLayout'
import fetch from 'isomorphic-unfetch'
import park from './api/parkAPI.json'
import Card from 'react-bootstrap/Card'

const Contact = (props) => {
  return (
    <Layout>
      <h1>Contacts</h1>
      {
        getPosts().map(park => (
          <Card key={park.areaId} park={park} style={parkStyle}>
            <Card.Header>{park.areaName}</Card.Header>
            <Card.Body>
              <Card.Title>{park.introduction}</Card.Title>
              <Card.Text>
                {park.payGuide}
              </Card.Text>
            </Card.Body>
            <Card.Footer><cite title="Source Title">({park.address})</cite></Card.Footer>
          </Card>
        ))
      }
      <br /><br />
    </Layout>
  )
}

const getPosts = () => {
  return park
}

const parkStyle = {
  margin:'10px 0 10px 0'
}

export default Contact
