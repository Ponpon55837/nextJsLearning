import Layout from '../components/layout'
import Head from 'next/head'
import { ReposJson, SubscribersJson } from './apiComponents/reposJson.js'
import { titleDescription, h1Mapping, pageDescription } from './apiComponents/functionContextJson.js'
// bootstrap
import { Col, Row, Container } from 'react-bootstrap'

const About = ({ repos, subscribers, title ='About this url page', h1_id = 3, arr_id = 3 }) => {
  return (
    <>
      <Head>
        <title>{title + '.   ' + titleDescription()}</title>
        <meta property="og:description" content={ !repos.svn_url ? pageDescription() : repos.svn_url + subscribers.login + '.' + pageDescription() }/>
      </Head>
      <Layout>
        <Container fluid>
          <Row>
            <Col className='d-none d-sm-none d-md-block' md={1} lg={1} xl={1}>
            </Col>
            <Col xs={12} sm={12} md={10} lg={10} xl={10}>
              { !h1Mapping() ? null : h1Mapping(h1_id, arr_id) }
              <Row>
                <ReposJson repos={repos} />
                <SubscribersJson subscribers={subscribers} />
              </Row>
            </Col>
            <Col className='d-none d-sm-none d-md-block' md={1} lg={1} xl={1}></Col>
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
