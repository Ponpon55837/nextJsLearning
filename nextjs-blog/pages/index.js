import Link from 'next/link'
import Head from 'next/head'
import Layout from '../components/layout'
import { getHeader, titleDescription, getheadingH1, pageDescription } from './apiComponents/functionContextJson.js'
import { wordCapitalize } from '../styles/utilStyle.js'
import utilStyles from '../styles/utils.module.css'
// bootstrap
import { Button, Col, Row, Container } from 'react-bootstrap'

const Home = ({ title = 'Index Page' }) => {
  const h1_id = 1
  const arr_id = 1
  return (
    <div className={utilStyles.indexBG}>
      <Head>
        <title>{title + '.   ' + titleDescription()}</title>
        <meta property="og:description" content={ !getHeader() ? pageDescription() : getHeader().map(header => (header.title)) + '.' + pageDescription() }/>
      </Head>
      <Container fluid>
        <Row>
          <Col className={utilStyles.homeShow} xs={12} sm={12} md={8} lg={6} xl={6}>
            {
              !getheadingH1() ? 'Loading ...' :
              getheadingH1().map(headingH1 => (
                <h1 className={utilStyles.divH1} key={headingH1.id}>
                  {!(headingH1.id == h1_id && headingH1.arr[0].id == arr_id) ? null : headingH1.h1}
                </h1>
              ))
            }
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
