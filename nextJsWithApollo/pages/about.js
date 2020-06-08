import Layout from '../components/MyLayout.js'
import Head from 'next/head'
import ReposJson from './apiComponents/reposJson.js'
// bootstrap
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

const About = ({ repos, repos_sub, title ='About this url page' }) => {
  return (
    <>
      <Head><title>{title}</title></Head>
      <Layout>
        <Container fluid>
          <Row>
            <Col className='d-none d-sm-none d-md-block' md={1} lg={2} xl={2}>
            </Col>
            <Col xs={12} sm={12} md={10} lg={8} xl={8}>
              <h1>This is the about page</h1>
              <ReposJson repos={repos} /><br />
            </Col>
            <Col className='d-none d-sm-none d-md-block' md={1} lg={2} xl={2}></Col>
          </Row>
        </Container>
      </Layout>
    </>
  )
}

export const getStaticProps = async({ req }) => {
  const res_repos = await fetch('https://api.github.com/repos/zeit/next.js')
  const data_repos = await res_repos.json()

  console.log(`Show data fetched. Count: ${data_repos.length}`)

  return {
    props:{
      repos: data_repos,
    }
  }
}

export default About
