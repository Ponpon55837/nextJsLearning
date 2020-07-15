import Link from 'next/link'
import Head from 'next/head'
import Layout from '../components/layout'
import { getHeader, titleDescription, h1Mapping, pageDescription } from './apiComponents/functionContextJson.js'
import { wordCapitalize } from '../styles/utilStyle.js'
import utilStyles from '../styles/utils.module.css'
// bootstrap
import { Button, Col, Row, Container } from 'react-bootstrap'

const Home = ({ title = 'Index Page', h1_id = 1, arr_id = 1 }) => {
  return (
    <div className={utilStyles.indexBG}>
      <Head>
        <title>{title + '.   ' + titleDescription()}</title>
        <meta property="og:description" content={ !getHeader() ? pageDescription() : getHeader().map(header => (header.title)) + '.' + pageDescription() }/>
      </Head>
      <Container fluid>
        <Row>
          <Col className={utilStyles.homeShow} xs={12} sm={12} md={8} lg={6} xl={6}>
            { !h1Mapping() ? null : h1Mapping(h1_id, arr_id) }
            { // if else判斷式，用來避免萬一沒有load到資料時，會報錯，直接顯示loading
              !getHeader() ? 'Loading ...' :
              getHeader().map(header => (
                <Button variant="outline-dark" size='lg' block className={utilStyles.buttonControl} key={header.id}>
                  <Link href={header.link}><a style={wordCapitalize} title={`Connect to ${header.title} Page`}>{header.title}</a></Link>
                </Button>
              ))
            }
          </Col>
        </Row>
      </Container>
    </div>
  )
}

export default Home
