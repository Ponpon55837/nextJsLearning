import Layout from '../components/MyLayout.js'
import fetch from 'isomorphic-unfetch'
import Card from 'react-bootstrap/Card'
import Accordion from 'react-bootstrap/Accordion'

const About = ({ stars }) => {
  return (
    <Layout>
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
    </Layout>
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
