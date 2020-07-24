import Layout from '../components/layout'
import Head from 'next/head'
import { titleDescription, h1Mapping, pageDescription, handler } from './apiComponents/functionContextJson.js'
import layout from '../styles/layout.module.css'
import utilStyles from '../styles/utils.module.css'
import { buttonStyle } from '../styles/utilStyle.js'
import { Container, Row, Col, Button } from 'react-bootstrap'

const Custom404 = ({ title = 'This Page is Not Found', pageDes = 'This page is for 404 not found.', h1_id = 8, arr_id = 8 }) => {
  return (
    <>
      <Head>
        <title>{title + '.   ' + titleDescription()}</title>
        <meta property="og:description" content={ !pageDes ? pageDescription() : pageDes + '.' + pageDescription() }/>
      </Head>
      <Layout>
        <div className={`${layout.container} ${utilStyles.notfound}`}>
          { !h1Mapping() ? null : h1Mapping(h1_id, arr_id) }
          <Container>
          	<Row>
          		<Col className='text-center my-5 py-3'>
                <Button
                  title="redirect to home page"
                  style={buttonStyle}
                  className='text-capitalize font-weight-bold my-5 py-3'
                  onClick={handler}>
                  click this button to redirect to home page
                </Button>
              </Col>
          	</Row>
          </Container>
        </div>
      </Layout>
    </>
  )
}

export default Custom404
