import Layout from '../components/layout'
import Head from 'next/head'
import { ReposJson, SubscribersJson } from './apiComponents/reposJson.js'
import { titleDescription, getheadingH1, pageDescription } from './apiComponents/functionContextJson.js'
import utilStyles from '../styles/utils.module.css'
// bootstrap
import { Col, Row, Container } from 'react-bootstrap'

const About = ({ repos, subscribers, title ='About this url page' }) => {
  const h1_id = 3
  const arr_id = 3
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
              {
                !getheadingH1() ? 'Loading ...' :
                getheadingH1().map(headingH1 => (
                  <h1 className={utilStyles.headingH1} key={headingH1.id}>
                    {!(headingH1.id == h1_id && headingH1.arr[0].id == arr_id) ? null : headingH1.h1}
                  </h1>
                ))
              }
              <ReposJson repos={repos} /><br />
              <SubscribersJson subscribers={subscribers} />
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
