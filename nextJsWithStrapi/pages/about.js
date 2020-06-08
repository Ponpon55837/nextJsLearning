import Layout from '../components/MyLayout.js'
import Head from 'next/head'
import { ReposJson, SubscribersJson } from './apiComponents/reposJson.js'
// bootstrap
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

const About = ({ repos, subscribers, title ='About this url page' }) => {
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
              <SubscribersJson subscribers={subscribers} />
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
  const res_subscribers = await fetch('https://api.github.com/repos/vercel/next.js/subscribers')
  const data_repos = await res_repos.json()
  const data_subscribers = await res_subscribers.json()

  console.log(`Show data fetched. Count: ${data_repos.length}`)
  console.log(`Show data fetched. Count: ${data_subscribers.length}`)

  return {
    props:{
      repos: data_repos,
      subscribers: data_subscribers
    }
  }
}

export default About


// class component用法 可是使用起來串街的太多 反而變得很複雜

// import React from 'react'
//
// class Page extends React.Component {
//   static async getInitialProps(ctx) {
//     const res = await fetch('https://api.github.com/repos/zeit/next.js')
//     const json = await res.json()
//     return { stars: json.stargazers_count }
//   }
//
//   render() {
//     return <div>Next stars: {this.props.stars}</div>
//   }
// }
//
// export default Page
