import Link from 'next/link'
import Head from 'next/head'
import Layout from '../components/layout'
import headerlink from '../pages/api/headerlink.json'
import utilStyles from '../styles/utils.module.css'
// bootstrap
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Button from 'react-bootstrap/Button'

const Home = ({ title = 'Index Page' }) => {
  return (
    <div className={utilStyles.indexBG}>
      <Head><title>{title}</title></Head>
      <Layout>
        <Container fluid>
          <Row>
            <Col className='d-none d-sm-none d-md-block' md={2} lg={2} xl={2}>
            </Col>
            <Col className={utilStyles.homeShow} xs={12} sm={12} md={10} lg={8} xl={8}>
              <h1 className={utilStyles.divH1}>WelCome</h1>
              { // if else判斷式，用來避免萬一沒有load到資料時，會報錯，直接顯示loading
                getHeader().map(header => (
                  <Button variant="outline-dark" size='lg' block className={utilStyles.buttonControl}>
                    <Link href={header.link} key={header.id}><a style={wordCapitalize}>{header.title}</a></Link>
                  </Button>
                ))
              }
            </Col>
            <Col className='d-none d-sm-none d-md-none d-lg-block' lg={2} xl={2}></Col>
          </Row>
        </Container>
      </Layout>
    </div>
  )
}

const wordCapitalize = {
  textTransform: "capitalize"
}

const getHeader = () => {
  return headerlink
}

export default Home
